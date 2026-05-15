import { Link } from 'react-router-dom';
import { site } from '../../config/site';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Nav } from './Nav';

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">R</span>
          {site.name}
        </Link>
        <div className="header-actions">
          <LanguageSwitcher />
          <Nav />
        </div>
      </div>
    </header>
  );
}
