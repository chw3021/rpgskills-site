import type { Locale } from './types';

const GEO_URL = 'https://get.geojs.io/v1/ip/country.json';
const TIMEOUT_MS = 5000;

/** Korea → ko; all other countries → en. Falls back to en on error. */
export async function detectLocaleFromIp(): Promise<Locale> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(GEO_URL, { signal: controller.signal });
    if (!res.ok) return 'en';
    const data = (await res.json()) as { country?: string };
    return data.country === 'KR' ? 'ko' : 'en';
  } catch {
    return 'en';
  } finally {
    clearTimeout(timer);
  }
}
