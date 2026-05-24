import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { I18nProvider } from './i18n/I18nProvider';
import App from './App';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <AuthProvider>
        <I18nProvider>
          <App />
        </I18nProvider>
      </AuthProvider>
    </HashRouter>
  </StrictMode>,
);
