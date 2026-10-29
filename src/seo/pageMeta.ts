import { site } from '../config/site';
import { CLASSES } from '../data/classCatalog';
import { getClassDetail } from '../data/classDetails';
import { en } from '../i18n/locales/en';

/**
 * Single source of truth for per-URL metadata.
 * Used by the build-time prerender (head tags, page list, sitemap) and by the client at runtime,
 * so titles/descriptions/canonicals stay identical before and after JavaScript runs.
 *
 * Metadata is English on purpose: the prerendered HTML is English, and every URL keeps one fixed
 * title/description regardless of the UI language toggle (there are no separate language URLs).
 */
export type PageMeta = {
  /** Router path with leading and trailing slash, e.g. "/classes/" ("/" for home) */
  path: string;
  title: string;
  description: string;
  image: string;
  noindex?: boolean;
  /** Include in sitemap.xml (prerendered, indexable content pages only) */
  sitemap?: boolean;
  jsonLd?: object;
};

const OG_IMAGE = `${site.siteUrl}/hero-battle.png`;
const BRAND_SUFFIX = 'RPGSkills Minecraft RPG Plugin';

const STATIC_PAGES: Omit<PageMeta, 'image'>[] = [
  {
    path: '/',
    title: 'RPGSkills - Minecraft RPG Plugin with Classes and Skills',
    description:
      'RPGSkills is a free Minecraft RPG plugin for Paper and Spigot 26.2 and 26.1.2 with 32 classes, skill trees, custom monsters, quests, boss raids, and parties.',
    sitemap: true,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: site.name,
      url: `${site.siteUrl}/`,
    },
  },
  {
    path: '/installation/',
    title: `How to Install RPGSkills on Paper or Spigot | ${site.name}`,
    description:
      'Install the RPGSkills Minecraft RPG plugin: server requirements, the right JAR for Minecraft 26.2 or 26.1.2, resource pack setup, first commands, and troubleshooting.',
    sitemap: true,
  },
  {
    path: '/classes/',
    title: `32 Classes - ${BRAND_SUFFIX}`,
    description:
      'Browse all 32 RPGSkills classes across 8 archetypes and 4 roles, with recommended gear, stats, skill trees, and custom weapon crafting recipes.',
    sitemap: true,
  },
  {
    path: '/skills/',
    title: `Skills and Skill Trees - ${BRAND_SUFFIX}`,
    description:
      'How RPGSkills class skills work: skill tree layout, limit breaks, combo chains, passives, ultimates, elements, and controls, plus the skill list of every class.',
    sitemap: true,
  },
  {
    path: '/simulator/',
    title: `Skill Coefficient Calculator | ${site.name}`,
    description: en.simulator.pageDescription,
    sitemap: true,
  },
  {
    path: '/features/',
    title: `Features - ${BRAND_SUFFIX}`,
    description:
      'Custom monsters with biome scaling, combo field bosses, elemental weapon upgrades with /smith, quests, boss raids, parties, and per-world configuration in RPGSkills.',
    sitemap: true,
  },
  {
    path: '/download/',
    title: `Download RPGSkills for Minecraft 26.2 and 26.1.2 | ${site.name}`,
    description:
      'Download the RPGSkills plugin JAR for Minecraft 26.2 or 26.1.2 from GitHub Releases, plus the optional resource pack for custom textures.',
    sitemap: true,
  },
  {
    path: '/support/',
    title: `Commands, FAQ and Support | ${site.name}`,
    description:
      'RPGSkills player, party, and admin commands, frequently asked questions, and how to report bugs through GitHub Issues.',
    sitemap: true,
  },
  {
    path: '/story/',
    title: `Lore: Return of the Wither | ${site.name}`,
    description: en.story.pageDescription,
    sitemap: true,
  },
  {
    path: '/donate/',
    title: `Donate | ${site.name}`,
    description: en.donate.pageDescription,
    sitemap: true,
  },
  // Community lists are prerendered so direct access works, but posts load from Firebase at runtime,
  // so they are left out of the sitemap.
  {
    path: '/community/free/',
    title: `Free Board | ${site.name} Community`,
    description: en.community.free.pageDescription,
  },
  {
    path: '/community/qna/',
    title: `Q&A | ${site.name} Community`,
    description: en.community.qna.pageDescription,
  },
];

