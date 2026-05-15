# RPGSkills Website

Official landing page for the [RPGSkills](https://www.spigotmc.org/resources/rpgskills.122034/) Minecraft plugin.

**Live URL:** https://chw3021.github.io/rpgskills-site/

## Development

```bash
npm install
npm run dev
```

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

JAR downloads come from [rpgskills.github.io releases](https://github.com/chw3021/rpgskills.github.io/releases).
