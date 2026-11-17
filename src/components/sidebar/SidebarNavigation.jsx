import { useLocation } from 'react-router-dom';
import { NAVIGATION_ITEMS, isGroupActive } from '../../config/navigation.js';
import { useSidebar } from '../../hooks/useSidebar.js';
import { SidebarNavGroup } from './SidebarNavGroup.jsx';
import { SidebarNavItem } from './SidebarNavItem.jsx';

export function SidebarNavigation({
  collapsed = false,
  navId = 'desktop-sidebar-nav',
  onNavigate,
}) {
  const location = useLocation();
  const { expandedGroups, toggleGroup, openGroupAndExpandSidebar } = useSidebar();

  return (
    <nav
      id={navId}
      aria-label="Primary portfolio navigation"
      className="sidebar-scroll flex-1 overflow-y-auto overflow-x-hidden px-2.5 py-3"
    >
      <ul className="space-y-1">
        {NAVIGATION_ITEMS.map((item) => {
          if (item.children && item.children.length > 0) {
            return (
              <SidebarNavGroup
                key={item.id}
                item={item}
                location={location}
                collapsed={collapsed}
                isExpanded={Boolean(expandedGroups[item.id])}
                onToggleGroup={toggleGroup}
                onCollapsedGroupClick={openGroupAndExpandSidebar}
                onNavigate={onNavigate}
              />
            );
          }

          return (
            <SidebarNavItem
              key={item.id}
              item={item}
              active={isGroupActive(item, location)}
              collapsed={collapsed}
              onNavigate={onNavigate}
            />
          );
        })}
      </ul>
    </nav>
  );
}
