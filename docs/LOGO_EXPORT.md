# Logo files & Spigot export

## Files in repo

| File | Use |
|------|-----|
| `public/favicon.svg` | Browser tab (32×32) |
| `public/logo-icon.svg` | Square icon only — **Spigot resource icon** |
| `public/logo.svg` | Horizontal lockup (site header, banners) |

Colors match the site theme: background `#0f1419`, accent `#3ecf8e`.

## Spigot resource icon

Spigot expects **PNG/JPG**, often **256×256** or **128×128**.

1. Open `public/logo-icon.svg` in browser or Figma/Inkscape.  
2. Export PNG **256×256** (transparent or dark background).  
3. Upload at [resource edit](https://www.spigotmc.org/resources/rpgskills.122034/edit) → Icon.

### Command line (Inkscape)

```bash
inkscape public/logo-icon.svg -w 256 -h 256 -o rpgskills-icon-256.png
```

### Command line (ImageMagick, if SVG rasterizer installed)

```bash
magick -background none public/logo-icon.svg -resize 256x256 rpgskills-icon-256.png
```

## AI logo prompt (optional higher detail)

If you want a richer raster logo instead of SVG:

```
Square app icon for "RPGSkills" Minecraft plugin, flat vector-like game logo, dark shield emblem with pixel sword and emerald green gem (#3ecf8e), dark background #0f1419, minimal clean esports style, readable at 64px, no text, no photograph, 1:1
Negative: cluttered, photorealistic, blurry text, copyright characters
```

Then composite with `logo.svg` text in Figma if needed.

## Site usage

Header and favicon load from `/rpgskills-site/logo-icon.svg` after deploy.
