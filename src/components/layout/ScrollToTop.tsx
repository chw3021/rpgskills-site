import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Reset window scroll on route change.
 * /classes list restores its own position via sessionStorage; leave that to ClassesPage.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (pathname === '/classes') {
      return;
    }
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = prev;
  }, [pathname]);

  return null;
}
