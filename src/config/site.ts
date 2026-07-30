export const site = {
  name: 'RPGSkills',
  tagline: 'Transform your Minecraft server into an RPG adventure',
  /** Default / recommended Minecraft line (newest first in supportedMcVersions) */
  mcVersion: '26.2',
  /** Matches recommended rpgskills-mc262 spigot-api */
  spigotApiVersion: '26.2',
  /** Supported MC / Spigot API lines — newest first */
  supportedMcVersions: ['26.2', '26.1.2'] as const,
  spigotUrl: 'https://www.spigotmc.org/resources/rpgskills.122034/',
  /** Private source — not used for JAR downloads */
  pluginRepo: 'https://github.com/chw3021/rpgskills.github.io',
  /** Public mirror — GitHub Releases API + direct JAR URLs */
  pluginReleaseRepo: 'rpgskills-releases',
  pluginPublicRepoUrl: 'https://github.com/chw3021/rpgskills-releases',
  pluginReleasesUrl: 'https://github.com/chw3021/rpgskills-releases/releases',
  resourcePackRepo: 'https://github.com/chw3021/RpgSkills',
  githubOrg: 'chw3021',
  siteUrl: 'https://chw3021.github.io/rpgskills-site',
  paypalDonateUrl: 'https://www.paypal.com/ncp/payment/4E3ZVDBYBCW62',
} as const;

export type SupportedMcVersion = (typeof site.supportedMcVersions)[number];
