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
    /** Same pack for every version; pack.mcmeta is pinned to the chosen version's format */
    assetFileName: (mcVersion: SupportedMcVersion) => `RPGskills-ResourcePack-${mcVersion}.zip`,
    zipUrl: (mcVersion: SupportedMcVersion) =>
      `${site.resourcePackRepo}/releases/download/latest/RPGskills-ResourcePack-${mcVersion}.zip`,
  },
} as const;
