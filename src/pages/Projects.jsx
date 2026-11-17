import { RotateCcw } from 'lucide-react';
import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MainContainer } from '../components/layout/MainContainer.jsx';
import { ProjectCategoryFilter } from '../components/projects/ProjectCategoryFilter.jsx';
import { ProjectEmptyState } from '../components/projects/ProjectEmptyState.jsx';
import { ProjectGrid } from '../components/projects/ProjectGrid.jsx';
import { ProjectSearch } from '../components/projects/ProjectSearch.jsx';
import { ProjectSort } from '../components/projects/ProjectSort.jsx';
import { ProjectTechnologyFilter } from '../components/projects/ProjectTechnologyFilter.jsx';
import { SectionHeading } from '../components/ui/SectionHeading.jsx';
import { getCategoryById } from '../data/categories.js';
import { PROJECTS } from '../data/projects.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { filterProjects, getAllTechnologies } from '../utils/projectFilters.js';
import { normalizeSortOption, sortProjects } from '../utils/projectSorting.js';

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();

  const rawCategory = searchParams.get('category');
  const selectedCategory = rawCategory || 'all';
  const featuredOnly = searchParams.get('featured') === 'true';
  const selectedTech = searchParams.get('tech') || '';
  const searchQuery = searchParams.get('q') || '';
  const sortBy = normalizeSortOption(searchParams.get('sort') || 'featured');

  const activeCategoryObj = selectedCategory !== 'all' ? getCategoryById(selectedCategory) : null;

  usePageMeta({
    title: activeCategoryObj
      ? `${activeCategoryObj.label} — Projects`
      : featuredOnly
        ? 'Featured Projects'
        : 'Projects',
    description:
      activeCategoryObj?.description ||
      'Categorized software engineering directory showcasing full-stack web applications, mobile apps, and technical case studies.',
    canonicalPath: '/projects',
  });

  const allTechnologies = useMemo(() => getAllTechnologies(PROJECTS), []);

  const filteredAndSorted = useMemo(() => {
    const filtered = filterProjects(PROJECTS, {
      category: selectedCategory,
      featured: featuredOnly,
      tech: selectedTech,
      search: searchQuery,
    });
    return sortProjects(filtered, sortBy);
  }, [selectedCategory, featuredOnly, selectedTech, searchQuery, sortBy]);

  const updateParams = useCallback(
    (mutator) => {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          mutator(next);
          return next;
        },
        { replace: false }
      );
    },
    [setSearchParams]
  );

  const handleSelectAll = () => {
    updateParams((next) => {
      next.delete('category');
      next.delete('featured');
    });
  };

  const handleSelectFeatured = () => {
    updateParams((next) => {
      next.delete('category');
      next.set('featured', 'true');
    });
  };

  const handleSelectCategory = (categoryId) => {
    updateParams((next) => {
      next.delete('featured');
      if (categoryId === 'all') {
        next.delete('category');
      } else {
        next.set('category', categoryId);
      }
    });
  };

  const handleSelectTech = (techSlug) => {
    updateParams((next) => {
      if (techSlug) {
        next.set('tech', techSlug);
      } else {
        next.delete('tech');
      }
    });
  };

  const handleSearchChange = (value) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (value) {
          next.set('q', value);
        } else {
          next.delete('q');
        }
        return next;
      },
      { replace: true }
    );
  };

  const handleSortChange = (nextSort) => {
    updateParams((next) => {
      if (nextSort === 'featured') {
        next.delete('sort');
      } else {
        next.set('sort', nextSort);
      }
    });
  };

  const handleResetAll = () => {
    setSearchParams(new URLSearchParams());
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    featuredOnly ||
    Boolean(selectedTech) ||
    Boolean(searchQuery.trim()) ||
    sortBy !== 'featured';

  const headingTitle = activeCategoryObj
    ? activeCategoryObj.label
    : featuredOnly
      ? 'Featured Projects'
      : 'Project Directory';

  const headingDescription = activeCategoryObj
    ? activeCategoryObj.description
    : featuredOnly
      ? 'Highlighted systems with full technical architecture documentation and visual previews.'
      : 'Browse documented full-stack web applications, mobile software, and academic builds by category, technology, or keyword.';

  return (
    <MainContainer className="space-y-8">
      <SectionHeading
        eyebrow="Portfolio Showcase"
        title={headingTitle}
        description={headingDescription}
        as="h1"
      />

      <section
        aria-label="Project search and filters"
        className="space-y-5 rounded-xl border border-border-subtle bg-bg-card p-5"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <ProjectSearch value={searchQuery} onChange={handleSearchChange} />
          <ProjectSort value={sortBy} onChange={handleSortChange} />
        </div>

        <ProjectCategoryFilter
          selectedCategory={selectedCategory}
          featuredOnly={featuredOnly}
          projects={PROJECTS}
          onSelectAll={handleSelectAll}
          onSelectFeatured={handleSelectFeatured}
          onSelectCategory={handleSelectCategory}
        />

        <div className="border-t border-border-subtle pt-4">
          <ProjectTechnologyFilter
            technologies={allTechnologies}
            selectedTech={selectedTech}
            onSelectTech={handleSelectTech}
          />
        </div>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <p className="text-text-secondary" aria-live="polite">
          Showing{' '}
          <span className="font-mono font-medium text-text-primary">
            {filteredAndSorted.length}
          </span>{' '}
          of <span className="font-mono font-medium text-text-primary">{PROJECTS.length}</span>{' '}
          {PROJECTS.length === 1 ? 'project' : 'projects'}
        </p>

        {hasActiveFilters ? (
          <button
            type="button"
            onClick={handleResetAll}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-text hover:underline cursor-pointer"
          >
            <RotateCcw size={13} aria-hidden="true" />
            <span>Clear filters</span>
          </button>
        ) : null}
      </div>

      {filteredAndSorted.length > 0 ? (
        <ProjectGrid projects={filteredAndSorted} columns={3} />
      ) : (
        <ProjectEmptyState
          category={selectedCategory}
          search={searchQuery}
          tech={selectedTech}
          onReset={handleResetAll}
        />
      )}
    </MainContainer>
  );
}
