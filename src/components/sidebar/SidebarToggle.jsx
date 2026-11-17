import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { useSidebar } from '../../hooks/useSidebar.js';

export function SidebarToggle({ className = '' }) {
  const { isCollapsed, toggleCollapsed } = useSidebar();
  const label = isCollapsed ? 'Expand sidebar' : 'Collapse sidebar';

  return (
    <button
      type="button"
      onClick={toggleCollapsed}
      aria-label={label}
      aria-expanded={!isCollapsed}
      aria-controls="desktop-sidebar-nav"
      title={label}
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-bg-card text-text-secondary transition-colors hover:border-accent hover:text-accent-text cursor-pointer ${className}`}
    >
      {isCollapsed ? (
        <PanelLeftOpen size={16} aria-hidden="true" />
      ) : (
        <PanelLeftClose size={16} aria-hidden="true" />
      )}
    </button>
  );
}
