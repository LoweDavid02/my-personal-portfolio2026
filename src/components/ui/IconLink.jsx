export function IconLink({
  href,
  label,
  icon: Icon,
  external = true,
  className = '',
  size = 17,
  children,
}) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className={`inline-flex items-center justify-center rounded-lg border border-border-subtle bg-bg-card p-2 text-text-secondary transition-colors duration-150 hover:border-accent hover:text-accent-text ${className}`}
      {...externalProps}
    >
      {Icon ? <Icon size={size} aria-hidden="true" /> : null}
      {children}
    </a>
  );
}
