import { Link } from 'react-router-dom';
import { NavIcon } from '../ui/NavIcon.jsx';
import { Tooltip } from '../ui/Tooltip.jsx';

export function SidebarNavItem({
  item,
  active = false,
  collapsed = false,
  isChild = false,
  onNavigate,
}) {
  const label = isChild && item.shortLabel ? item.shortLabel : item.label;

  const linkClasses = isChild
    ? `group relative flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors ${
        active
          ? 'bg-accent-soft font-medium text-accent-text'
          : 'text-text-secondary hover:bg-bg-secondary hover:text-text-primary'
      }`
    : `group relative flex items-center ${
        collapsed ? 'justify-center px-2 py-2.5' : 'gap-3 px-3 py-2'
      } rounded-lg text-sm font-medium transition-colors ${
        active
          ? 'bg-accent-soft text-accent-text'
          : 'text-text-secondary hover:bg-bg-secondary hover:text-text-primary'
      }`;

  const linkElement = (
    <Link
      to={item.to}
      onClick={onNavigate}
      aria-current={active ? 'page' : undefined}
      aria-label={collapsed ? item.label : undefined}
      className={linkClasses}
    >
      {active && !isChild ? (
        <span
          aria-hidden="true"
          className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-r bg-accent"
        />
      ) : null}

      {!isChild && item.iconName ? (
        <NavIcon
          name={item.iconName}
          size={18}
          className={`shrink-0 transition-colors ${
            active ? 'text-accent-text' : 'text-text-secondary group-hover:text-text-primary'
          }`}
        />
      ) : null}

      {isChild ? (
        <span
          aria-hidden="true"
          className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
            active ? 'bg-accent' : 'bg-border-subtle group-hover:bg-text-secondary'
          }`}
        />
      ) : null}

      {!collapsed ? <span className="truncate">{label}</span> : null}
    </Link>
  );

  return (
    <li>
      {item.dividerBefore && !collapsed ? (
        <div className="my-1.5 border-t border-border-subtle/70" aria-hidden="true" />
      ) : null}
      {collapsed ? (
        <Tooltip content={item.label} disabled={!collapsed}>
          {linkElement}
        </Tooltip>
      ) : (
        linkElement
      )}
    </li>
  );
}