function classPageMeta(classId: string): PageMeta | null {
  const cls = CLASSES.find((c) => c.id === classId);
  const detail = getClassDetail(classId);
  if (!cls || !detail) return null;

  const archetype = en.classes.archetypeLabels[cls.archetype];
  const role = en.classes.roleLabels[cls.role];
  const portrait = detail.proficiency.tiers[0]?.portraitFile;
  return {
    path: `/classes/${cls.id}/`,
    title: `${cls.en.name} Class - ${BRAND_SUFFIX}`,
    description: `${cls.en.name} is a ${archetype} ${role} class in RPGSkills. ${cls.en.summary} Recommended gear: ${cls.en.equipment}. Lore, limit breaks, and the full skill tree.`,
    image: portrait ? `${site.siteUrl}/class-icons/${portrait}` : OG_IMAGE,
    sitemap: true,
  };
}

/** "/classes" → "/classes/", "" → "/" */
export function normalizePath(pathname: string): string {
  const withLead = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return withLead.endsWith('/') ? withLead : `${withLead}/`;
}

export function getPageMeta(pathname: string): PageMeta {
  const path = normalizePath(pathname);

  const page = STATIC_PAGES.find((p) => p.path === path);
  if (page) return { ...page, image: OG_IMAGE };

  const classMatch = /^\/classes\/([^/]+)\/$/.exec(path);
  const classMeta = classMatch ? classPageMeta(classMatch[1]) : null;
  if (classMeta) return classMeta;

  // Community posts and write/edit forms: user content loaded at runtime, not prerendered.
  if (path.startsWith('/community/')) {
    return {
      path,
      title: `Community | ${site.name}`,
      description: en.community.free.pageDescription,
      image: OG_IMAGE,
      noindex: true,
    };
  }

  return {
    path,
    title: `${en.notFound.title} | ${site.name}`,
    description: en.notFound.body,
    image: OG_IMAGE,
    noindex: true,
  };
}

/** Every URL written as a static HTML file at build time. */
export function getPrerenderPages(): PageMeta[] {
  const classPages = CLASSES.map((c) => classPageMeta(c.id)).filter((m): m is PageMeta => m !== null);
  return [...STATIC_PAGES.map((p) => ({ ...p, image: OG_IMAGE })), ...classPages];
}

export function canonicalUrl(meta: PageMeta): string {
  return `${site.siteUrl}${meta.path}`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Head tags for the prerendered HTML (build time). */
export function renderHeadTags(meta: PageMeta): string {
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const url = escapeHtml(canonicalUrl(meta));
  const image = escapeHtml(meta.image);
  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    meta.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${site.name}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ];
  if (meta.jsonLd) {
    // "<" is escaped so the JSON can never close the script element early.
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(meta.jsonLd).replace(/</g, '\\u003c')}</script>`,
    );
  }
  return tags.join('\n    ');
}

function upsertHeadTag(selector: string, create: () => HTMLElement, attr: string, value: string | null) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (value === null) {
    el?.remove();
    return;
  }
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/** Keeps head tags in sync after client-side navigation (runtime). */
export function applyPageMeta(meta: PageMeta): void {
  const url = canonicalUrl(meta);
  const named = (name: string) => () => Object.assign(document.createElement('meta'), { name });
  const property = (prop: string) => () => {
    const el = document.createElement('meta');
    el.setAttribute('property', prop);
    return el;
  };

  document.title = meta.title;
  upsertHeadTag('meta[name="description"]', named('description'), 'content', meta.description);
  upsertHeadTag('meta[name="robots"]', named('robots'), 'content', meta.noindex ? 'noindex' : null);
  upsertHeadTag(
    'link[rel="canonical"]',
    () => Object.assign(document.createElement('link'), { rel: 'canonical' }),
    'href',
    meta.noindex ? null : url,
  );
  upsertHeadTag('meta[property="og:title"]', property('og:title'), 'content', meta.title);
  upsertHeadTag('meta[property="og:description"]', property('og:description'), 'content', meta.description);
  upsertHeadTag('meta[property="og:url"]', property('og:url'), 'content', url);
  upsertHeadTag('meta[property="og:image"]', property('og:image'), 'content', meta.image);
}
