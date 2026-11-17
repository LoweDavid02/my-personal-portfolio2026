import { PROJECT_CATEGORIES } from '../../data/categories.js';

export function ProjectCategoryFilter({
  selectedCategory = 'all',
  featuredOnly = false,
  projects = [],
  onSelectAll,
  onSelectFeatured,
  onSelectCategory,
}) {
  const totalCount = projects.length;
  const featuredCount = projects.filter((p) => p.featured).length;

  const buttonClass = (active) =>
    `inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
      active
        ? 'border-accent bg-accent-soft text-accent-text'
        : 'border-border-subtle bg-bg-card text-text-secondary hover:border-accent/60 hover:text-text-primary'
    }`;

  return (
    <div role="group" aria-label="Project categories" className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={onSelectAll}
        aria-pressed={selectedCategory === 'all' && !featuredOnly}
        className={buttonClass(selectedCategory === 'all' && !featuredOnly)}
      >
        <span>All Projects</span>
        <span className="font-mono text-[11px] opacity-75">{totalCount}</span>
      </button>

      <button
        type="button"
        onClick={onSelectFeatured}
        aria-pressed={featuredOnly && selectedCategory === 'all'}
        className={buttonClass(featuredOnly && selectedCategory === 'all')}
      >
        <span>Featured</span>
        <span className="font-mono text-[11px] opacity-75">{featuredCount}</span>
      </button>

      {PROJECT_CATEGORIES.map((category) => {
        const count = projects.filter((p) => p.category === category.id).length;
        const active = selectedCategory === category.id;
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelectCategory(category.id)}
            aria-pressed={active}
            className={buttonClass(active)}
          >
            <span>{category.shortLabel}</span>
            <span className="font-mono text-[11px] opacity-75">{count}</span>
          </button>
        );
      })}
    </div>
  );
}
