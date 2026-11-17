import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site.js';
import { SidebarToggle } from './SidebarToggle.jsx';

export function SidebarHeader({ collapsed = false, isMobile = false, onCloseMobile }) {
  if (collapsed && !isMobile) {
    return (
      <div className="flex shrink-0 flex-col items-center gap-2 border-b border-border-subtle px-2 py-3.5">
        <Link
          to="/"
          aria-label={`${SITE_CONFIG.owner.fullName} — Home`}
          title={SITE_CONFIG.owner.fullName}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2563EB] text-xs font-bold tracking-tight text-white transition-colors hover:bg-[#1D4ED8]"
        >
          {SITE_CONFIG.owner.initials}
        </Link>
        <SidebarToggle />
      </div>
    );
  }

  return (
    <div className="flex h-14 shrink-0 items-center justify-between gap-2 border-b border-border-subtle px-4">
      <Link
        to="/"
        onClick={isMobile ? onCloseMobile : undefined}
        className="flex min-w-0 items-center gap-2.5 text-left"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#2563EB] text-xs font-bold tracking-tight text-white">
          {SITE_CONFIG.owner.initials}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-text-primary leading-tight">
            {SITE_CONFIG.owner.shortName}
          </span>
          <span className="block truncate text-[11px] font-medium text-text-secondary leading-tight">
            {SITE_CONFIG.owner.role}
          </span>
        </span>
      </Link>

      {isMobile ? (
        <button
          type="button"
          onClick={onCloseMobile}
          aria-label="Close navigation menu"
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-bg-card text-text-secondary transition-colors hover:border-accent hover:text-text-primary cursor-pointer"
        >
          <X size={16} aria-hidden="true" />
        </button>
      ) : (
        <SidebarToggle />
      )}
    </div>
  );
}
