# RPGSkills — class character AI prompts (consistent style)

**1직업씩 전체 프롬프트(복사용):** [`CLASS_PROMPTS_ONE_BY_ONE.md`](./CLASS_PROMPTS_ONE_BY_ONE.md) ← **여기부터 쓰면 됨**

Use the **same master block** for all 32 classes. Only change the **Character** line.  
Recommended: **512×512** or **1024×1024**, square, export as `webp` → `public/class-icons/{id}.webp`.

Tools: Midjourney, DALL·E, Stable Diffusion, Ideogram, etc.

---

## Master style (copy into every prompt)

```
Minecraft Java Edition hero character, full body three-quarter view facing slightly right, classic blocky voxel proportions (cubic head, 4-pixel-wide arms, square torso), stylized official Minecraft promotional illustration (clean, not photorealistic), same art style as a cohesive game character roster, soft studio lighting from upper left, subtle emerald green rim accent (#3ecf8e), dark blue-gray gradient background (#0f1419 to #1a2332), heroic idle pose, weapon and armor clearly readable, no text, no logo, no watermark, 1:1 aspect ratio, character centered with padding, consistent scale: head height ~22% of frame
```

**Negative prompt (append if supported):**

```
photorealistic, anime, chibi, slim proportions, wrong minecraft proportions, extra fingers, blurry, low quality, text, watermark, logo, multiple characters, cropped feet, white background
```

**Consistency tips**

1. Generate **one** class first (e.g. SwordMan); lock seed / style reference if your tool supports it.
2. Use **image-to-image** or **style reference** from that first image for the rest.
3. Keep camera, background, and lighting words **identical**; only change outfit, weapon, and vibe.
4. File names must match `src/data/classCatalog.ts` `id` (case-sensitive): `fireMage.webp`, not `fire-mage.webp`.

---

## Per-class prompts

Replace `{MASTER}` with the master style block above.  
**EN** = paste into English models; **KO** = optional extra keywords for Korean UI context.

