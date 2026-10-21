/** Formats an epoch-millisecond timestamp in the site's current UI locale (not the browser's). */
export function formatDate(ms: number, locale: string): string {
  if (!ms) return '';
  return new Date(ms).toLocaleString(locale, { dateStyle: 'medium', timeStyle: 'short' });
}
