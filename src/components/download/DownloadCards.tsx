import { useState } from 'react';
import { downloads } from '../../config/downloads';
import { site, type SupportedMcVersion } from '../../config/site';
import { useI18n } from '../../i18n/useI18n';
import { useLatestRelease } from '../../hooks/useLatestRelease';

export function DownloadCards() {
  const { t } = useI18n();
  const [mcVersion, setMcVersion] = useState<SupportedMcVersion>(site.mcVersion);
  const release = useLatestRelease(mcVersion);
  const d = t.download;

  return (
    <div className="card-grid">
      <article className="card">
        <h3>{d.pluginJar}</h3>
        <p className="meta" style={{ marginBottom: '0.75rem' }}>
          {d.mcVersionSelect}
        </p>
        <div className="page-tabs" role="tablist" aria-label={d.mcVersionSelect}>
          {site.supportedMcVersions.map((version) => (
            <button
              key={version}
              type="button"
              role="tab"
              aria-selected={mcVersion === version}
              className={mcVersion === version ? 'page-tab page-tab--active' : 'page-tab'}
              onClick={() => setMcVersion(version)}
            >
              MC {version}
            </button>
          ))}
        </div>
        <p className="meta">
          {d.latestFromGithub}
          {release.loading && d.loading}
          {!release.loading && release.version && ` — ${release.version}`}
          {!release.loading && ` · ${downloads.jar.assetFileName(mcVersion)}`}
        </p>
        {release.error && (
          <p className="meta" style={{ color: 'var(--warning)' }}>
            {release.error === 'no_jar_on_github'
              ? d.noGithubReleaseHint
              : `${d.apiFallback}: ${release.error}`}
          </p>
        )}
        <div className="btn-row" style={{ marginTop: '1rem' }}>
          {release.directJar ? (
            <>
              <a href={release.jarUrl} className="btn btn-primary" download>
                {d.downloadJar}
              </a>
              <a
                href={site.pluginReleasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                {d.allReleases}
              </a>
            </>
          ) : (
            <>
              <a
                href={release.jarUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {release.error === 'no_jar_on_github' ? d.downloadJar : d.allReleases}
              </a>
              <a
                href={site.spigotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                {d.getJarFromSpigot}
              </a>
            </>
          )}
        </div>
      </article>

      <article className="card">
        <h3>{d.resourcePackGithub}</h3>
        <p className="meta">{d.resourcePackGithubMeta}</p>
        <div className="btn-row" style={{ marginTop: '1rem' }}>
          <a href={downloads.resourcePack.githubZip} className="btn btn-primary">
            {d.downloadZip}
          </a>
          <a
            href={site.resourcePackRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            {d.repository}
          </a>
        </div>
      </article>
    </div>
  );
}
