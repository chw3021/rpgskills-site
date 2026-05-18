import { NavLink } from 'react-router-dom';
import { useI18n } from '../../i18n/useI18n';

const routes = [
  { to: '/', key: 'home' as const, end: true },
  { to: '/features', key: 'features' as const },
  { to: '/classes', key: 'classes' as const },
  { to: '/install', key: 'install' as const },
  { to: '/download', key: 'download' as const },
  { to: '/support', key: 'support' as const },
  { to: '/donate', key: 'donate' as const },
];

export function Nav() {
  const { t } = useI18n();

  return (
    <nav className="site-nav" aria-label={t.nav.ariaMain}>
      {routes.map(({ to, key, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end ?? false}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          {t.nav[key]}
        </NavLink>
      ))}
    </nav>
  );
}
