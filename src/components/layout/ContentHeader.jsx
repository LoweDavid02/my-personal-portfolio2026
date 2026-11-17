import { FileText, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/site.js';
import { useSidebar } from '../../hooks/useSidebar.js';
import { ThemeToggle } from '../ui/ThemeToggle.jsx';
import { Breadcrumbs } from './Breadcrumbs.jsx';

export function ContentHeader() {
  const { isMobileOpen, openMobileDrawer } = useSidebar();

  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center justify-between gap-3 border-b border-border-subtle bg-bg-main/95 px-4 backdrop-blur-xs sm:px-6 lg:px-10">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={openMobileDrawer}
          aria-label="Open navigation menu"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-sidebar-nav"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-bg-card text-text-primary transition-colors hover:border-accent hover:text-accent-text md:hidden cursor-pointer"
        >
          <Menu size={18} aria-hidden="true" />
        </button>

        <Link
          to="/"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#2563EB] text-[11px] font-bold text-white md:hidden"
          aria-label={`${SITE_CONFIG.owner.fullName} — Home`}
        >
          {SITE_CONFIG.owner.initials}
        </Link>

        <Breadcrumbs />
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <Link
          to="/resume"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-card px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent hover:text-text-primary"
        >
          <FileText size={14} aria-hidden="true" />
          <span>Resume</span>
        </Link>
        <ThemeToggle variant="icon" />
      </div>
    </header>
  );
}
