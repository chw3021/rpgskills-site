import { useI18n } from '../../i18n/useI18n';
import type { Locale } from '../../i18n/types';

const options: Locale[] = ['ko', 'en'];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div className="lang-switcher" role="group" aria-label={t.lang.label}>
      {options.map((code) => (
        <button
          key={code}
          type="button"
          className={`lang-btn${locale === code ? ' lang-btn--active' : ''}`}
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
        >
          {code === 'ko' ? t.lang.ko : t.lang.en}
        </button>
      ))}
    </div>
  );
}
