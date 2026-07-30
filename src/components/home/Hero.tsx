import { Link } from 'react-router-dom';
import { site } from '../../config/site';
import { useI18n } from '../../i18n/useI18n';
import { HeroBattleVisual } from './HeroBattleVisual';

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero">
      <div>
        <h1>{site.name}</h1>
        <p>{t.hero.tagline}</p>
        <p style={{ color: 'var(--text-muted)' }}>{t.hero.intro}</p>
        <div className="btn-row">
          <Link to="/download" className="btn btn-primary">
            {t.hero.download}
          </Link>
          <a
            href={site.spigotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            {t.hero.spigot}
          </a>
          <Link to="/install" className="btn btn-secondary">
            {t.hero.gettingStarted}
          </Link>
          <Link to="/story" className="btn btn-secondary">
            {t.nav.story}
          </Link>
        </div>
      </div>
      <div className="hero-visual">
        <HeroBattleVisual />
        <div className="hero-badge">
          {t.hero.compatible}{' '}
          <strong>
            MC {site.supportedMcVersions.join(' · ')}
          </strong>
          <br />
          <span style={{ fontSize: '0.75rem' }}>{t.hero.mcVersionLabel}</span>
        </div>
      </div>
    </section>
  );
}
