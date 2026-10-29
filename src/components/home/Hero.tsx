import { Link } from 'react-router-dom';
import { site } from '../../config/site';
import { useI18n } from '../../i18n/useI18n';
import { HeroBattleVisual } from './HeroBattleVisual';

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="eyebrow__dot" aria-hidden />
          Minecraft {site.supportedMcVersions.join(' · ')}
        </p>
        <h1 className="hero-title">
          {site.name}{' '}
          <span className="hero-title__sub">{t.hero.subtitle}</span>
        </h1>
        <p className="hero-tagline">{t.hero.tagline}</p>
        <p className="hero-intro">{t.hero.intro}</p>
        <div className="btn-row">
          <Link to="/download/" className="btn btn-primary btn-lg">
            ⬇ {t.hero.download}
          </Link>
          <Link to="/installation/" className="btn btn-secondary btn-lg">
            {t.hero.gettingStarted}
          </Link>
          <Link to="/story/" className="btn btn-ghost btn-lg">
            {t.nav.story} →
          </Link>
        </div>
        <div className="platform-links">
          <span className="platform-links__label">{t.hero.platformsLabel}</span>
          <a
            href={site.spigotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-platform btn-platform--spigot"
          >
            {t.hero.spigot}
          </a>
          <a
            href={site.curseforgeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-platform btn-platform--curseforge"
          >
            {t.hero.curseforge}
          </a>
          <a
            href={site.modrinthUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-platform btn-platform--modrinth"
          >
            {t.hero.modrinth}
          </a>
          <a
            href={site.koreaminecraftUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-platform btn-platform--koreaminecraft"
          >
            {t.hero.koreaminecraft}
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <HeroBattleVisual />
        <div className="hero-badge">
          {t.hero.compatible} <strong>MC {site.supportedMcVersions.join(' · ')}</strong>
          <small>{t.hero.mcVersionLabel}</small>
        </div>
      </div>
    </section>
  );
}
