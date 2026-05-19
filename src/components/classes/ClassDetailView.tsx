import { Link } from 'react-router-dom';
import type { ClassDef } from '../../data/classCatalog';
import type { ClassDetailDef } from '../../data/classDetails';
import { useI18n } from '../../i18n/useI18n';
import { SkillIcon } from './SkillIcon';

const iconBase = `${import.meta.env.BASE_URL}class-icons/`;

type ClassDetailViewProps = {
  cls: ClassDef;
  detail: ClassDetailDef;
};

export function ClassDetailView({ cls, detail }: ClassDetailViewProps) {
  const { locale, t } = useI18n();
  const loc = locale === 'ko' ? 'ko' : 'en';
  const copy = cls[loc];
  const diff = t.classes.difficulty[cls.difficulty];
  const archetype = t.classes.archetypeLabels[cls.archetype];
  const role = t.classes.roleLabels[cls.role];

  const sectionTitles: Record<ClassDetailDef['skillSections'][number]['id'], string> = {
    base: t.classDetail.sectionBase,
    limit1: t.classDetail.sectionLimit1,
    limit2: t.classDetail.sectionLimit2,
  };

  return (
    <article className="class-detail">
      <nav className="class-detail__nav">
        <Link to="/classes">{t.classDetail.backToRoster}</Link>
        <span className="class-detail__order">
          {t.classDetail.classIndex.replace('{n}', String(detail.order)).replace('{total}', '32')}
        </span>
      </nav>

      <header className="class-detail__hero">
        <div className="class-detail__portraits">
          {detail.proficiency.tiers.map((tier) => {
            const title = tier[loc].title;
            const tierLabel =
              tier.tier === 0
                ? t.classDetail.tierBase
                : tier.tier === 1
                  ? t.classDetail.tierLimit1
                  : t.classDetail.tierLimit2;
            return (
              <figure key={tier.tier} className="class-detail__portrait-card">
                <img
                  src={`${iconBase}${tier.portraitFile}`}
                  alt=""
                  width={160}
                  height={160}
                  loading={tier.tier === 0 ? 'eager' : 'lazy'}
                />
                <figcaption>
                  <span className="class-detail__tier-badge">{tierLabel}</span>
                  <strong>{title}</strong>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="class-detail__intro">
          <h1>{copy.name}</h1>
          <p className="class-detail__badges">
            <span className="class-badge">{archetype}</span>
            <span className="class-badge class-badge--role">{role}</span>
            <span className="class-badge class-badge--diff">{diff}</span>
          </p>
          <p className="class-detail__equip">
            <strong>{t.classes.equipmentLabel}:</strong> {copy.equipment}
          </p>
          <p className="class-detail__summary">{copy.summary}</p>
          <p className="meta class-detail__proficiency-meta">
            {t.classDetail.proficiencyHint
              .replace('{exp1}', detail.proficiency.expLimit1.toLocaleString(locale))
              .replace('{exp2}', detail.proficiency.expLimit2.toLocaleString(locale))}
          </p>
        </div>
      </header>

      <section className="guide-block class-detail__story">
        <h2>{t.classDetail.storyTitle}</h2>
        {detail.story[loc].map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>

      <section className="guide-block class-detail__skills">
        <h2>{t.classDetail.skillsTitle}</h2>
        <p className="meta">{t.classDetail.skillsHint}</p>
        <p className="meta">
          <strong>{t.classDetail.elementLabel}:</strong> {t.classDetail.elementEarth}
        </p>

        {detail.skillSections.map((section) => (
          <div key={section.id} className="class-detail__skill-section">
            <h3>{sectionTitles[section.id]}</h3>
            {section.requiredProficiency > 0 && (
              <p className="meta class-detail__unlock">
                {t.classDetail.unlockAt.replace(
                  '{exp}',
                  section.requiredProficiency === 1
                    ? detail.proficiency.expLimit1.toLocaleString(locale)
                    : detail.proficiency.expLimit2.toLocaleString(locale),
                )}
              </p>
            )}
            <ul className="class-detail__skill-list">
              {section.skills.map((skill) => {
                const s = skill[loc];
                return (
                  <li key={skill.id} className="class-detail__skill">
                    <SkillIcon id={skill.icon} />
                    <div className="class-detail__skill-body">
                      <h4>
                        {s.name}
                        {skill.followUp && (
                          <span className="class-detail__tag">{t.classDetail.followUp}</span>
                        )}
                        {skill.passive && (
                          <span className="class-detail__tag class-detail__tag--passive">
                            {t.classDetail.passive}
                          </span>
                        )}
                      </h4>
                      {s.input && (
                        <p className="class-detail__input">
                          <strong>{t.classDetail.inputLabel}:</strong> {s.input}
                        </p>
                      )}
                      <p>{s.description}</p>
                      {s.extra?.map((line, i) => (
                        <p key={i} className="meta">
                          {line}
                        </p>
                      ))}
                      {skill.masterLevel != null && (
                        <p className="meta">
                          {t.classDetail.masterLevel.replace('{lv}', String(skill.masterLevel))}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>
    </article>
  );
}
