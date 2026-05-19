import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n/useI18n';

export function StoryTeaser() {
  const { t } = useI18n();
  const { story } = t;

  return (
    <section className="story-teaser">
      <div className="story-teaser__glow" aria-hidden />
      <div className="story-teaser__inner">
        <p className="story-teaser__label">{story.teaserLabel}</p>
        <h2>{story.teaserTitle}</h2>
        {story.teaserParagraphs.map((p) => (
          <p key={p.slice(0, 40)} className="story-teaser__text">
            {p}
          </p>
        ))}
        <Link to="/story" className="btn btn-secondary">
          {story.readFull}
        </Link>
      </div>
    </section>
  );
}
