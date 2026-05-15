import { Link } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { featureSections } from '../content/features';

export function HomePage() {
  return (
    <>
      <Hero />
      <section>
        <h2>Why RPGSkills?</h2>
        <div className="card-grid">
          {featureSections.slice(0, 3).map((section) => (
            <article key={section.title} className="card">
              <h3>{section.title}</h3>
              <ul>
                {section.items.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="btn-row" style={{ marginTop: '1.5rem' }}>
          <Link to="/features" className="btn btn-secondary">
            View all features
          </Link>
        </div>
      </section>
    </>
  );
}
