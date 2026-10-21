import { Link } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { StoryTeaser } from '../components/home/StoryTeaser';
import { useI18n } from '../i18n/useI18n';

export function HomePage() {
  const { t } = useI18n();
  const sections = t.features.sections;

  return (
    <>
      <Hero />
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
          <Link to="/features" className="btn btn-secondary">
            {t.home.viewAllFeatures}
          </Link>
          <Link to="/classes" className="btn btn-secondary">
            {t.home.viewClasses}
          </Link>
        </div>
      </section>
    </>
  );
}
