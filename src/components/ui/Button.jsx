import { Link } from 'react-router-dom';

const VARIANT_CLASSES = {
  primary: 'bg-[#2563EB] text-white hover:bg-[#1D4ED8] border border-transparent shadow-xs',
  secondary: 'bg-bg-secondary text-text-primary hover:border-accent border border-border-subtle',
  outline:
    'bg-transparent text-text-primary border border-border-subtle hover:border-accent hover:text-accent-text',
  ghost:
    'bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-secondary border border-transparent',
};

const SIZE_CLASSES = {
  sm: 'h-8 px-3 text-xs gap-1.5 rounded-md',
  md: 'h-10 px-4 text-sm gap-2 rounded-lg',
  lg: 'h-11 px-5 text-sm gap-2 rounded-lg',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  external = false,
  className = '',
  type = 'button',
  ...props
}) {
  const classes = [
    'inline-flex items-center justify-center font-medium transition-colors duration-150 cursor-pointer select-none whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none',
    VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary,
    SIZE_CLASSES[size] || SIZE_CLASSES.md,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a href={href} className={classes} {...externalProps} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
