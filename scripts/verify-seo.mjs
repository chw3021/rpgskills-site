/**
 * Build step 4/4: fails the build when the static output breaks basic SEO or loading guarantees.
 *
 * Checks every dist/**\/index.html: lang="en", one title (unique), meta description, h1 with text,
 * self-referencing canonical, and that every /rpgskills-site/ asset or page link it references exists.
 * Checks sitemap.xml: every URL maps to a prerendered file whose canonical equals that URL.
 * Checks 404.html: noindex and no canonical.
 */
import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_URL = 'https://chw3021.github.io/rpgskills-site';
const BASE = '/rpgskills-site/';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const errors = [];

async function findIndexFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return entry.name === 'assets' ? [] : findIndexFiles(full);
      return entry.name === 'index.html' ? [full] : [];
    }),
  );
  return nested.flat();
}

/** "/rpgskills-site/classes/" → dist/classes/index.html, "/rpgskills-site/logo.svg" → dist/logo.svg */
function localTarget(urlPath) {
  const rel = decodeURIComponent(urlPath.slice(BASE.length).split(/[?#]/)[0]);
  if (rel === '' || rel.endsWith('/') || !path.extname(rel)) return path.join(distDir, rel, 'index.html');
  return path.join(distDir, rel);
}

function first(html, pattern) {
  return pattern.exec(html)?.[1];
}

const titles = new Map();
const files = await findIndexFiles(distDir);

for (const file of files) {
  const html = await readFile(file, 'utf-8');
  const rel = path.relative(distDir, path.dirname(file)).split(path.sep).filter(Boolean).join('/');
  const expectedUrl = `${SITE_URL}/${rel ? `${rel}/` : ''}`;
  const label = `/${rel}${rel ? '/' : ''}`;

  // SVG <title> tooltips live in <body>, so only the head is checked for the document title.
  const head = html.slice(0, html.indexOf('</head>'));
  if (!html.includes('<html lang="en">')) errors.push(`${label}: missing <html lang="en">`);
  if ((head.match(/<title>/g) ?? []).length !== 1) errors.push(`${label}: expected exactly one <title> in head`);

  const title = first(head, /<title>([^<]+)<\/title>/);
  if (!title) errors.push(`${label}: empty title`);
  else if (titles.has(title)) errors.push(`${label}: title duplicates ${titles.get(title)}`);
  else titles.set(title, label);

  if (!first(html, /<meta name="description" content="([^"]+)"/)) errors.push(`${label}: missing description`);
  if (!/<h1[^>]*>[^<]*\S/.test(html)) errors.push(`${label}: missing h1 text`);

  const canonical = first(html, /<link rel="canonical" href="([^"]+)"/);
  if (canonical !== expectedUrl) errors.push(`${label}: canonical ${canonical} !== ${expectedUrl}`);

  for (const [, ref] of html.matchAll(/(?:src|href)="(\/rpgskills-site\/[^"]*)"/g)) {
    if (!existsSync(localTarget(ref))) errors.push(`${label}: broken reference ${ref}`);
  }
}

const sitemap = await readFile(path.join(distDir, 'sitemap.xml'), 'utf-8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (sitemapUrls.length === 0) errors.push('sitemap.xml: no URLs');
if (new Set(sitemapUrls).size !== sitemapUrls.length) errors.push('sitemap.xml: duplicate URLs');
for (const url of sitemapUrls) {
  if (!url.startsWith(`${SITE_URL}/`) || url.includes('#')) {
    errors.push(`sitemap.xml: invalid URL ${url}`);
    continue;
  }
  const file = localTarget(`${BASE}${url.slice(SITE_URL.length + 1)}`);
  if (!existsSync(file)) {
    errors.push(`sitemap.xml: ${url} has no prerendered file`);
    continue;
  }
  const html = await readFile(file, 'utf-8');
  if (!html.includes(`<link rel="canonical" href="${url}"`)) errors.push(`sitemap.xml: ${url} canonical mismatch`);
  if (html.includes('name="robots" content="noindex"')) errors.push(`sitemap.xml: ${url} is noindex`);
}

const notFound = await readFile(path.join(distDir, '404.html'), 'utf-8');
if (!notFound.includes('<meta name="robots" content="noindex"')) errors.push('404.html: missing noindex');
if (notFound.includes('rel="canonical"')) errors.push('404.html: must not have a canonical');

if (errors.length > 0) {
  console.error(`SEO verification failed (${errors.length}):\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log(`SEO verification passed: ${files.length} pages, ${sitemapUrls.length} sitemap URLs, 404.html.`);
