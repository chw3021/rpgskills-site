import { useLayoutEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ClassDetailView } from '../components/classes/ClassDetailView';
import { CLASSES } from '../data/classCatalog';
import { getClassDetail } from '../data/classDetails';
import { useI18n } from '../i18n/useI18n';

export function ClassDetailPage() {
  const { classId } = useParams<{ classId: string }>();
  const { t } = useI18n();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [classId]);

  const cls = CLASSES.find((c) => c.id === classId);
  const detail = classId ? getClassDetail(classId) : undefined;

  if (!cls || !detail) {
    return (
      <section className="guide-block">
        <h1>{t.classDetail.notFoundTitle}</h1>
        <p>{t.classDetail.notFoundBody}</p>
        <p>
          <Link to="/classes">{t.classDetail.backToRoster}</Link>
        </p>
      </section>
    );
  }

  return <ClassDetailView cls={cls} detail={detail} />;
}
