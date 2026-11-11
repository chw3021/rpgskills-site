import { PageHeader } from '../components/ui/PageHeader';
import { ENTITY_NAMES, MONSTERS, ZONES, type MonsterDef } from '../data/monsterCatalog';
import { useI18n } from '../i18n/useI18n';

/** Only monsters with a file in src/assets/monster-icons/{id}.png or .jpg get a portrait. */
const ICONS = import.meta.glob<string>('../assets/monster-icons/*.{png,jpg}', {
  eager: true,
  import: 'default',
});

function iconOf(id: string): string | undefined {
  return ICONS[`../assets/monster-icons/${id}.png`] ?? ICONS[`../assets/monster-icons/${id}.jpg`];
}

function isBoss(monster: MonsterDef): boolean {
  return monster.kind === 'comboBoss' || monster.kind === 'raidBoss';
}

function MonsterCard({ monster }: { monster: MonsterDef }) {
  const { locale, t } = useI18n();
  const loc = locale === 'ko' ? 'ko' : 'en';
  const copy = monster[loc];
  const icon = iconOf(monster.id);
  const hpLine =
    monster.hp != null
      ? `${t.monsters.hpLabel} ${monster.hp.toLocaleString(loc)}`
      : monster.hpScale != null
        ? t.monsters.hpScales.replace('{scale}', String(monster.hpScale))
        : null;
  const kindLabel =
    monster.kind === 'comboBoss'
      ? t.monsters.comboBoss
      : monster.kind === 'raidBoss'
        ? t.monsters.raidBoss
        : null;

  return (
    <article className="class-card monster-card">
      <div className="class-card__top">
        {icon && (
          <img src={icon} alt="" className="class-card__portrait" width={96} height={96} loading="lazy" />
        )}
        <header className="monster-card__head">
          <h3>{copy.name}</h3>
          {hpLine && <p className="monster-card__hp">{hpLine}</p>}
        </header>
      </div>
      <p className="class-card__badges">
        {kindLabel && <span className="class-badge class-badge--diff">{kindLabel}</span>}
        <span className="class-badge">
          {t.monsters.baseLabel}: {ENTITY_NAMES[monster.entity][loc]}
        </span>
        {monster.replaces && (
          <span className="class-badge class-badge--role">{t.monsters.replaces[monster.replaces]}</span>
        )}
        {monster.pack && (
          <span className="class-badge class-badge--diff">
            {t.monsters.pack.replace('{count}', String(monster.pack))}
          </span>
        )}
      </p>
      <p className="class-card__equip">
        <strong>{t.monsters.storyLabel}:</strong> {copy.story}
      </p>
    </article>
  );
}

export function MonstersPage() {
  const { locale, t } = useI18n();
  const loc = locale === 'ko' ? 'ko' : 'en';

  return (
    <>
      <PageHeader title={t.monsters.pageTitle} description={t.monsters.pageDescription} />

      <section className="doc-section">
        <p>{t.monsters.intro}</p>
        <p className="meta">
          {t.monsters.statsLine
            .replace('{monsters}', String(MONSTERS.length))
            .replace('{zones}', String(ZONES.length))}
        </p>
        <nav className="class-card__badges" aria-label={t.monsters.jumpLabel}>
          {ZONES.map((zone) => (
            <a key={zone.id} href={`#zone-${zone.id}`} className="class-badge">
              {zone[loc].name}
            </a>
          ))}
        </nav>
      </section>

      {ZONES.map((zone) => {
        const inZone = MONSTERS.filter((m) => m.zone === zone.id);
        const field = inZone.filter((m) => !isBoss(m));
        const bosses = inZone.filter(isBoss);
        return (
          <section key={zone.id} id={`zone-${zone.id}`} className="guide-block">
            <h2>{zone[loc].name}</h2>
            <p className="meta">
              <strong>{t.monsters.biomesLabel}:</strong> {zone[loc].biomes}
            </p>
            <p className="meta">{zone[loc].defaultMobs}</p>
            {field.length > 0 && (
              <div className="class-grid">
                {field.map((m) => (
                  <MonsterCard key={m.id} monster={m} />
                ))}
              </div>
            )}
            {bosses.length > 0 && (
              <>
                <h3 className="monster-bosses-title">{t.monsters.bossesTitle}</h3>
                <div className="class-grid">
                  {bosses.map((m) => (
                    <MonsterCard key={m.id} monster={m} />
                  ))}
                </div>
              </>
            )}
          </section>
        );
      })}
    </>
  );
}
