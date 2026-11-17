import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NAVIGATION_ITEMS, isGroupActive } from '../config/navigation.js';
import { SidebarContext } from '../hooks/useSidebar.js';
import { readStorageJson, writeStorageJson } from '../utils/storage.js';

const COLLAPSED_STORAGE_KEY = 'ld-portfolio-sidebar-collapsed';
const GROUPS_STORAGE_KEY = 'ld-portfolio-sidebar-groups';

function getActiveGroupId(location) {
  const activeItem = NAVIGATION_ITEMS.find(
    (item) => item.children && isGroupActive(item, location)
  );
  return activeItem ? activeItem.id : null;
}

function getInitialGroups(activeId) {
  const stored = readStorageJson(GROUPS_STORAGE_KEY, null);
  const defaults = {
    about: false,
    projects: true,
    experience: false,
  };
  const initial = stored && typeof stored === 'object' ? { ...defaults, ...stored } : defaults;
  if (activeId) {
    initial[activeId] = true;
  }
  return initial;
}

export function SidebarProvider({ children }) {
  const location = useLocation();
  const routeKey = `${location.pathname}${location.search}${location.hash}`;
  const activeGroupId = getActiveGroupId(location);

  const [isCollapsed, setIsCollapsedState] = useState(() => {
    const stored = readStorageJson(COLLAPSED_STORAGE_KEY, false);
    return Boolean(stored);
  });

  const [expandedGroups, setExpandedGroups] = useState(() => getInitialGroups(activeGroupId));
  const [trackedActiveGroup, setTrackedActiveGroup] = useState(activeGroupId);
  const [mobileOpenedRoute, setMobileOpenedRoute] = useState(null);

  if (activeGroupId !== trackedActiveGroup) {
    setTrackedActiveGroup(activeGroupId);
    if (activeGroupId && !expandedGroups[activeGroupId]) {
      const next = { ...expandedGroups, [activeGroupId]: true };
      setExpandedGroups(next);
      writeStorageJson(GROUPS_STORAGE_KEY, next);
    }
  }

  const isMobileOpen = mobileOpenedRoute === routeKey;

  useEffect(() => {
    if (!isMobileOpen || typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mq = window.matchMedia('(min-width: 768px)');
    const handleChange = (event) => {
      if (event.matches) setMobileOpenedRoute(null);
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, [isMobileOpen]);

  const setCollapsed = useCallback((nextValue) => {
    setIsCollapsedState((prev) => {
      const resolved = typeof nextValue === 'function' ? nextValue(prev) : Boolean(nextValue);
      writeStorageJson(COLLAPSED_STORAGE_KEY, resolved);
      return resolved;
    });
  }, []);

  const toggleCollapsed = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, [setCollapsed]);

  const toggleGroup = useCallback((groupId) => {
    setExpandedGroups((prev) => {
      const next = { ...prev, [groupId]: !prev[groupId] };
      writeStorageJson(GROUPS_STORAGE_KEY, next);
      return next;
    });
  }, []);

  const openGroupAndExpandSidebar = useCallback(
    (groupId) => {
      setCollapsed(false);
      setExpandedGroups((prev) => {
        if (prev[groupId]) return prev;
        const next = { ...prev, [groupId]: true };
        writeStorageJson(GROUPS_STORAGE_KEY, next);
        return next;
      });
    },
    [setCollapsed]
  );

  const openMobileDrawer = useCallback(() => {
    setMobileOpenedRoute(routeKey);
  }, [routeKey]);

  const closeMobileDrawer = useCallback(() => {
    setMobileOpenedRoute(null);
  }, []);

  const toggleMobileDrawer = useCallback(() => {
    setMobileOpenedRoute((prev) => (prev === routeKey ? null : routeKey));
  }, [routeKey]);

  const value = useMemo(
    () => ({
      isCollapsed,
      setCollapsed,
      toggleCollapsed,
      expandedGroups,
      toggleGroup,
      openGroupAndExpandSidebar,
      isMobileOpen,
      openMobileDrawer,
      closeMobileDrawer,
      toggleMobileDrawer,
    }),
    [
      isCollapsed,
      setCollapsed,
      toggleCollapsed,
      expandedGroups,
      toggleGroup,
      openGroupAndExpandSidebar,
      isMobileOpen,
      openMobileDrawer,
      closeMobileDrawer,
      toggleMobileDrawer,
    ]
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}
