import { Link } from 'react-router-dom';
import { elementLabel, LEGEND_ELEMENTS } from '../components/classes/SkillTreeGrid';
import { PageHeader } from '../components/ui/PageHeader';
import { ARCHETYPES, CLASSES } from '../data/classCatalog';
import { getClassDetail } from '../data/classDetails';
import { useI18n } from '../i18n/useI18n';

/** Counts come from the class data so the page never drifts from the actual skill lists. */
function skillCountOf(classId: string): number {
  const detail = getClassDetail(classId);
  return detail ? detail.skillSections.reduce((sum, section) => sum + section.skills.length, 0) : 0;
}

export function SkillsPage() {
  const { locale, t } = useI18n();
  const loc = locale === 'ko' ? 'ko' : 'en';
  const documented = CLASSES.filter((cls) => getClassDetail(cls.id));
  const totalSkills = documented.reduce((sum, cls) => sum + skillCountOf(cls.id), 0);
  const elementList = LEGEND_ELEMENTS.map((element) => elementLabel(element, t)).join(', ');

  return (
    <>
      <PageHeader title={t.skills.pageTitle} description={t.skills.pageDescription} />

      <section className="doc-section">
        <p>{t.skills.intro}</p>
        <p className="meta">
          {t.skills.statsLine
            .replace('{skills}', String(totalSkills))
            .replace('{classes}', String(documented.length))}
        </p>
      </section>

      <section className="doc-section">
        <h2>{t.skills.layoutTitle}</h2>
        <ul className="doc-list">
          {t.skills.layoutItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="doc-section">
        <h2>{t.skills.typesTitle}</h2>
        <div className="card-grid">
          {t.skills.types.map((type) => (
            <article key={type.name} className="card">
              <h3>{type.name}</h3>
              <p>{type.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="doc-section">
        <h2>{t.skills.controlsTitle}</h2>
        <p>{t.skills.controlsBody}</p>
      </section>

      <section className="doc-section">
        <h2>{t.skills.elementsTitle}</h2>
        <p>{t.skills.elementsBody.replace('{list}', elementList)}</p>
      </section>

      <section className="doc-section">
        <h2>{t.skills.indexTitle}</h2>
        <p className="meta">{t.skills.indexHint}</p>
        <div className="skill-index">
          {ARCHETYPES.map((archetype) => (
            <div key={archetype.id} className="skill-index__group">
              <h3>{t.classes.archetypeLabels[archetype.id]}</h3>
              <ul>
                {documented
                  .filter((cls) => cls.archetype === archetype.id)
                  .map((cls) => (
                    <li key={cls.id}>
                      <Link to={`/classes/${cls.id}/`}>
                        {t.skills.classLink.replace('{name}', cls[loc].name)}
                      </Link>{' '}
                      <span className="meta">
                        ({t.skills.skillCount.replace('{count}', String(skillCountOf(cls.id)))})
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
