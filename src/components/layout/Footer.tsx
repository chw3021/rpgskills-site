import { Link } from 'react-router-dom';
import { site } from '../../config/site';
import { useI18n } from '../../i18n/useI18n';

export function Footer() {
  const { t } = useI18n();

  const links = [
    { href: site.spigotUrl, label: t.footer.spigot },
    { href: site.curseforgeUrl, label: t.footer.curseforge },
    { href: site.modrinthUrl, label: t.footer.modrinth },
    { href: site.pluginReleasesUrl, label: t.footer.releases },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <img
              src={`${import.meta.env.BASE_URL}logo-icon.svg`}
              alt=""
              width={28}
              height={28}
              className="brand-logo"
            />
            {site.name}
          </Link>
          <p>{t.hero.tagline}</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          {links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label} ↗
            </a>
          ))}
          <a href={site.siteUrl}>{t.footer.website}</a>
        </nav>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} {site.name} · MC {site.supportedMcVersions.join(' · ')}
      </div>
    </footer>
  );
}
