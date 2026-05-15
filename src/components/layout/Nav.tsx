import { NavLink } from 'react-router-dom';

const links: { to: string; label: string; end?: boolean }[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/features', label: 'Features' },
  { to: '/install', label: 'Install' },
  { to: '/download', label: 'Download' },
  { to: '/support', label: 'Support' },
  { to: '/donate', label: 'Donate' },
];

export function Nav() {
  return (
    <nav className="site-nav" aria-label="Main">
      {links.map(({ to, label, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end ?? false}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
