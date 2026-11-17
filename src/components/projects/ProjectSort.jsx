import { useId } from 'react';
import { SORT_OPTIONS } from '../../utils/projectSorting.js';

export function ProjectSort({ value = 'featured', onChange }) {
  const selectId = useId();

  return (
    <div className="flex shrink-0 items-center gap-2">
      <label
        htmlFor={selectId}
        className="text-xs font-medium text-text-secondary whitespace-nowrap"
      >
        Sort by
      </label>
      <select
        id={selectId}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 rounded-lg border border-border-subtle bg-bg-card px-3 text-sm text-text-primary focus:border-accent focus:outline-none cursor-pointer"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
