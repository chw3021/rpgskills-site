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

export type Translations = {
  meta: {
    htmlLang: string;
    siteDescription: string;
  };
  nav: {
    home: string;
    features: string;
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
  };
  home: {
    whyTitle: string;
    viewAllFeatures: string;
  };
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
    source: string;
    website: string;
  };
  commands: {
    player: CommandRow[];
    party: CommandRow[];
    admin: CommandRow[];
  };
  faq: FaqEntry[];
};
