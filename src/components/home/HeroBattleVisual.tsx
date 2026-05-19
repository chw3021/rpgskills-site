import { useI18n } from '../../i18n/useI18n';

const heroImageSrc = `${import.meta.env.BASE_URL}hero-battle.png`;

export function HeroBattleVisual() {
  const { t } = useI18n();

  return (
    <img
      src={heroImageSrc}
      alt={t.hero.battleImageAlt}
      className="hero-visual__image"
      width={1600}
      height={1000}
      fetchPriority="high"
      decoding="async"
    />
  );
}
