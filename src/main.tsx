import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { I18nProvider } from './i18n/I18nProvider';
import App from './App';
import './styles/global.css';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * The site used to run on HashRouter (e.g. /rpgskills-site/#/classes/swordman).
 * The hash never reaches GitHub Pages, so old shared links load the home page HTML; this rewrites
 * the address bar to the new path before the router starts. It is a client-side URL replacement,
 * not an HTTP 301 redirect.
 */
function migrateLegacyHashUrl() {
  const { hash } = window.location;
  if (!hash.startsWith('#/')) return;
  // Trailing slash matches the canonical directory URLs ("#/classes" → "/classes/").
  const [path, query = ''] = hash.slice(1).split('?');
  const withSlash = path.endsWith('/') ? path : `${path}/`;
  window.history.replaceState(null, '', `${basename}${withSlash}${query ? `?${query}` : ''}`);
}

migrateLegacyHashUrl();

// The prerendered HTML is replaced (not hydrated) on purpose: the client may render another locale
// or signed-in state than the static English snapshot, and a fresh render avoids hydration mismatches.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <AuthProvider>
        <I18nProvider>
          <App />
        </I18nProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
