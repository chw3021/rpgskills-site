import { site } from './site';

export const downloads = {
  jar: {
    fallbackUrl: `https://github.com/${site.githubOrg}/${site.pluginReleaseRepo}/releases/latest/download/RPGskills.jar`,
    assetNamePattern: /^RPGskills(-.*)?\.jar$/i,
  },
  resourcePack: {
    githubZip: `${site.resourcePackRepo}/archive/refs/heads/master.zip`,
  },
} as const;
