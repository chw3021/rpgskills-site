# Spigot resource page — BBCode copy-paste

Paste into [RPGSkills resource edit](https://www.spigotmc.org/resources/rpgskills.122034/edit).

| Spigot field | What to use |
|--------------|-------------|
| **Game version** | Minecraft **1.21.x** (pick every 1.21.x build your server JAR supports) |
| **External download link** | `https://github.com/chw3021/rpgskills-releases/releases/latest/download/RPGskills.jar` |
| **Main description** | BBCode block below |
| **Do not link** | Private source `rpgskills.github.io` as download |

### Version reference (matches `rpgskills.github.io/pom.xml`)

| What | Value |
|------|--------|
| **Spigot API (build)** | `26.1.2-R0.1-SNAPSHOT` (`spigot-api` dependency) |
| **API line (marketing)** | **26.1.2** / **26.1+** |
| **Minecraft (players)** | **1.21.x** — server JAR must ship Spigot/Paper API **26.1.x** |
| **Plugin release** | **v1.0.1** (GitHub Releases tag) |

Old Spigot posts said “1.21.3” with API `1.21.x`. The project now compiles against **API 26.1.2** — use a **1.21.x Paper/Spigot build that reports API 26.1.2+**, not legacy `1.21.1` API jars.

**Current release:** RPGSkills **v1.0.1** · **Spigot/Paper API 26.1.2** · Minecraft **1.21.x**

---

## Short tagline (optional — plain text field)

```
RPGSkills v1.0.1 — Spigot/Paper API 26.1.2 · MC 1.21.x · Official site & GitHub Releases
```

---

## Full description — BBCode (copy everything inside the fence)

```bbcode
[B][SIZE=7]Requires Spigot/Paper API 26.1.2+[/SIZE][/B]
[SIZE=5][I]RPGSkills v1.0.1 · Built with spigot-api 26.1.2-R0.1-SNAPSHOT · Minecraft 1.21.x servers[/I][/SIZE]

[B][SIZE=6]RPGSkills — Transform Your Minecraft Server into an RPG Adventure![/SIZE][/B]
Take your Minecraft server to the next level with RPGSkills. Custom monsters, weapons, armor, skills, quests, boss raids, and parties — with full guides on the official website.

[SIZE=4][B]Download & official site[/B][/SIZE]
[LIST]
[*][URL='https://chw3021.github.io/rpgskills-site/'][B]Official website[/B][/URL] — features, install, FAQ
[*][URL='https://github.com/chw3021/rpgskills-releases/releases'][B]Download JAR (GitHub Releases)[/B][/URL] — latest: [URL='https://github.com/chw3021/rpgskills-releases/releases/latest/download/RPGskills.jar']RPGskills.jar[/URL]
[*][URL='https://chw3021.github.io/rpgskills-site/#/classes'][B]32 classes & crafting recipes[/B][/URL]
[*][URL='https://github.com/chw3021/rpgskills-releases/issues']Bug reports (GitHub Issues)[/URL]
[/LIST]

[SIZE=3][B]Features:[/B][/SIZE]
[LIST]
[*][B]Custom Monsters[/B]: Unique enemies with special abilities and biome-based scaling
[*][B]Powerful Weapons & Armor[/B]: Custom items; enhance with elemental fragments and [B][COLOR=#b300b3][U]/smith[/U][/COLOR][/B]
[*][B]32 Classes & Skills[/B]: 8 archetypes × 4 roles — [URL='https://chw3021.github.io/rpgskills-site/#/classes']class guide[/URL]; [B]/rpg skill[/B], [B]/rpg rank[/B], [B]/rpg graph[/B]
[*][B]Quests[/B]: Quest NPCs appear after structure loot
[*][B]Combo & Field Bosses[/B]: At 5 combo stacks, extra monsters spawn; milestones summon field bosses
[*][B]Boss Raids[/B]: Jungle, Nether, End ([B][COLOR=#5900b3]EnderMimic[/COLOR][/B]), Wither Raid (Beta)
[*][B]Party System[/B]: Create, join, invite, kick, assemble, and more
[*][B]Resource Pack Support[/B]: Custom visuals (Beta)
[*][URL='https://github.com/chw3021/RpgSkills'][B]Resource Pack (GitHub)[/B][/URL] — Code → Download ZIP
[*][URL='https://drive.google.com/drive/folders/1R15Wa20upC6G7iPtvptJF0fONp8Os8dH?usp=sharing'][B]Resource Pack (Google Drive)[/B][/URL]
[/LIST]

[SIZE=3][B]Flexible Configuration:[/B][/SIZE]
[LIST]
[*][B]Multi-Language Support[/B]: Set your preferred language in the config file
[*][B]World-Specific Settings[/B]: Enable or disable the plugin per world
[/LIST]

[SIZE=3][B]Installation:[/B][/SIZE]
[LIST=1]
[*]Run [B]Spigot or Paper 1.21.x[/B] with API [B]26.1.2[/B] or newer ([I]check /version or build logs — must match 26.1+, not old 1.21.1 API[/I])
[*]Download [B]RPGskills.jar[/B] from [URL='https://github.com/chw3021/rpgskills-releases/releases']GitHub Releases[/URL]
[*]Place the file in your server's [B]plugins/[/B] folder and restart
[*]Apply the resource pack (server [B]resource-pack[/B] or per-player client)
[*]Edit [B]plugins/RPGskills/[/B] config (language, worlds, etc.)
[/LIST]

Ready to start? [URL='https://chw3021.github.io/rpgskills-site/#/download'][B]Download on the official site[/B][/URL] or use GitHub Releases above.





[B][SIZE=7]RPGSkills — Detailed Guide[/SIZE][/B]

[SIZE=3][B]Biome-Based Monster Scaling and Weapon Enhancement[/B][/SIZE]
[LIST]
[*]Monsters' strength varies depending on the biome. Each biome grants unique elemental fragments used to enhance weapons.
[*][B]Biome order[/B]:
[LIST=1]
[*]Netherite: Earth (Plains) → Wind (Mountain, Hill)
[*]Frost (Frozen) → Ocean → Dark (Forest) → Hyper (Desert)
[*]Burning (Badlands) → Poison (Swamp) → Wild (Jungle)
[*][I]Trident and Mace are part of the Netherite order.[/I]
[/LIST]
[*][B]Weapon enhancement[/B]:
[LIST]
[*]Netherite weapons can be leveled up using elemental fragments
[*]Tridents and Maces can be enhanced directly, bypassing Netherite requirements
[*]Smith weapons with [B][COLOR=#b300b3][U]/smith[/U][/COLOR][/B] (equipment in slot 1, ingredient in slot 2)
[/LIST]
[/LIST]

[SIZE=3][B]Quest NPCs[/B][/SIZE]
[LIST]
[*]Quest NPCs appear after obtaining loot from structures. They provide tasks and objectives for players.
[/LIST]

[SIZE=3][B]Combo System and Field Bosses[/B][/SIZE]
[LIST]
[*]Defeating monsters increases your combo count. At [B]5 combo stacks[/B], additional monsters spawn.
[*]At certain combo milestones, a [B]Field Boss[/B] appears with greater challenges and rewards.
[/LIST]

[SIZE=3][B]Boss Raids[/B][/SIZE]
[LIST]
[*]In [B][COLOR=#00b300]Jungle[/COLOR][/B] and [B][COLOR=#ff0000]Nether[/COLOR][/B], killing monsters may generate a portal. Right-click the portal to enter a boss raid.
[*][B][COLOR=#5900b3]End[/COLOR][/B]: Killing [B][COLOR=#5900b3]EnderMimic[/COLOR][/B] generates a raid portal.
[*][B]Wither Raid[/B] (Beta): Summon and defeat the Wither in the field to open the Wither Raid portal.
[/LIST]

[FONT=Verdana][SIZE=4][U][B]If you reinstalled the plugin, delete the boss raid world folders in your server directory.[/B][/U]
[U][B]Folders: OverworldRaid, NethercoreRaid, EndercoreRaid, WitherRaid[/B][/U][/SIZE][/FONT]

[SIZE=3][B]Party System[/B][/SIZE]
Players can form parties with these commands:

[LIST]
[*]/party create [I]&lt;partyname&gt;[/I]: Create a party (you become owner)
[*]/party join [I]&lt;partyname&gt;[/I]: Join a party
[*]/party password [I]&lt;password&gt;[/I]: Lock the party with a password
[*]/party invite [I]&lt;playername&gt;[/I]: Invite a player (owner only)
[*]/party kick [I]&lt;playername&gt;[/I]: Kick a player (owner only)
[*]/party leave: Leave the current party
[*]/party assemble: Teleport all members to the owner (owner only)
[*]/party list: List parties and owners
[/LIST]

[SIZE=3][B]Command List[/B][/SIZE]
[LIST]
[*]/rpg dam (/rpg d, /rpg damage): Show current attack damage
[*]/rpg element (/rpg el): Elemental power and resistance
[*]/rpg skill (/rpg s): Open skills GUI
[*]/rpg escape (/rpg es): End the current fight
[*]/rpg class (/rpg c): Open class GUI ([URL='https://chw3021.github.io/rpgskills-site/#/classes']all classes on website[/URL])
[*]/rpg rank (/rpg r): Top 10 class proficiency rankings
[*]/rpg graph (/rpg g): Damage dealt to enemies
[*]/rpg gclear (/rpg gc): Clear recorded damage
[*]/smith: Smith equipment in slot 1 using ingredient in slot 2
[/LIST]

[B]Admin commands:[/B]
[LIST]
[*]/rpg exp [amount]: Grant experience
[*]/rpg pro [amount]: Grant proficiency points
[*]/rpg enchant [enchantment] [level]: Enchant main-hand item
[*]/rpg enchant clear: Remove enchantments from main hand
[*]/rpg elements (/rpg elm): Open elements inventory
[/LIST]

[SIZE=4][B]Custom Weapon Crafting[/B] ([I]Netherite-tier weapons also via [COLOR=#b300b3][B][U]/smith[/U][/B][/COLOR][/I])[/SIZE]
Craft with alternative materials. Full grids: [URL='https://chw3021.github.io/rpgskills-site/#/classes']official crafting tab[/URL]

[LIST]
[*][B]Bow, Crossbow, Fishing Rod[/B]: Replace wood components with other materials
[*][B]Knuckle[/B]:
[code]x a x
  x [/code]
[*][B]Wand[/B]:
[code]x
 a
 a [/code]
[*][B]Dagger[/B]:
[code]x
 a [/code]
[*][B]x[/B]: Material · [B]a[/B]: Stick
[/LIST]
All recipes are reversible (can be mirrored horizontally).

[SIZE=3][B]More help[/B][/SIZE]
[LIST]
[*][URL='https://chw3021.github.io/rpgskills-site/#/support']Commands, FAQ & bug reports[/URL]
[*][URL='https://www.spigotmc.org/resources/rpgskills.122034/']Spigot reviews & discussion[/URL]
[/LIST]
```

---

## Spigot editor checklist

1. **Supported versions** → tick **1.21.x** (all builds you test). Description should say **API 26.1.2+**, not only “1.21.3”.
2. **Download** → External link = Releases JAR URL (table above).
3. **Description** → paste BBCode block (no ` ``` ` fences).
4. **Updates tab** → optional short update, e.g. `v1.0.1 — Public site + GitHub Releases download; class/crafting guide on official website.`

---

## Update post BBCode (optional — “Updates” section)

```bbcode
[SIZE=5][B]RPGSkills v1.0.1[/B][/SIZE]
[LIST]
[*]Public download: [URL='https://github.com/chw3021/rpgskills-releases/releases']GitHub Releases[/URL]
[*]Official site: [URL='https://chw3021.github.io/rpgskills-site/']chw3021.github.io/rpgskills-site[/URL]
[*]32-class guide & crafting: [URL='https://chw3021.github.io/rpgskills-site/#/classes']/classes[/URL]
[*]Built for [B]Spigot/Paper API 26.1.2[/B] ([I]spigot-api 26.1.2-R0.1-SNAPSHOT[/I]) · Minecraft [B]1.21.x[/B]
[/LIST]
```
