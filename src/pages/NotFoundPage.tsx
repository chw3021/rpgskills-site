import { Link } from 'react-router-dom';
import { PageHeader } from '../components/ui/PageHeader';
import { useI18n } from '../i18n/useI18n';

export function NotFoundPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader title={t.notFound.title} description={t.notFound.body} />
      <Link to="/" className="btn btn-primary">
        {t.notFound.home}
      </Link>
    </>
  );
}
