const BADGE_VARIANTS = {
  default: 'bg-bg-secondary text-text-secondary border-border-subtle',
  accent: 'bg-accent-soft text-accent-text border-accent/25',
  success: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25',
  warning: 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/25',
  outline: 'bg-transparent text-text-secondary border-border-subtle',
};

export function Badge({ children, variant = 'default', className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium leading-5 ${
        BADGE_VARIANTS[variant] || BADGE_VARIANTS.default
      } ${className}`}
    >
      {children}
    </span>
  );
}
