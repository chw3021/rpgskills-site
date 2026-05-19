import { en } from './locales/en';
import { ko } from './locales/ko';
import type { Locale, Translations } from './types';

export type { Locale, Translations };

export const locales: Record<Locale, Translations> = { en, ko };

/** Fallback when geo lookup fails and no saved preference exists. */
export const defaultLocale: Locale = 'en';

export const LOCALE_STORAGE_KEY = 'rpgskills-site-locale';

export function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'ko';
}

export function getStoredLocale(): Locale | null {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && isLocale(stored)) return stored;
  } catch {
    /* ignore */
  }
  return null;
}
