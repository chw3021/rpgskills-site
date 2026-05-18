import type { Translations } from '../types';

export const en: Translations = {
  meta: {
    htmlLang: 'en',
    siteDescription:
      'RPGSkills — Transform your Minecraft server into an RPG adventure. Custom monsters, skills, quests, raids, and more.',
  },
  nav: {
    home: 'Home',
    features: 'Features',
    classes: 'Classes',
    install: 'Install',
    download: 'Download',
    support: 'Support',
    donate: 'Donate',
    ariaMain: 'Main navigation',
  },
  lang: {
    label: 'Language',
    en: 'English',
    ko: '한국어',
  },
  hero: {
    tagline: 'Transform your Minecraft server into an RPG adventure',
    intro:
      'Custom monsters, weapons, armor, skills, quests, boss raids, and a party system — turn your server into an RPG adventure.',
    download: 'Download',
    spigot: 'Spigot Page',
    gettingStarted: 'Getting Started',
    compatible: 'Compatible with',
    mcVersionLabel: 'Spigot/Paper API 26.1.2 (26.1.2-R0.1-SNAPSHOT) · Minecraft 1.21.x',
  },
  home: {
    whyTitle: 'Why RPGSkills?',
    viewAllFeatures: 'View all features',
    viewClasses: 'Class guide & crafting',
  },
  features: {
    pageTitle: 'Features',
    pageDescription:
      'Overview of RPGSkills systems — monsters, items, quests, raids, parties, and configuration.',
    sections: [
      {
        title: 'Custom Monsters & Combat',
        items: [
          'Unique enemies with special abilities challenge your players',
          'Biome-based monster scaling — strength varies by biome',
          'Combo system: at 5 stacks, extra monsters spawn; milestones summon field bosses',
        ],
      },
      {
        title: 'Weapons, Armor & Skills',
        items: [
          'Wide variety of custom weapons and armor for your adventure',
          '32 classes across 8 archetypes and 4 roles — see the Classes page',
          'Skills & abilities: /rpg skill, proficiency rankings /rpg rank, damage graph /rpg graph',
          'Resource pack support for custom visuals (Beta)',
        ],
      },
      {
        title: 'Biome Elements & Enhancement',
        items: [
          'Each biome grants unique elemental fragments to enhance weapons',
          'Order: Earth (Plains) → Wind (Mountain/Hill) → Frost → Ocean → Dark (Forest) → Hyper (Desert) → Burning (Badlands) → Poison (Swamp) → Wild (Jungle)',
          'Netherite weapons level up with fragments; Trident and Mace can be enhanced directly',
          'Smith gear with /smith — netherite-tier weapons via ingredients',
        ],
      },
      {
        title: 'Quests & Boss Raids',
        items: [
          'Quest NPCs appear after structure loot with tasks and objectives',
          'Jungle & Nether: killing monsters may spawn a portal — right-click to enter a boss raid',
          'End: killing EnderMimic spawns a raid portal',
          'Wither Raid (Beta): summon and defeat the Wither in the field to open the Wither Raid portal',
          'After reinstall, delete: OverworldRaid, NethercoreRaid, EndercoreRaid, WitherRaid',
        ],
      },
      {
        title: 'Party & Server Configuration',
        items: [
          'Party commands: create, join, password, invite, kick, leave, assemble, list',
          'Multi-language support in config',
          'Enable or disable the plugin per world',
          'Drop RPGskills.jar into plugins/, configure, and apply the resource pack',
        ],
      },
    ],
  },
  install: {
    pageTitle: 'Installation',
    pageDescription: 'Plugin setup, version compatibility, and resource pack guide.',
    versionNotice: 'Version',
    steps: [
      {
        title: '1. Prepare your server',
        body: 'Use Paper or Spigot 1.21.x with Spigot API 26.1.2 or newer (matches pom.xml spigot-api 26.1.2-R0.1-SNAPSHOT).',
      },
      {
        title: '2. Install the plugin',
        body: 'Place RPGskills.jar in the plugins folder and restart. Config is created under plugins/RPGskills/.',
      },
      {
        title: '3. Apply the resource pack',
        body:
          'Download the pack from the Download page. Use GitHub Code → Download ZIP or the Google Drive mirror. ' +
          'Distribute via server.properties resource-pack or per-player client install.',
      },
      {
        title: '4. Worlds & config',
        body:
          'Set language and per-world toggles in config. After reinstalling raids, deleting raid world folders is recommended.',
      },
    ],
  },
  download: {
    pageTitle: 'Download',
    pageDescription:
      'Get the latest plugin JAR and resource pack. The JAR link updates automatically from GitHub Releases.',
    pluginJar: 'Plugin JAR',
    latestFromGithub: 'Latest release from GitHub',
    loading: ' — loading…',
    apiFallback: 'API fallback',
    downloadJar: 'Download JAR',
    allReleases: 'All Releases',
    resourcePackGithub: 'Resource Pack (GitHub)',
    resourcePackGithubMeta: 'RpgSkills repository — Code → Download ZIP',
    downloadZip: 'Download ZIP',
    repository: 'Repository',
    resourcePackDrive: 'Resource Pack (Google Drive)',
    resourcePackDriveMeta: 'Alternative mirror for players',
    openDrive: 'Open Drive',
    noGithubReleaseHint:
      'Could not load the latest JAR from GitHub Releases. Open All Releases on chw3021/rpgskills-releases or use Spigot below.',
    getJarFromSpigot: 'Download from Spigot',
  },
  support: {
    pageTitle: 'Support',
    pageDescription: 'Commands reference, FAQ, and how to report bugs.',
    reportTitle: 'Report a bug',
    reportIntro: 'Including the details below helps us diagnose issues faster.',
    faqTitle: 'FAQ',
    commandsTitle: 'Commands',
    playerCommands: 'Player',
    partyCommands: 'Party',
    adminCommands: 'Admin',
    commandCol: 'Command',
    descriptionCol: 'Description',
    reportChannels: [
      {
        label: 'GitHub Issues',
        description: 'Bugs and feature requests (include logs and versions)',
      },
      {
        label: 'Spigot Resource',
        description: 'Reviews, discussions, and downloads',
      },
    ],
    bugReportChecklist: [
      'Server software and version (Paper/Spigot, 1.21.x)',
      'RPGSkills JAR version or Releases tag',
      'List of other plugins (/plugins)',
      'Steps to reproduce',
      'Full console stack trace',
      'Whether the resource pack is applied',
      'Related world / biome',
    ],
  },
  donate: {
    pageTitle: 'Donate',
    pageDescription: 'Support RPGSkills development. Donations do not unlock features.',
    intro:
      'RPGSkills is a free plugin. Donations help with development, hosting, and updates. ',
    introBold: 'Donations are not tied to premium feature unlocks.',
    paypalButton: 'Donate with PayPal',
    disclaimer1: '· Donations are voluntary support; digital content refunds may not be available.',
    disclaimer2: '· Payment and receipt inquiries are handled via your PayPal transaction history.',
    disclaimer3:
      '· Premium licenses will be offered separately with key activation in the future (Firebase planned).',
    premiumTitle: 'Coming later:',
    premiumBody:
      'Premium license purchase & key activation via Firebase — this page is ready for PremiumSection expansion.',
  },
  footer: {
    spigot: 'Spigot',
    releases: 'Releases',
    website: 'Website',
  },
  commands: {
    player: [
      { cmd: '/rpg dam (d, damage)', desc: 'Show current attack damage' },
      { cmd: '/rpg element (el)', desc: 'Display elemental power and resistance' },
      { cmd: '/rpg skill (s)', desc: 'Open skills GUI' },
      { cmd: '/rpg escape (es)', desc: 'End the current fight' },
      { cmd: '/rpg class (c)', desc: 'Open class GUI' },
      { cmd: '/rpg rank (r)', desc: 'Top 10 class proficiency rankings' },
      { cmd: '/rpg graph (g)', desc: 'Damage dealt to enemies' },
      { cmd: '/rpg gclear (gc)', desc: 'Clear recorded damage' },
      { cmd: '/smith', desc: 'Smith equipment in slot 1 using ingredient in slot 2' },
    ],
    party: [
      { cmd: '/party create <partyname>', desc: 'Create a party (you become owner)' },
      { cmd: '/party join <partyname>', desc: 'Join an existing party' },
      { cmd: '/party password <password>', desc: 'Lock party with a password' },
      { cmd: '/party invite <player>', desc: 'Invite a player (owner only)' },
      { cmd: '/party kick <player>', desc: 'Kick a player (owner only)' },
      { cmd: '/party leave', desc: 'Leave current party' },
      { cmd: '/party assemble', desc: 'Teleport all members to owner (owner only)' },
      { cmd: '/party list', desc: 'List parties and owners' },
    ],
    admin: [
      { cmd: '/rpg exp [amount]', desc: 'Grant experience' },
      { cmd: '/rpg pro [amount]', desc: 'Grant proficiency points' },
      { cmd: '/rpg enchant [enchant] [level]', desc: 'Enchant main-hand item' },
      { cmd: '/rpg enchant clear', desc: 'Remove enchantments from main hand' },
      { cmd: '/rpg elements (elm)', desc: 'Open elements inventory' },
    ],
  },
  classes: {
    pageTitle: 'Classes & Crafting',
    pageDescription:
      'All 32 playable classes from the in-game GUI, plus custom weapon crafting recipes.',
    tabListLabel: 'Classes page sections',
    tabClasses: 'Classes',
    tabCrafting: 'Crafting',
    archetypesTitle: 'Class archetypes (columns in /rpg class)',
    rolesTitle: 'Roles (rows in /rpg class)',
    rosterTitle: 'All classes',
    rosterHint: 'Stats match the in-game class selection GUI (Attack / Defence / Control / Support / Area / Range / Mobility).',
    filterArchetype: 'Archetype',
    filterRole: 'Role',
    filterAll: 'All',
    showingCount: 'Showing {count} classes',
    equipmentLabel: 'Recommended gear',
    portraitZoom: 'View larger portrait of {name}',
    closeLightbox: 'Close image',
    archetypeLabels: {
      warrior: 'Warrior',
      shooter: 'Shooter',
      fighter: 'Fighter',
      mage: 'Mage',
      technician: 'Technician',
      marine: 'Marine',
      avenger: 'Avenger',
      battleLine: 'Battle Line',
    },
    roleLabels: {
      assault: 'Assault',
      nuker: 'Nuker',
      suppressor: 'Suppressor',
      supporter: 'Supporter',
    },
    difficulty: { easy: 'Easy', normal: 'Normal', hard: 'Hard' },
    stats: {
      attack: 'Attack',
      defence: 'Defence',
      control: 'Control',
      support: 'Support',
      area: 'Area',
      range: 'Range',
      mobility: 'Mobility',
    },
  },
  crafting: {
    title: 'Custom weapon crafting',
    intro:
      'Craft Knuckle, Wand, and Dagger with alternative materials. Bow, Crossbow, and Fishing Rod recipes accept non-wood materials in place of planks.',
    smithTitle: '/smith:',
    smithBody:
      'Smith equipment in the first inventory slot using an ingredient in the second slot. Netherite-tier weapons can be obtained this way.',
    alternateTools:
      'Bow, Crossbow, Fishing Rod: replace wood components with other materials in the crafting grid.',
    mirrorNote: 'All recipes are reversible (can be mirrored horizontally).',
    legendMaterial: 'Material (any eligible block/item)',
    legendStick: 'Stick',
    legendMaterialShort: 'Mat',
    legendStickShort: 'Stk',
    recipeNames: { knuckle: 'Knuckle', wand: 'Wand', dagger: 'Dagger' },
  },
  faq: [
    {
      id: 'version-mismatch',
      question: 'What if my server version does not match?',
      answer:
        'RPGSkills is developed and tested for Spigot/Paper 1.21.x (API 26.1.2). ' +
        'Other major versions may break commands, monsters, or GUIs and show console errors.',
    },
    {
      id: 'resource-pack',
      question: 'Textures look broken without the resource pack',
      answer:
        'Custom weapons, armor, and monsters require the resource pack (Beta). ' +
        'Download it from the Download page (GitHub ZIP or Google Drive) and apply via server or client.',
    },
    {
      id: 'party-error',
      question: '/party commands throw errors',
      answer:
        'Check for command conflicts, outdated JAR, or corrupted config. ' +
        'Attach full console logs, /plugins list, and your RPGSkills version to Issues.',
    },
    {
      id: 'raid-world',
      question: 'Boss raid portals or worlds behave oddly',
      answer:
        'After reinstalling the plugin, delete OverworldRaid, NethercoreRaid, EndercoreRaid, and WitherRaid folders in the server directory.',
    },
    {
      id: 'monster-lag',
      question: 'Too many monsters spawn and cause lag',
      answer:
        'Biome scaling and the combo system add spawns. Review per-world settings in config and include biome and combo count when reporting.',
    },
    {
      id: 'backpack-gui',
      question: 'Loot / backpack GUI buttons do not work',
      answer:
        'Verify resource pack, version match, and conflicts with other GUI plugins. ' +
        'Report with the latest JAR and server logs for faster help.',
    },
  ],
};
