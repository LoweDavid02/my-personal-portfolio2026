import { Search, X } from 'lucide-react';
import { useId } from 'react';

export function ProjectSearch({ value, onChange }) {
  const inputId = useId();

  return (
    <div className="relative flex-1 min-w-0">
      <label htmlFor={inputId} className="sr-only">
        Search projects
      </label>
      <Search
        size={16}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-text-secondary"
      />
      <input
        id={inputId}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by title, stack, or keywords..."
        className="h-10 w-full rounded-lg border border-border-subtle bg-bg-card pr-9 pl-9 text-sm text-text-primary placeholder:text-text-secondary focus:border-accent focus:outline-none"
      />
      {value ? (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search query"
          className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded p-1 text-text-secondary transition-colors hover:text-text-primary cursor-pointer"
        >
          <X size={14} aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}
