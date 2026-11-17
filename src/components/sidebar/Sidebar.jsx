import { useSidebar } from '../../hooks/useSidebar.js';
import { SidebarFooter } from './SidebarFooter.jsx';
import { SidebarHeader } from './SidebarHeader.jsx';
import { SidebarNavigation } from './SidebarNavigation.jsx';

export function Sidebar() {
  const { isCollapsed } = useSidebar();

  return (
    <aside
      aria-label="Sidebar"
      data-collapsed={isCollapsed ? 'true' : 'false'}
      className={`sticky top-0 hidden h-dvh shrink-0 flex-col border-r border-border-subtle bg-bg-sidebar transition-[width] duration-200 ease-out md:flex ${
        isCollapsed ? 'w-[72px]' : 'w-64'
      }`}
    >
      <SidebarHeader collapsed={isCollapsed} />
      <SidebarNavigation collapsed={isCollapsed} navId="desktop-sidebar-nav" />
      <SidebarFooter collapsed={isCollapsed} />
    </aside>
  );
}
