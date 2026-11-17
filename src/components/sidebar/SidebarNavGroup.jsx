import { useId } from 'react';
import { ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { isChildActive, isGroupActive } from '../../config/navigation.js';
import { NavIcon } from '../ui/NavIcon.jsx';
import { Tooltip } from '../ui/Tooltip.jsx';
import { SidebarNavItem } from './SidebarNavItem.jsx';

export function SidebarNavGroup({
  item,
  location,
  collapsed = false,
  isExpanded = false,
  onToggleGroup,
  onCollapsedGroupClick,
  onNavigate,
}) {
  const submenuId = useId();
  const groupActive = isGroupActive(item, location);

  if (collapsed) {
    return (
      <li>
        <Tooltip content={item.label}>
          <button
            type="button"
            onClick={() => onCollapsedGroupClick(item.id)}
            aria-label={`Expand sidebar and open ${item.label}`}
            aria-expanded={false}
            className={`group relative flex w-full items-center justify-center rounded-lg px-2 py-2.5 text-sm font-medium transition-colors cursor-pointer ${
              groupActive
                ? 'bg-accent-soft text-accent-text'
                : 'text-text-secondary hover:bg-bg-secondary hover:text-text-primary'
            }`}
          >
            {groupActive ? (
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-r bg-accent"
              />
            ) : null}
            <NavIcon
              name={item.iconName}
              size={18}
              className={`shrink-0 ${
                groupActive
                  ? 'text-accent-text'
                  : 'text-text-secondary group-hover:text-text-primary'
              }`}
            />
          </button>
        </Tooltip>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => onToggleGroup(item.id)}
        aria-expanded={isExpanded}
        aria-controls={submenuId}
        className={`group relative flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
          groupActive
            ? 'bg-accent-soft/70 text-text-primary'
            : 'text-text-secondary hover:bg-bg-secondary hover:text-text-primary'
        }`}
      >
        {groupActive ? (
          <span
            aria-hidden="true"
            className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-r bg-accent"
          />
        ) : null}
        <span className="flex min-w-0 items-center gap-3">
          <NavIcon
            name={item.iconName}
            size={18}
            className={`shrink-0 ${
              groupActive ? 'text-accent-text' : 'text-text-secondary group-hover:text-text-primary'
            }`}
          />
          <span className="truncate">{item.label}</span>
        </span>
        <ChevronRight
          size={15}
          aria-hidden="true"
          className={`shrink-0 text-text-secondary transition-transform duration-150 ${
            isExpanded ? 'rotate-90 text-text-primary' : ''
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isExpanded ? (
          <motion.ul
            id={submenuId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="mt-1 ml-4 space-y-0.5 overflow-hidden border-l border-border-subtle pl-2.5"
          >
            {item.children.map((child) => (
              <SidebarNavItem
                key={child.id}
                item={child}
                active={isChildActive(child, location)}
                isChild
                onNavigate={onNavigate}
              />
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </li>
  );
}
