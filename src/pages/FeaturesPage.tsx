import { PageHeader } from '../components/ui/PageHeader';
import { featureSections } from '../content/features';

export function FeaturesPage() {
  return (
    <>
      <PageHeader
        title="Features"
        description="Spigot 페이지 기능 목록을 섹션별로 정리했습니다."
      />
      {featureSections.map((section) => (
        <section key={section.title} className="feature-section">
          <h2>{section.title}</h2>
          <ul>
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