| ID | EN character line | KO hint |
|----|-------------------|---------|
| `swordman` | {MASTER} Character: Minecraft warrior with iron sword, light plate chest, wide sweeping slash pose, blue warrior archetype | 검사, 검, 광역 전사 |
| `archer` | {MASTER} Character: archer with bow drawn, quiver, green-trim leather armor, rapid fire stance | 궁수, 활 |
| `boxer` | {MASTER} Character: brawler with iron knuckles on both hands, bare iron helmet, tough front-line fighter | 권사, 너클 |
| `fireMage` | {MASTER} Character: mage holding glowing wand, fire particles, ember robes, aggressive caster | 화염술사, 완드, 불꽃 |
| `chemist` | {MASTER} Character: alchemist with pickaxe, potion flasks on belt, splash potion mid-throw, goggles | 화학자, 곡괭이, 포션 |
| `oceanKnight` | {MASTER} Character: knight with trident and shield, prismarine accents, water splash at feet | 바다기사, 삼지창 |
| `berserker` | {MASTER} Character: berserker with crimson sword, wild roots on shoulders, crimson aura, reckless battle pose | 광전사, 붉은 검 |
| `vanguard` | {MASTER} Character: spear soldier at front line, iron spear, supportive banner strap, sturdy armor | 선봉병, 창 |
| `hunter` | {MASTER} Character: hunter with iron axe raised, tracking cloak, single-target assassin energy | 사냥꾼, 도끼 |
| `sniper` | {MASTER} Character: sniper with crossbow scoped aim, minimal armor, long-range focus | 저격수, 쇠뇌 |
| `tamer` | {MASTER} Character: beast tamer with knuckles, wolf companion at side, lead rope | 조련사, 늑대 |
| `illusionist` | {MASTER} Character: illusionist with wand, mirror duplicate silhouette, jack-o-lantern magic motif | 환술사, 환영 |
| `forger` | {MASTER} Character: blacksmith fighter with pickaxe, floating weapon spirits, beacon glow | 무기공, 대장장이 |
| `nobility` | {MASTER} Character: sea noble with trident, heart-of-the-sea amulet, dolphin silhouette | 귀족, 바다 생물 |
| `daggerlist` | {MASTER} Character: dagger assassin dual blades, shadow wisps, shears-like daggers, agile crouch | 단검사, 그림자 |
| `cavalryman` | {MASTER} Character: cavalry lancer on armored horse silhouette simplified blocky, iron spear, speed lines | 기마병, 창, 말 |
| `broiler` | {MASTER} Character: mace bruiser with iron mace, shockwave stomp, crowd control pose | 투사, 철퇴 |
| `launcher` | {MASTER} Character: elemental archer, bow with spectral multi-color arrows, fireworks spark | 원소술사, 속성 화살 |
| `wreltler` | {MASTER} Character: wrestler with golden chestplate knuckles, grappling lock pose on invisible foe | 유술가, 레슬링 |
| `gardener` | {MASTER} Character: gardener with shovel, azalea leaves and vines growing from ground | 원예가, 삽, 식물 |
| `engineer` | {MASTER} Character: engineer with pickaxe, redstone dispenser gadgets, crowd pull vortex | 공학자, 레드스톤 |
| `frostMan` | {MASTER} Character: frost mage with dagger, packed ice crystals, freezing aura | 빙술사, 얼음 |
| `witherist` | {MASTER} Character: wither cultist with hoe, wither rose, black smoke trails, fast rogue stance | 위더리스트 |
| `sapper` | {MASTER} Character: sapper with shovel, small ballista/tnt contraption, siege engineer | 공병, 투석기 |
| `paladin` | {MASTER} Character: paladin with shield wall, axe and tower shield, holy defensive stance | 성기사, 방패 |
| `medic` | {MASTER} Character: arrow medic with crossbow, tipped healing arrow, medic cross symbol subtle | 의궁, 치유 쇠뇌 |
| `taoist` | {MASTER} Character: taoist with knuckles, floating talisman papers, soul campfire spirit | 도사, 부적 |
| `musician` | {MASTER} Character: bard with wand as conductor baton, jukebox note particles, uplifting performance | 예술가, 음악 |
| `cook` | {MASTER} Character: cook with shovel, cooked beef platter, warm food buff steam | 요리사 |
| `angler` | {MASTER} Character: angler with fishing rod, hooked phantom fish, supportive fisherman | 낚시꾼 |
| `witchDoctor` | {MASTER} Character: witch doctor with hoe and totem of undying off-hand, ritual mask, voodoo spirits | 부두술사 |
| `standardBearer` | {MASTER} Character: standard bearer with white banner flag and dagger, rallying troops pose | 기수, 깃발 |

---

## Example full prompt (SwordMan)

```
Minecraft Java Edition hero character, full body three-quarter view facing slightly right, classic blocky voxel proportions (cubic head, 4-pixel-wide arms, square torso), stylized official Minecraft promotional illustration (clean, not photorealistic), same art style as a cohesive game character roster, soft studio lighting from upper left, subtle emerald green rim accent (#3ecf8e), dark blue-gray gradient background (#0f1419 to #1a2332), heroic idle pose, weapon and armor clearly readable, no text, no logo, no watermark, 1:1 aspect ratio, character centered with padding, consistent scale: head height ~22% of frame. Character: Minecraft warrior with iron sword, light plate chest, wide sweeping slash energy, blue warrior archetype.
```

---

## Batch workflow (recommended)

1. Generate **swordman** → approve style.  
2. In Midjourney: `--sref` / `--cref` that image for rows 2–32.  
3. In SD: use same LoRA + reference IP-Adapter with low denoise (0.45–0.6).  
4. Rename exports to match table `id`.  
5. Optimize: `cwebp -q 85 swordman.png -o public/class-icons/swordman.webp`

---

## Plugin logo (separate from characters)

SVG sources: `public/logo-icon.svg`, `public/logo.svg`, `public/favicon.svg`  
Spigot export: see [`LOGO_EXPORT.md`](./LOGO_EXPORT.md).
