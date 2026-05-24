import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { ClassDef } from '../../data/classCatalog';
import { getClassDetail } from '../../data/classDetails';
import { useI18n } from '../../i18n/useI18n';
import { classIconFile } from '../../utils/classIcon';
import { ClassStatRadar } from './ClassStatRadar';

type ClassCardProps = {
  cls: ClassDef;
};

const iconBase = `${import.meta.env.BASE_URL}class-icons/`;
const iconExtensions = ['webp', 'png'] as const;

export function ClassCard({ cls }: ClassCardProps) {
  const [iconIndex, setIconIndex] = useState(0);
  const { locale, t } = useI18n();
  const copy = locale === 'ko' ? cls.ko : cls.en;
  const diff = t.classes.difficulty[cls.difficulty];
  const archetype = t.classes.archetypeLabels[cls.archetype];
  const role = t.classes.roleLabels[cls.role];
  const s = cls.stats;
  const hasDetail = Boolean(getClassDetail(cls.id));
  const detailHref = `/classes/${cls.id}`;

  const iconSrc =
    iconIndex < iconExtensions.length
      ? `${iconBase}${classIconFile(cls.id)}.${iconExtensions[iconIndex]}`
      : null;

  const body = (
    <>
      {iconSrc && (
        <div className="class-card__portrait-wrap">
          <img
            src={iconSrc}
            alt=""
            className="class-card__portrait"
            width={96}
            height={96}
            loading="lazy"
            onError={() => setIconIndex((i) => i + 1)}
          />
        </div>
      )}
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
      <div className="class-stats-panel">
        <ClassStatRadar stats={s} labels={t.classes.stats} />
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
      </div>
    </>
  );

  if (hasDetail) {
    return (
      <Link
        to={detailHref}
        className="class-card class-card--link"
        aria-label={`${copy.name} — ${t.classes.viewDetail}`}
      >
        {body}
      </Link>
    );
  }

  return <article className="class-card">{body}</article>;
}
