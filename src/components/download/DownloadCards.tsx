import { downloads } from '../../config/downloads';
import { site } from '../../config/site';
import { useLatestRelease } from '../../hooks/useLatestRelease';

export function DownloadCards() {
  const release = useLatestRelease();

  return (
    <div className="card-grid">
      <article className="card">
        <h3>Plugin JAR</h3>
        <p className="meta">
          Latest release from GitHub
          {release.loading && ' — loading…'}
          {!release.loading && release.version && ` — ${release.version}`}
        </p>
        {release.error && (
          <p className="meta" style={{ color: 'var(--warning)' }}>
            API fallback: {release.error}
          </p>
        )}
        <div className="btn-row" style={{ marginTop: '1rem' }}>
          <a
            href={release.jarUrl}
            className="btn btn-primary"
            download
          >
            Download JAR
          </a>
          <a
            href={`${site.pluginRepo}/releases`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            All Releases
          </a>
        </div>
      </article>

      <article className="card">
        <h3>Resource Pack (GitHub)</h3>
        <p className="meta">RpgSkills repository — Code → Download ZIP</p>
        <div className="btn-row" style={{ marginTop: '1rem' }}>
          <a href={downloads.resourcePack.githubZip} className="btn btn-primary">
            Download ZIP
          </a>
          <a
            href={site.resourcePackRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Repository
          </a>
        </div>
      </article>

      <article className="card">
        <h3>Resource Pack (Google Drive)</h3>
        <p className="meta">Alternative mirror for players</p>
        <div className="btn-row" style={{ marginTop: '1rem' }}>
          <a
            href={downloads.resourcePack.googleDrive}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Open Drive
          </a>
        </div>
      </article>
    </div>
  );
}
