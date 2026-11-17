import { FolderSearch } from 'lucide-react';

export function EmptyState({
  icon: Icon = FolderSearch,
  title,
  description,
  action = null,
  className = '',
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl border border-dashed border-border-subtle bg-bg-card px-6 py-12 text-center ${className}`}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border-subtle bg-bg-secondary text-text-secondary">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-text-primary">{title}</h3>
      {description ? (
        <p className="mt-2 max-w-md text-sm leading-relaxed text-text-secondary">{description}</p>
      ) : null}
      {action ? <div className="mt-5 flex flex-wrap justify-center gap-3">{action}</div> : null}
    </div>
  );
}
