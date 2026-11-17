export function ProjectTechnologyFilter({ technologies = [], selectedTech = '', onSelectTech }) {
  if (technologies.length === 0) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-text-secondary">Filter by technology</span>
        {selectedTech ? (
          <button
            type="button"
            onClick={() => onSelectTech('')}
            className="text-xs font-medium text-accent-text hover:underline cursor-pointer"
          >
            Clear technology
          </button>
        ) : null}
      </div>
      <div role="group" aria-label="Technology filters" className="flex flex-wrap gap-1.5">
        {technologies.map((tech) => {
          const active = selectedTech === tech.slug;
          return (
            <button
              key={tech.slug}
              type="button"
              onClick={() => onSelectTech(active ? '' : tech.slug)}
              aria-pressed={active}
              className={`rounded-md border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                active
                  ? 'border-accent bg-[#2563EB] text-white'
                  : 'border-border-subtle bg-bg-secondary text-text-secondary hover:border-accent/60 hover:text-text-primary'
              }`}
            >
              {tech.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
