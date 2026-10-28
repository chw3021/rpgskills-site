import { Link } from 'react-router-dom';
import { CommandTable } from '../components/support/CommandTable';
import { FaqList } from '../components/support/FaqList';
import { PageHeader } from '../components/ui/PageHeader';
import { downloads } from '../config/downloads';
import { site } from '../config/site';
import { useI18n } from '../i18n/useI18n';

/** FAQ entries that are relevant while installing; the full list stays on the support page. */
const INSTALL_FAQ_IDS = ['version-mismatch', 'resource-pack', 'raid-world'];

export function InstallPage() {
  const { t } = useI18n();
  const versions = site.supportedMcVersions.join(' / ');
  const jars = site.supportedMcVersions.map((v) => downloads.jar.assetFileName(v)).join(', ');
  const faq = t.faq.filter((item) => INSTALL_FAQ_IDS.includes(item.id));

  return (
    <>
      <PageHeader title={t.install.pageTitle} description={t.install.pageDescription} />

      <section className="doc-section">
        <h2>{t.install.requirementsTitle}</h2>
        <dl className="fact-list">
          {t.install.requirements.map((row) => (
            <div key={row.label} className="fact-list__row">
              <dt>{row.label}</dt>
              <dd>{row.value.replace('{versions}', versions)}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="doc-section">
        <h2>{t.install.downloadTitle}</h2>
        <p>{t.install.downloadBody.replace('{jars}', jars)}</p>
        <div className="btn-row">
          <Link to="/download/" className="btn btn-primary">
            {t.install.downloadCta}
          </Link>
          <a href={site.pluginReleasesUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            {t.install.releasesCta}
          </a>
        </div>
      </section>

      <section className="doc-section">
        <h2>{t.install.stepsTitle}</h2>
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
      </section>

      <section className="doc-section">
        <h2>{t.install.firstRunTitle}</h2>
        <ol className="doc-list">
          {t.install.firstRunSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="doc-section">
        <h2>{t.install.commandsTitle}</h2>
        <CommandTable
          title={t.support.playerCommands}
          rows={t.commands.player}
          commandCol={t.support.commandCol}
          descriptionCol={t.support.descriptionCol}
        />
        <p>
          {t.install.commandsMore} <Link to="/support/">{t.install.commandsMoreLink}</Link>
        </p>
      </section>

      <section className="doc-section">
        <h2>{t.install.troubleshootingTitle}</h2>
        <FaqList items={faq} />
        <p style={{ marginTop: '1rem' }}>{t.install.troubleshootingBody}</p>
        <div className="btn-row">
          <a
            href={`${site.pluginPublicRepoUrl}/issues/new`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            {t.install.reportIssue}
          </a>
          <Link to="/support/" className="btn btn-ghost">
            {t.install.supportLink}
          </Link>
        </div>
      </section>
    </>
  );
}
