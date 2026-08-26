import { site } from '../../config/site';
import { useI18n } from '../../i18n/useI18n';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>
          © {new Date().getFullYear()} {site.name} · MC {site.supportedMcVersions.join(' · ')}
        </span>
        <span>
          <a href={site.spigotUrl} target="_blank" rel="noopener noreferrer">
            {t.footer.spigot}
          </a>
          {' · '}
          <a href={site.curseforgeUrl} target="_blank" rel="noopener noreferrer">
            {t.footer.curseforge}
          </a>
          {' · '}
          <a href={site.pluginReleasesUrl} target="_blank" rel="noopener noreferrer">
            {t.footer.releases}
          </a>
          {' · '}
          <a href={site.siteUrl}>{t.footer.website}</a>
        </span>
      </div>
    </footer>
  );
}
