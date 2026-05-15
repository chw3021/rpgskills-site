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
    mcVersionLabel: 'Spigot/Paper 1.21.x — tested with API 26.1.2-R0.1-SNAPSHOT',
  },
  home: {
    whyTitle: 'Why RPGSkills?',
    viewAllFeatures: 'View all features',
  },
  features: {
    pageTitle: 'Features',
    pageDescription: 'Core gameplay systems from the Spigot resource page, organized by category.',
    sections: [
      {
        title: 'Combat & Monsters',
        items: [
          'Custom monsters with special abilities and biome-based scaling',
          'Combo system — at 5 stacks, additional monsters spawn; milestones trigger field bosses',
          'Elemental progression: Earth → Wind → Frost → Ocean → Dark → Hyper → Burning → Poison → Wild',
        ],
      },
      {
        title: 'Items & Skills',
        items: [
          'Custom weapons, armor sets, and resource-pack visuals (Beta)',
          'Class skills, proficiency rankings, and damage tracking (/rpg skill, /rpg rank, /rpg graph)',
          'Weapon enhancement with elemental fragments; /smith for equipment',
          'Custom crafting: Knuckle, Wand, Dagger, and alternate-material bows & tools',
        ],
      },
      {
        title: 'Quests & Raids',
        items: [
          'Quest NPCs appear after structure loot — tasks and objectives for players',
          'Boss raids in Jungle, Nether, End (EnderMimic), and Wither Raid (Beta)',
          'After reinstall, delete raid world folders: OverworldRaid, NethercoreRaid, EndercoreRaid, WitherRaid',
        ],
      },
      {
        title: 'Party & Configuration',
        items: [
          'Party system: create, join, invite, kick, password, assemble, list',
          'Multi-language support in config',
          'Per-world enable/disable',
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
        body: 'Use Paper or Spigot 1.21.x. Builds compatible with API 26.1.2 are recommended.',
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
      'No GitHub Release with a JAR asset yet, or only pre-releases exist (the /releases/latest API returns 404). ' +
      'Push a version tag on rpgskills.github.io (e.g. v1.0.1) so Actions uploads RPGskills.jar, or download from Spigot below.',
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
    source: 'Source',
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
      { cmd: '/party create', desc: 'Create a party (you become owner)' },
      { cmd: '/party join', desc: 'Join an existing party' },
      { cmd: '/party password', desc: 'Lock party with password' },
      { cmd: '/party invite', desc: 'Invite a player (owner only)' },
      { cmd: '/party kick', desc: 'Kick a player (owner only)' },
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
