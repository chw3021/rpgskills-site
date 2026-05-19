import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { site } from '../config/site';
import { detectLocaleFromIp } from './detectLocale';
import {
  defaultLocale,
  getStoredLocale,
  locales,
  LOCALE_STORAGE_KEY,
  type Locale,
  type Translations,
} from './index';

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

export const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(
    () => getStoredLocale() ?? defaultLocale,
  );

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const t = locales[locale];

  useEffect(() => {
    if (getStoredLocale()) return;
    let cancelled = false;
    detectLocaleFromIp().then((detected) => {
      if (!cancelled) setLocaleState(detected);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang;
    document.title = site.name;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t.meta.siteDescription);
  }, [t]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
