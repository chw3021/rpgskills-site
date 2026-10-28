import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { applyPageMeta, getPageMeta } from '../../seo/pageMeta';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

/** Keeps title, description, canonical and Open Graph tags in sync during client-side navigation. */
function PageMetaSync() {
  const { pathname } = useLocation();

  useEffect(() => {
    applyPageMeta(getPageMeta(pathname));
  }, [pathname]);

  return null;
}

export function SiteLayout() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <PageMetaSync />
      <Header />
      <main className="site-main">
        <div className="page-container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
