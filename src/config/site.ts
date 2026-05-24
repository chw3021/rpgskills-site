export const site = {
  name: 'RPGSkills',
  tagline: 'Transform your Minecraft server into an RPG adventure',
  /** Minecraft line — use with matching Spigot/Paper API */
  mcVersion: '26.1.2',
  /** Matches rpgskills.github.io pom.xml spigot-api */
  spigotApiVersion: '26.1.2',
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
