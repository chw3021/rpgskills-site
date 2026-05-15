import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function SiteLayout() {
  return (
    <div className="site-shell">
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
