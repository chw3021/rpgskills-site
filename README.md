# RPGSkills Website

Official documentation and download site for [RPGSkills](https://www.spigotmc.org/resources/rpgskills.122034/), a free Minecraft RPG plugin with classes and skills for Paper and Spigot.

**Live URL:** https://chw3021.github.io/rpgskills-site/

## Official links

| Page | URL |
|------|-----|
| Introduction | https://chw3021.github.io/rpgskills-site/ |
| Installation guide | https://chw3021.github.io/rpgskills-site/installation/ |
| Classes (32) | https://chw3021.github.io/rpgskills-site/classes/ |
| Skills and skill trees | https://chw3021.github.io/rpgskills-site/skills/ |
| Download | https://chw3021.github.io/rpgskills-site/download/ |
| Commands, FAQ and support | https://chw3021.github.io/rpgskills-site/support/ |
| Plugin releases (JAR) | https://github.com/chw3021/rpgskills-releases/releases |
| Resource pack | https://github.com/chw3021/RpgSkills |
| Sitemap | https://chw3021.github.io/rpgskills-site/sitemap.xml |

Old hash links such as `/rpgskills-site/#/install` are rewritten in the browser to the new paths (client-side, not an HTTP redirect).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build runs four steps:

1. `tsc` and `vite build` (client bundle in `dist/`).
2. `vite build --ssr src/entry-server.tsx` (temporary `dist-ssr/`).
3. `scripts/prerender.mjs` writes `dist/<path>/index.html` for every content page, `dist/404.html` (noindex SPA fallback for community posts), and `dist/sitemap.xml`.
4. `scripts/verify-seo.mjs` fails the build if a page lacks a title, description, canonical, or h1, if a title repeats, if the sitemap and canonicals disagree, or if a referenced asset is missing.

Per-page titles, descriptions, and sitemap membership live in `src/seo/pageMeta.ts`. Add new routes there as well as in `src/routes/index.tsx`.

SEO and Search Console notes: [docs/SEO.md](docs/SEO.md).

## Manual deploy

```bash
npm run deploy
```

GitHub Actions also deploys on every push to `main` (see `.github/workflows/deploy-site.yml`).

## GitHub Pages setup

1. Push `main` branch (Actions builds and deploys automatically).
2. **Settings → Pages → Build and deployment → Source:** choose **GitHub Actions** (not “Deploy from a branch”).
3. Open **https://chw3021.github.io/rpgskills-site/** (must include `/rpgskills-site/` — the user root URL will 404).

If you previously used the `gh-pages` branch, switch the source to **GitHub Actions** and re-run the deploy workflow.

## Plugin releases

JAR downloads come from [rpgskills-releases](https://github.com/chw3021/rpgskills-releases/releases).
