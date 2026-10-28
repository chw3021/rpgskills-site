import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { I18nProvider } from './i18n/I18nProvider';
import { getPageMeta, getPrerenderPages, renderHeadTags, canonicalUrl } from './seo/pageMeta';

/**
 * Build-time only (scripts/prerender.mjs). Renders one route to static HTML so search engines and
 * visitors get real content before JavaScript loads. Effects do not run here, so Firebase, geo
 * lookup, and GitHub API calls stay client-side, and the default locale (English) is rendered.
 */
const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

export function render(path: string): { html: string; head: string } {
  const html = renderToString(
    <StaticRouter location={`${basename}${path}`} basename={basename}>
      <AuthProvider>
        <I18nProvider>
          <App />
        </I18nProvider>
      </AuthProvider>
    </StaticRouter>,
  );
  return { html, head: renderHeadTags(getPageMeta(path)) };
}

export function renderNotFoundHead(): string {
  return renderHeadTags(getPageMeta('/__not-found__/'));
}

export { getPrerenderPages, canonicalUrl };
