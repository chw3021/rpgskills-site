import { Link } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { StoryTeaser } from '../components/home/StoryTeaser';
import { guideLinks, site } from '../config/site';
import type { GuideKey } from '../i18n/types';
import { useI18n } from '../i18n/useI18n';

export function HomePage() {
  const { t } = useI18n();
  const sections = t.features.sections;
  const versions = site.supportedMcVersions.join(' / ');

  return (
    <>
      <Hero />
      <section className="home-facts">
        <h2>{t.home.factsTitle}</h2>
        <dl className="fact-list">
          {t.home.facts.map((fact) => (
            <div key={fact.label} className="fact-list__row">
              <dt>{fact.label}</dt>
              <dd>{fact.value.replace('{versions}', versions)}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="home-guides">
        <h2>{t.home.guidesTitle}</h2>
        <div className="card-grid">
          {(Object.keys(guideLinks) as GuideKey[]).map((key) => (
            <Link key={key} to={guideLinks[key]} className="card card--link">
              <h3>{t.home.guides[key].title} →</h3>
              <p>{t.home.guides[key].body}</p>
            </Link>
          ))}
        </div>
      </section>
      <StoryTeaser />
      <section className="home-champions">
        <h2>{t.home.championsTitle}</h2>
        <p className="home-champions__hint">{t.home.championsHint}</p>
      </section>
      <section className="home-why">
        <h2>{t.home.whyTitle}</h2>
        <div className="card-grid card-grid--numbered">
          {sections.slice(0, 3).map((section) => (
            <article key={section.title} className="card card--feature">
              <h3>{section.title}</h3>
              <ul>
                {section.items.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="btn-row">
          <Link to="/features/" className="btn btn-secondary">
            {t.home.viewAllFeatures}
          </Link>
          <Link to="/classes/" className="btn btn-secondary">
            {t.home.viewClasses}
          </Link>
        </div>
      </section>
    </>
  );
}
