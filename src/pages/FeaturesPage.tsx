import { Link } from 'react-router-dom';
import { PageHeader } from '../components/ui/PageHeader';
import { useI18n } from '../i18n/useI18n';

export function FeaturesPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader title={t.features.pageTitle} description={t.features.pageDescription} />
      <div className="feature-grid">
        {t.features.sections.map((section) => (
          <section key={section.title} className="feature-section">
            <h2>{section.title}</h2>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="btn-row">
        <Link to="/classes/" className="btn btn-secondary">
          {t.home.viewClasses} →
        </Link>
      </div>
    </>
  );
}
