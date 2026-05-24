import { Link } from 'react-router-dom';
import { site } from '../../config/site';
import { LanguageSwitcher } from './LanguageSwitcher';
import { VisitorBadge } from '../community/VisitorBadge';
import { Nav } from './Nav';

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">
          <img
            src={`${import.meta.env.BASE_URL}logo-icon.svg`}
            alt=""
            width={36}
            height={36}
            className="brand-logo"
          />
          {site.name}
        </Link>
        <div className="header-actions">
          <VisitorBadge />
          <LanguageSwitcher />
          <Nav />
        </div>
      </div>
    </header>
  );
}
