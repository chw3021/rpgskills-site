import { site } from '../../config/site';
import { useI18n } from '../../i18n/useI18n';

export function DonateSection() {
  const { t } = useI18n();
  const d = t.donate;

  return (
    <section>
      <p>
        {d.intro}
        <strong>{d.introBold}</strong>
      </p>

      <div className="btn-row">
        <a
          href={site.paypalDonateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-paypal"
        >
          {d.paypalButton}
        </a>
      </div>

      <aside className="donate-disclaimer">
        <p>{d.disclaimer1}</p>
        <p>{d.disclaimer2}</p>
        <p>{d.disclaimer3}</p>
      </aside>

      <div className="premium-placeholder" role="note">
        <strong>{d.premiumTitle}</strong> {d.premiumBody}
      </div>
    </section>
  );
}
