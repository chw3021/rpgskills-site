import { useEffect, useState } from 'react';
import { isFirebaseConfigured } from '../../lib/firebase';
import { recordTodayVisit, subscribeTodayVisitors } from '../../services/communityDb';
import { useI18n } from '../../i18n/useI18n';

export function VisitorBadge() {
  const { t } = useI18n();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!isFirebaseConfigured()) return;

    void recordTodayVisit().catch(() => {
      /* ignore — rules or offline */
    });

    const unsub = subscribeTodayVisitors(setCount);
    return unsub;
  }, []);

  if (!isFirebaseConfigured() || count === null) return null;

  return (
    <span className="visitor-badge" title={t.community.todayVisitors}>
      {t.community.todayVisitors}: <strong>{count.toLocaleString()}</strong>
    </span>
  );
}
