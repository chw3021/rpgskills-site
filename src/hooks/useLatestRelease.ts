import { useEffect, useState } from 'react';
import { downloads } from '../config/downloads';
import { site } from '../config/site';
import type { ReleaseInfo } from '../types/release';

const releasesUrl = site.pluginReleasesUrl;

type GithubRelease = {
  tag_name?: string;
  prerelease?: boolean;
  draft?: boolean;
  assets?: { name: string; browser_download_url: string }[];
};

function findJarAsset(release: GithubRelease | undefined) {
  return release?.assets?.find((a) => downloads.jar.assetNamePattern.test(a.name));
}

export function useLatestRelease(): ReleaseInfo {
  const [info, setInfo] = useState<ReleaseInfo>({
    version: 'latest',
    jarUrl: releasesUrl,
    loading: true,
    directJar: false,
  });

  useEffect(() => {
    const apiBase = `https://api.github.com/repos/${site.githubOrg}/${site.pluginReleaseRepo}`;

    const resolve = async () => {
      try {
        const latestRes = await fetch(`${apiBase}/releases/latest`);
        let release: GithubRelease | undefined;

        if (latestRes.ok) {
          release = (await latestRes.json()) as GithubRelease;
        } else if (latestRes.status === 404) {
          const listRes = await fetch(`${apiBase}/releases?per_page=30`);
          if (!listRes.ok) {
            throw new Error(`GitHub API ${listRes.status}`);
          }
          const list = (await listRes.json()) as GithubRelease[];
          release = list.find((r) => !r.draft && findJarAsset(r));
        } else {
          throw new Error(`GitHub API ${latestRes.status}`);
        }

        const asset = findJarAsset(release);
        if (asset?.browser_download_url) {
          setInfo({
            version: release?.tag_name ?? 'latest',
            jarUrl: asset.browser_download_url,
            loading: false,
            directJar: true,
          });
          return;
        }

        setInfo({
          version: '-',
          jarUrl: releasesUrl,
          loading: false,
          directJar: false,
          error: 'no_jar_on_github',
        });
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        setInfo({
          version: 'latest',
          jarUrl: releasesUrl,
          loading: false,
          directJar: false,
          error: message,
        });
      }
    };

    void resolve();
  }, []);

  return info;
}
