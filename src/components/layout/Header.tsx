import { Link } from 'react-router-dom';
import { Nav } from './Nav';
import { site } from '../../config/site';

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">R</span>
          {site.name}
        </Link>
        <Nav />
      </div>
    </header>
  );
}
