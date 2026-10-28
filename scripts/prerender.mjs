/**
 * Build step 3/4: writes static HTML for every content page, the 404 fallback, and sitemap.xml.
 *
 * Input:  dist/index.html (client build) + dist-ssr/entry-server.js (SSR build of src/entry-server.tsx)
 * Output: dist/<path>/index.html, dist/404.html, dist/sitemap.xml
 *
 * GitHub Pages serves dist/<path>/index.html for /rpgskills-site/<path>/, so each page answers
 * direct access and refresh with real HTML. Paths that are not prerendered (community posts)
 * receive 404.html, which boots the same SPA and renders the route on the client.
 */
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const HEAD_PATTERN = /<!--app-head-->[\s\S]*?<!--\/app-head-->/;
const ROOT_TAG = '<div id="root"></div>';

const template = await readFile(path.join(distDir, 'index.html'), 'utf-8');
if (!HEAD_PATTERN.test(template) || !template.includes(ROOT_TAG)) {
  throw new Error('dist/index.html is missing the <!--app-head--> markers or the empty root element.');
}

const { render, renderNotFoundHead, getPrerenderPages, canonicalUrl } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

/** Function replacers keep "$" sequences in rendered content from being treated as patterns. */
function fillTemplate(head, appHtml) {
  return template
    .replace(HEAD_PATTERN, () => head)
    .replace(ROOT_TAG, () => `<div id="root">${appHtml}</div>`);
}

const pages = getPrerenderPages();
for (const page of pages) {
  const { html, head } = render(page.path);
  const outDir = path.join(distDir, ...page.path.split('/').filter(Boolean));
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, 'index.html'), fillTemplate(head, html), 'utf-8');
}

// SPA fallback for runtime-only routes (community posts); marked noindex in its head.
await writeFile(path.join(distDir, '404.html'), fillTemplate(renderNotFoundHead(), ''), 'utf-8');

// lastmod is omitted on purpose: the build time is not the date the content changed.
const sitemapUrls = pages.filter((p) => p.sitemap && !p.noindex).map((p) => canonicalUrl(p));
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapUrls.map((url) => `  <url><loc>${url}</loc></url>`),
  '</urlset>',
  '',
].join('\n');
await writeFile(path.join(distDir, 'sitemap.xml'), sitemap, 'utf-8');

await rm(ssrDir, { recursive: true, force: true });

console.log(`Prerendered ${pages.length} pages, 404.html, and sitemap.xml (${sitemapUrls.length} URLs).`);
