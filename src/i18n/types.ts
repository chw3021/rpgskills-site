export type Locale = 'en' | 'ko';

export type FaqEntry = {
  id: string;
  question: string;
  answer: string;
};

export type FeatureSection = {
  title: string;
  items: string[];
};

export type InstallStep = {
  title: string;
  body: string;
};

export type CommandRow = {
  cmd: string;
  desc: string;
};

export type ReportChannel = {
  label: string;
  description: string;
};

export type ClassesTranslations = {
  pageTitle: string;
  pageDescription: string;
  tabListLabel: string;
  tabClasses: string;
  tabCrafting: string;
  archetypesTitle: string;
  rolesTitle: string;
  rosterTitle: string;
  rosterHint: string;
  filterArchetype: string;
  filterRole: string;
  filterAll: string;
  showingCount: string;
  viewDetail: string;
  equipmentLabel: string;
  portraitZoom: string;
  closeLightbox: string;
  archetypeLabels: Record<
    | 'warrior'
    | 'shooter'
    | 'fighter'
    | 'mage'
    | 'technician'
    | 'marine'
    | 'avenger'
    | 'battleLine',
    string
  >;
  roleLabels: Record<'assault' | 'nuker' | 'suppressor' | 'supporter', string>;
  difficulty: Record<'easy' | 'normal' | 'hard', string>;
  stats: {
    attack: string;
    defence: string;
    control: string;
    support: string;
    area: string;
    range: string;
    mobility: string;
  };
};

export type ClassDetailTranslations = {
  pageTitle: string;
  notFoundTitle: string;
  notFoundBody: string;
  backToRoster: string;
  classIndex: string;
  storyTitle: string;
  skillsTitle: string;
  skillsHint: string;
  elementLabel: string;
  elementEarth: string;
  sectionBase: string;
  sectionLimit1: string;
  sectionLimit2: string;
  tierBase: string;
  tierLimit1: string;
  tierLimit2: string;
  proficiencyHint: string;
  unlockAt: string;
  inputLabel: string;
  followUp: string;
  passive: string;
  ultimate: string;
  masterLevel: string;
};

export type StoryChapter = {
  title: string;
  paragraphs: string[];
};

export type StoryTranslations = {
  pageTitle: string;
  pageDescription: string;
  epigraph: string;
  teaserLabel: string;
  teaserTitle: string;
  teaserParagraphs: string[];
  readFull: string;
  chapters: StoryChapter[];
  ctaTitle: string;
  ctaBody: string;
  ctaClasses: string;
  ctaDownload: string;
};

export type CraftingTranslations = {
  title: string;
  intro: string;
  smithTitle: string;
  smithBody: string;
  alternateTools: string;
  mirrorNote: string;
  legendMaterial: string;
  legendStick: string;
  legendMaterialShort: string;
  legendStickShort: string;
  recipeNames: Record<'knuckle' | 'wand' | 'dagger', string>;
};

export type Translations = {
  meta: {
    htmlLang: string;
    siteDescription: string;
  };
  nav: {
    home: string;
    story: string;
    features: string;
    classes: string;
    install: string;
    download: string;
    support: string;
    donate: string;
    ariaMain: string;
  };
  lang: {
    label: string;
    en: string;
    ko: string;
  };
  hero: {
    tagline: string;
    intro: string;
    download: string;
    spigot: string;
    gettingStarted: string;
    compatible: string;
    mcVersionLabel: string;
    battleImageAlt: string;
  };
  home: {
    whyTitle: string;
    viewAllFeatures: string;
    viewClasses: string;
    championsTitle: string;
    championsHint: string;
  };
  story: StoryTranslations;
  classes: ClassesTranslations;
  classDetail: ClassDetailTranslations;
  crafting: CraftingTranslations;
  features: {
    pageTitle: string;
    pageDescription: string;
    sections: FeatureSection[];
  };
  install: {
    pageTitle: string;
    pageDescription: string;
    versionNotice: string;
    steps: InstallStep[];
  };
  download: {
    pageTitle: string;
    pageDescription: string;
    pluginJar: string;
    latestFromGithub: string;
    loading: string;
    apiFallback: string;
    downloadJar: string;
    allReleases: string;
    resourcePackGithub: string;
    resourcePackGithubMeta: string;
    downloadZip: string;
    repository: string;
    resourcePackDrive: string;
    resourcePackDriveMeta: string;
    openDrive: string;
    noGithubReleaseHint: string;
    getJarFromSpigot: string;
  };
  support: {
    pageTitle: string;
    pageDescription: string;
    reportTitle: string;
    reportIntro: string;
    faqTitle: string;
    commandsTitle: string;
    playerCommands: string;
    partyCommands: string;
    adminCommands: string;
    commandCol: string;
    descriptionCol: string;
    reportChannels: ReportChannel[];
    bugReportChecklist: string[];
  };
  donate: {
    pageTitle: string;
    pageDescription: string;
    intro: string;
    introBold: string;
    paypalButton: string;
    disclaimer1: string;
    disclaimer2: string;
    disclaimer3: string;
    premiumTitle: string;
    premiumBody: string;
  };
  footer: {
    spigot: string;
    releases: string;
    website: string;
  };
  commands: {
    player: CommandRow[];
    party: CommandRow[];
    admin: CommandRow[];
  };
  faq: FaqEntry[];
};
