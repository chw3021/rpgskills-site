import { NavLink, useLocation } from 'react-router-dom';
import { useI18n } from '../../i18n/useI18n';

type LeafKey =
  | 'story'
  | 'features'
  | 'classes'
  | 'install'
  | 'download'
  | 'boardFree'
  | 'boardQna'
  | 'support';

type NavEntry =
  | { type: 'link'; to: string; labelKey: 'home'; end?: boolean }
  | { type: 'group'; labelKey: 'groupBackground' | 'groupDownload' | 'groupCommunity'; items: { to: string; labelKey: LeafKey }[] }
  | { type: 'cta'; to: string; labelKey: 'donate' };

const navStructure: NavEntry[] = [
  { type: 'link', to: '/', labelKey: 'home', end: true },
  {
    type: 'group',
    labelKey: 'groupBackground',
    items: [
      { to: '/story', labelKey: 'story' },
      { to: '/features', labelKey: 'features' },
      { to: '/classes', labelKey: 'classes' },
    ],
  },
  {
    type: 'group',
    labelKey: 'groupDownload',
    items: [
      { to: '/install', labelKey: 'install' },
      { to: '/download', labelKey: 'download' },
    ],
  },
  {
    type: 'group',
    labelKey: 'groupCommunity',
    items: [
      { to: '/community/free', labelKey: 'boardFree' },
      { to: '/community/qna', labelKey: 'boardQna' },
      { to: '/support', labelKey: 'support' },
    ],
  },
  { type: 'cta', to: '/donate', labelKey: 'donate' },
];

function isGroupActive(items: { to: string }[], pathname: string): boolean {
  return items.some((item) => {
    if (item.to === '/') return pathname === '/';
    return pathname === item.to || pathname.startsWith(`${item.to}/`);
  });
}

export function Nav() {
  const { t } = useI18n();
  const { pathname } = useLocation();

  return (
    <nav className="site-nav" aria-label={t.nav.ariaMain}>
      {navStructure.map((entry) => {
        if (entry.type === 'link') {
          return (
            <NavLink
              key={entry.to}
              to={entry.to}
              end={entry.end ?? false}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {t.nav[entry.labelKey]}
            </NavLink>
          );
        }

        if (entry.type === 'cta') {
          return (
            <NavLink
              key={entry.to}
              to={entry.to}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link--cta active' : 'nav-link nav-link--cta'
              }
            >
              {t.nav[entry.labelKey]}
            </NavLink>
          );
        }

        const groupLabel = t.nav[entry.labelKey];
        const active = isGroupActive(entry.items, pathname);

        return (
          <div
            key={entry.labelKey}
            className={`nav-dropdown${active ? ' nav-dropdown--active' : ''}`}
          >
            <button type="button" className="nav-dropdown__trigger" aria-haspopup="true">
              {groupLabel}
              <span className="nav-dropdown__caret" aria-hidden>
                ▾
              </span>
            </button>
            <div className="nav-dropdown__menu" role="menu">
              {entry.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? 'nav-dropdown__item active' : 'nav-dropdown__item'
                  }
                  role="menuitem"
                >
                  {t.nav[item.labelKey]}
                </NavLink>
              ))}
            </div>
          </div>
        );
      })}
    </nav>
  );
}
