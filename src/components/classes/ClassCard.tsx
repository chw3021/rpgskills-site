import type { ClassDef } from '../../data/classCatalog';
import { useI18n } from '../../i18n/useI18n';

type ClassCardProps = {
  cls: ClassDef;
};

export function ClassCard({ cls }: ClassCardProps) {
  const { locale, t } = useI18n();
  const copy = locale === 'ko' ? cls.ko : cls.en;
  const diff = t.classes.difficulty[cls.difficulty];
  const archetype = t.classes.archetypeLabels[cls.archetype];
  const role = t.classes.roleLabels[cls.role];
  const s = cls.stats;

  return (
    <article className="class-card">
      <header className="class-card__head">
        <h3>{copy.name}</h3>
        <span className="class-card__badges">
          <span className="class-badge">{archetype}</span>
          <span className="class-badge class-badge--role">{role}</span>
          <span className="class-badge class-badge--diff">{diff}</span>
        </span>
      </header>
      <p className="class-card__equip">
        <strong>{t.classes.equipmentLabel}:</strong> {copy.equipment}
      </p>
      <p className="class-card__summary">{copy.summary}</p>
      <dl className="class-stats">
        <div>
          <dt>{t.classes.stats.attack}</dt>
          <dd>{s.attack}/5</dd>
        </div>
        <div>
          <dt>{t.classes.stats.defence}</dt>
          <dd>{s.defence}/5</dd>
        </div>
        <div>
          <dt>{t.classes.stats.control}</dt>
          <dd>{s.control}/5</dd>
        </div>
        <div>
          <dt>{t.classes.stats.support}</dt>
          <dd>{s.support}/5</dd>
        </div>
        <div>
          <dt>{t.classes.stats.area}</dt>
          <dd>{s.area}/5</dd>
        </div>
        <div>
          <dt>{t.classes.stats.range}</dt>
          <dd>{s.range}/5</dd>
        </div>
        <div>
          <dt>{t.classes.stats.mobility}</dt>
          <dd>{s.mobility}/5</dd>
        </div>
      </dl>
    </article>
  );
}
