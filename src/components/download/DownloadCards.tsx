import { downloads } from '../../config/downloads';
import { site } from '../../config/site';
import { useI18n } from '../../i18n/useI18n';
import { useLatestRelease } from '../../hooks/useLatestRelease';

export function DownloadCards() {
  const { t } = useI18n();
  const release = useLatestRelease();
  const d = t.download;

  return (
    <div className="card-grid">
      <article className="card">
        <h3>{d.pluginJar}</h3>
        <p className="meta">
          {d.latestFromGithub}
          {release.loading && d.loading}
          {!release.loading && release.version && ` — ${release.version}`}
        </p>
        {release.error && (
          <p className="meta" style={{ color: 'var(--warning)' }}>
            {d.apiFallback}: {release.error}
          </p>
        )}
        <div className="btn-row" style={{ marginTop: '1rem' }}>
          <a href={release.jarUrl} className="btn btn-primary" download>
            {d.downloadJar}
          </a>
          <a
            href={`${site.pluginRepo}/releases`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            {d.allReleases}
          </a>
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

      <article className="card">
        <h3>{d.resourcePackDrive}</h3>
        <p className="meta">{d.resourcePackDriveMeta}</p>
        <div className="btn-row" style={{ marginTop: '1rem' }}>
          <a
            href={downloads.resourcePack.googleDrive}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {d.openDrive}
          </a>
        </div>
      </article>
    </div>
  );
}
