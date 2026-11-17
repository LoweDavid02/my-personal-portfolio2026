import { useSidebar } from '../../hooks/useSidebar.js';
import { AccessibleDialog } from '../ui/AccessibleDialog.jsx';
import { SidebarFooter } from './SidebarFooter.jsx';
import { SidebarHeader } from './SidebarHeader.jsx';
import { SidebarNavigation } from './SidebarNavigation.jsx';

export function MobileSidebarDrawer() {
  const { isMobileOpen, closeMobileDrawer } = useSidebar();

  return (
    <AccessibleDialog
      open={isMobileOpen}
      onClose={closeMobileDrawer}
      title="Site navigation"
      variant="drawer"
    >
      <SidebarHeader isMobile onCloseMobile={closeMobileDrawer} />
      <SidebarNavigation
        collapsed={false}
        navId="mobile-sidebar-nav"
        onNavigate={closeMobileDrawer}
      />
      <SidebarFooter collapsed={false} onNavigate={closeMobileDrawer} />
    </AccessibleDialog>
  );
}
