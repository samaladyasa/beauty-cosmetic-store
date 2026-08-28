import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    const resetScroll = () => window.scrollTo(0, 0);

    const navigation = window.performance.getEntriesByType('navigation')[0];
    const isReload = navigation?.type === 'reload';

    if (isReload && pathname === '/' && hash) {
      window.history.replaceState(null, '', `${pathname}${window.location.search}`);
    }

    resetScroll();
    const requestAnimationFrameId = window.requestAnimationFrame(resetScroll);

    return () => {
      window.cancelAnimationFrame(requestAnimationFrameId);
      window.history.scrollRestoration = previousRestoration;
    };
  }, [pathname]);

  useEffect(() => {
    const currentHash = window.location.hash;

    if (currentHash) {
      const target = document.getElementById(currentHash.slice(1));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
