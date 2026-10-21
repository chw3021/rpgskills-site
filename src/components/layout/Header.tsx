import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { site } from '../../config/site';
import { useI18n } from '../../i18n/useI18n';
import { LanguageSwitcher } from './LanguageSwitcher';
import { VisitorBadge } from '../community/VisitorBadge';
import { Nav } from './Nav';

export function Header() {
  const { t } = useI18n();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={menuOpen ? 'site-header site-header--open' : 'site-header'}>
      <div className="header-inner">
        <Link to="/" className="brand">
          <img
            src={`${import.meta.env.BASE_URL}logo-icon.svg`}
            alt=""
            width={34}
            height={34}
            className="brand-logo"
          />
          {site.name}
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={t.nav.menu}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
        </button>
        <div className="header-menu" id="site-menu">
          <Nav />
          <div className="header-utils">
            <VisitorBadge />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
