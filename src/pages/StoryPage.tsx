import { Link } from 'react-router-dom';
import { PageHeader } from '../components/ui/PageHeader';
import { useI18n } from '../i18n/useI18n';

export function StoryPage() {
  const { t } = useI18n();
  const { story } = t;

  return (
    <>
      <PageHeader title={story.pageTitle} description={story.pageDescription} />
      <p className="story-epigraph">{story.epigraph}</p>
      {story.chapters.map((chapter) => (
        <article key={chapter.title} className="story-chapter">
          <h2>{chapter.title}</h2>
          {chapter.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </article>
      ))}
      <section className="story-cta">
        <h2>{story.ctaTitle}</h2>
        <p>{story.ctaBody}</p>
        <div className="btn-row">
          <Link to="/classes" className="btn btn-primary">
            {story.ctaClasses}
          </Link>
          <Link to="/download" className="btn btn-secondary">
            {story.ctaDownload}
          </Link>
        </div>
      </section>
    </>
  );
}
