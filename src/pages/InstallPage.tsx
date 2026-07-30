import { PageHeader } from '../components/ui/PageHeader';
import { site } from '../config/site';
import { useI18n } from '../i18n/useI18n';

export function InstallPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader title={t.install.pageTitle} description={t.install.pageDescription} />
      <div className="notice">
        <strong>{t.install.versionNotice}:</strong> MC {site.supportedMcVersions.join(' · ')} —{' '}
        {t.hero.mcVersionLabel}
      </div>
      <div className="install-steps">
        {t.install.steps.map((step, i) => (
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
