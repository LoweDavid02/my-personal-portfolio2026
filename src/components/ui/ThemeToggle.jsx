import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme.js';

const THEME_MODES = [
  { id: 'light', label: 'Light', icon: Sun },
  { id: 'dark', label: 'Dark', icon: Moon },
  { id: 'system', label: 'System', icon: Monitor },
];

export function ThemeToggle({ variant = 'icon' }) {
  const { preference, resolvedTheme, setThemePreference, toggleTheme } = useTheme();

  if (variant === 'segmented') {
    return (
      <div
        role="group"
        aria-label="Theme preference"
        className="grid grid-cols-3 gap-1 rounded-lg border border-border-subtle bg-bg-secondary p-1"
      >
        {THEME_MODES.map((mode) => {
          const Icon = mode.icon;
          const active = preference === mode.id;
          return (
            <button
              key={mode.id}
              type="button"
              onClick={() => setThemePreference(mode.id)}
              aria-pressed={active}
              className={`flex items-center justify-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                active
                  ? 'bg-bg-card text-text-primary shadow-xs border border-border-subtle'
                  : 'text-text-secondary hover:text-text-primary border border-transparent'
              }`}
            >
              <Icon size={13} aria-hidden="true" />
              <span>{mode.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  const isDark = resolvedTheme === 'dark';
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-bg-card text-text-secondary transition-colors hover:border-accent hover:text-accent-text cursor-pointer"
    >
      {isDark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
    </button>
  );
}
