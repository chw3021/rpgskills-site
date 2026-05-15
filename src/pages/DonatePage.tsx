import { DonateSection } from '../components/donate/DonateSection';
import { PageHeader } from '../components/ui/PageHeader';
import { useI18n } from '../i18n/useI18n';

export function DonatePage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader title={t.donate.pageTitle} description={t.donate.pageDescription} />
      <DonateSection />
    </>
  );
}
