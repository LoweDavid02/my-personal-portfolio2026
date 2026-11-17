export function Card({
  children,
  interactive = false,
  className = '',
  as: Component = 'div',
  ...props
}) {
  const baseClass = interactive ? 'card-interactive' : 'card-surface';
  return (
    <Component className={`${baseClass} rounded-xl ${className}`} {...props}>
      {children}
    </Component>
  );
}
