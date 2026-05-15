import { DownloadCards } from '../components/download/DownloadCards';
import { PageHeader } from '../components/ui/PageHeader';
import { useI18n } from '../i18n/useI18n';

export function DownloadPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader title={t.download.pageTitle} description={t.download.pageDescription} />
      <DownloadCards />
    </>
  );
}
