import { site } from '../../config/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>
          © {new Date().getFullYear()} {site.name} · MC {site.mcVersion}
        </span>
        <span>
          <a href={site.spigotUrl} target="_blank" rel="noopener noreferrer">
            Spigot
          </a>
          {' · '}
          <a href={site.pluginRepo} target="_blank" rel="noopener noreferrer">
            Source
          </a>
          {' · '}
          <a href={site.siteUrl}>Website</a>
        </span>
      </div>
    </footer>
  );
}
