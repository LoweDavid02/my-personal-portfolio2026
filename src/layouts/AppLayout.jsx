import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ContentHeader } from '../components/layout/ContentHeader.jsx';
import { Footer } from '../components/layout/Footer.jsx';
import { MobileSidebarDrawer } from '../components/sidebar/MobileSidebarDrawer.jsx';
import { Sidebar } from '../components/sidebar/Sidebar.jsx';

function RouteLoadingFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="mx-auto flex w-full max-w-[1280px] items-center px-4 py-12 text-sm text-text-secondary sm:px-6 lg:px-10"
    >
      Loading content...
    </div>
  );
}

export function AppLayout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior = prefersReduced ? 'auto' : 'smooth';

    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return undefined;
    }

    const targetId = hash.slice(1);
    const tryScroll = () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior, block: 'start' });
        return true;
      }
      return false;
    };

    if (tryScroll()) return undefined;

    const mainEl = document.getElementById('main-content');
    if (!mainEl || typeof MutationObserver === 'undefined') return undefined;

    const observer = new MutationObserver(() => {
      if (tryScroll()) {
        observer.disconnect();
      }
    });
    observer.observe(mainEl, { childList: true, subtree: true });

    const timeout = window.setTimeout(() => observer.disconnect(), 5000);
    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-bg-main text-text-primary flex">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-[#2563EB] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Sidebar />
      <MobileSidebarDrawer />

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <ContentHeader />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          <Suspense fallback={<RouteLoadingFallback />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
}
