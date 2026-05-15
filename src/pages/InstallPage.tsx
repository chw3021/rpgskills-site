import { PageHeader } from '../components/ui/PageHeader';
import { installSteps } from '../content/install';
import { site } from '../config/site';

export function InstallPage() {
  return (
    <>
      <PageHeader
        title="Installation"
        description="플러그인 설치, 버전 호환, 리소스팩 적용 가이드"
      />
      <div className="notice">
        <strong>Version:</strong> {site.mcVersionsNote}
      </div>
      <div className="install-steps">
        {installSteps.map((step, i) => (
          <article key={step.title} className="install-step">
            <span className="step-num">{i + 1}</span>
            <div>
              <h3 style={{ marginBottom: '0.35rem' }}>{step.title}</h3>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>{step.body}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
