import { CommandTable } from '../components/support/CommandTable';
import { FaqList } from '../components/support/FaqList';
import { ReportIssue } from '../components/support/ReportIssue';
import { PageHeader } from '../components/ui/PageHeader';
import { site } from '../config/site';
import { useI18n } from '../i18n/useI18n';

export function SupportPage() {
  const { t } = useI18n();

  const reportChannels = t.support.reportChannels.map((ch, i) => ({
    ...ch,
    href:
      i === 0 ? `${site.pluginPublicRepoUrl}/issues/new` : site.spigotUrl,
  }));

  return (
    <>
      <PageHeader title={t.support.pageTitle} description={t.support.pageDescription} />
      <ReportIssue
        title={t.support.reportTitle}
        intro={t.support.reportIntro}
        checklist={t.support.bugReportChecklist}
        channels={reportChannels}
      />
      <section style={{ marginTop: '2.5rem' }}>
        <h2>{t.support.faqTitle}</h2>
        <FaqList items={t.faq} />
      </section>
      <section style={{ marginTop: '2.5rem' }}>
        <h2>{t.support.commandsTitle}</h2>
        <CommandTable
          title={t.support.playerCommands}
          rows={t.commands.player}
          commandCol={t.support.commandCol}
          descriptionCol={t.support.descriptionCol}
        />
        <CommandTable
          title={t.support.partyCommands}
          rows={t.commands.party}
          commandCol={t.support.commandCol}
          descriptionCol={t.support.descriptionCol}
        />
        <CommandTable
          title={t.support.adminCommands}
          rows={t.commands.admin}
          commandCol={t.support.commandCol}
          descriptionCol={t.support.descriptionCol}
        />
      </section>
    </>
  );
}
