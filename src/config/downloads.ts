import { site, type SupportedMcVersion } from './site';

export const downloads = {
  jar: {
    /** GitHub asset name for a given MC / Spigot API line */
    assetFileName: (mcVersion: SupportedMcVersion) => `RPGskills-${mcVersion}.jar`,
    fallbackUrl: (mcVersion: SupportedMcVersion) =>
      `https://github.com/${site.githubOrg}/${site.pluginReleaseRepo}/releases/latest/download/RPGskills-${mcVersion}.jar`,
    matchesAsset: (assetName: string, mcVersion: SupportedMcVersion) =>
      assetName.toLowerCase() === `RPGskills-${mcVersion}.jar`.toLowerCase(),
  },
  resourcePack: {
    githubZip: `${site.resourcePackRepo}/archive/refs/heads/master.zip`,
  },
} as const;
