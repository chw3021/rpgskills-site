import type { Translations } from '../types';

export const en: Translations = {
  meta: {
    htmlLang: 'en',
    siteDescription:
      'RPGSkills — Transform your Minecraft server into an RPG adventure. Custom monsters, skills, quests, raids, and more.',
  },
  nav: {
    home: 'Home',
    story: 'Story',
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
    tagline: 'Under the Wither’s shadow—turn your server into an RPG adventure',
    intro:
      'Custom monsters, weapons, armor, skills, quests, boss raids, and a party system — turn your server into an RPG adventure.',
    download: 'Download',
    spigot: 'Spigot Page',
    gettingStarted: 'Getting Started',
    compatible: 'Compatible with',
    mcVersionLabel: 'Spigot/Paper API 26.1.2 (26.1.2-R0.1-SNAPSHOT) · Minecraft 1.21.x',
    battleImageAlt:
      'The Wither descends through violet mist as swordsmen, archers, mages, and other heroes charge to meet it',
  },
  home: {
    whyTitle: 'Why RPGSkills?',
    viewAllFeatures: 'View all features',
    viewClasses: 'Class guide & crafting',
    championsTitle: 'Thirty-two champions answer the call',
    championsHint:
      'Every class brings its own weapons and skills to the front line. In a world under the Wither’s shadow, the path you choose becomes the last line of defense.',
  },
  story: {
    pageTitle: 'Lore — Return of the Wither',
    pageDescription:
      'The broken seal, a land slowly consumed, and thirty-two classes rising to answer the catastrophe.',
    epigraph:
      '“The day the ancient seal shattered, the sky split open in violet—and the earth remembered the Wither’s breath.”',
    teaserLabel: 'RPGSkills Lore',
    teaserTitle: 'When the seal broke, the world began to drown in the Wither’s breath',
    teaserParagraphs: [
      'For centuries the Wither slept behind a seal forged at terrible cost. When it finally broke, violet mist rolled across the continents. Monsters grew crueler, raiders bolder, and even ordinary adventurers—including you—felt the corruption seep in, breath by breath.',
      'To survive, heroes chose their classes and grew stronger together. The final goal is singular: strike down the Wither of this world, then cut the roots of the calamity spreading through parallel dimensions beyond.',
    ],
    readFull: 'Read the full story',
    chapters: [
      {
        title: 'Chapter I — The Broken Seal',
        paragraphs: [
          'Legend holds that the first Wither devoured the world’s balance until mystics bound it with their lives. Time gnawed at that prison; the moment dimensional rifts widened, the sky turned violet once more.',
          'When the seal failed completely, echoes of the Wither rose everywhere—End depths, Nether fire, jungle gloom. At first people called it a disaster. Soon they understood it was not an ending, but a beginning.',
        ],
      },
      {
        title: 'Chapter II — A Land Consumed',
        paragraphs: [
          'The Wither’s aura seeped into the air itself. Violet fog wrapped villages at night; by day, monsters fought with new fury and cunning. Raider bands no longer feared failed assaults, and villagers endured behind locked doors.',
          'Adventurers—everyone on your server, yourself included—were not spared. The longer you fought, the more a cold fatigue settled in your bones; the deeper you mastered skills, the more you felt the Wither grin at the edge of sight. Yet corruption was also awakening. In despair, people chose their classes, took up arms, and learned to stand back to back.',
        ],
      },
      {
        title: 'Chapter III — Champions of the Classes',
        paragraphs: [
          'Swordsmen with sweeping blades, archers with storming arrows, chemists wielding alchemical fire, Ocean Knights channeling the tide—thirty-two paths opened, each carving through the Wither’s legions in its own way.',
          'Parties became the walls that shielded towns; quests became compasses for lost hope. A Wither defeated in the open world could open the gate to a raid—and beyond that gate, sterner trials waited. Heroes were no longer merely surviving; they were learning how to let the world breathe again.',
        ],
      },
      {
        title: 'Chapter IV — Beyond the Parallel Veil',
        paragraphs: [
          'When the first Wither fell, the sky seemed to clear for a moment. The rifts did not close. In parallel worlds—other continents adrift in other timelines—seals broke in tandem, and their Withers and monsters fed one another’s catastrophe.',
          'The true end is not a single boss on the ground. Overworld, Nether, End, and the heart of the Wither Raid—all dimensional tears must be sealed, and the remnants hunted to the last parallel shore. The class you pick, the mastery you earn, the party you lead may become the final seal.',
        ],
      },
    ],
    ctaTitle: 'Continue your chapter',
    ctaBody:
      'Choose a class, master your skills, and challenge the raids. The world is not over yet—and the hero’s place is still open.',
    ctaClasses: 'Browse classes',
    ctaDownload: 'Download the plugin',
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
    viewDetail: 'View details',
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
  classDetail: {
    pageTitle: 'Class details',
    notFoundTitle: 'Class not found',
    notFoundBody: 'This class has no detail page yet, or the URL is invalid.',
    backToRoster: '← All classes',
    classIndex: '{n} / {total}',
    storyTitle: 'Lore',
    skillsTitle: 'Skills',
    skillsHint: 'Matches the in-game /rpg skill GUI. Damage scales with skill level and proficiency.',
    elementLabel: 'Element',
    elementEarth: 'Earth',
    sectionBase: 'Base skills',
    sectionLimit1: '1st limit break',
    sectionLimit2: '2nd limit break',
    tierBase: 'Base',
    tierLimit1: '1st',
    tierLimit2: '2nd',
    proficiencyHint: 'Proficiency {exp1}+ → 1st limit break, {exp2}+ → 2nd limit break',
    unlockAt: 'Unlocks at proficiency {exp}',
    inputLabel: 'Input',
    followUp: 'Follow-up',
    passive: 'Passive',
    ultimate: 'Ultimate',
    masterLevel: 'Master LV.{lv}',
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
