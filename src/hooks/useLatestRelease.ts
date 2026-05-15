import { useEffect, useState } from 'react';
import { downloads } from '../config/downloads';
import { site } from '../config/site';
import type { ReleaseInfo } from '../types/release';

export function useLatestRelease(): ReleaseInfo {
  const [info, setInfo] = useState<ReleaseInfo>({
    version: 'latest',
    jarUrl: downloads.jar.fallbackUrl,
    loading: true,
  });

  useEffect(() => {
    const url = `https://api.github.com/repos/${site.githubOrg}/${site.pluginReleaseRepo}/releases/latest`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        return res.json();
      })
      .then((data: { tag_name?: string; assets?: { name: string; browser_download_url: string }[] }) => {
        const asset = data.assets?.find((a) => downloads.jar.assetNamePattern.test(a.name));
        if (asset?.browser_download_url) {
          setInfo({
            version: data.tag_name ?? 'latest',
            jarUrl: asset.browser_download_url,
            loading: false,
          });
        } else {
          setInfo((prev) => ({ ...prev, loading: false, error: 'No JAR asset in latest release' }));
        }
      })
      .catch((err: Error) => {
        setInfo((prev) => ({
          ...prev,
          loading: false,
          error: err.message,
        }));
      });
  }, []);

  return info;
}
