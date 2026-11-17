export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured First' },
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'title-asc', label: 'A–Z' },
  { value: 'title-desc', label: 'Z–A' },
];

const VALID_SORT_VALUES = new Set(SORT_OPTIONS.map((opt) => opt.value));

export function normalizeSortOption(sort) {
  return VALID_SORT_VALUES.has(sort) ? sort : 'featured';
}

function getDateScore(project, fallback) {
  const dateStr = project.completedAt || project.startedAt;
  if (!dateStr) return fallback;
  const parsed = Date.parse(dateStr.length === 7 ? `${dateStr}-01` : dateStr);
  return Number.isNaN(parsed) ? fallback : parsed;
}

export function sortProjects(projects = [], sortBy = 'featured') {
  const normalized = normalizeSortOption(sortBy);
  const copy = [...projects];

  copy.sort((a, b) => {
    if (normalized === 'newest') {
      const diff = getDateScore(b, 0) - getDateScore(a, 0);
      if (diff !== 0) return diff;
      return (a.shortTitle || a.title).localeCompare(b.shortTitle || b.title);
    }

    if (normalized === 'oldest') {
      const diff =
        getDateScore(a, Number.MAX_SAFE_INTEGER) - getDateScore(b, Number.MAX_SAFE_INTEGER);
      if (diff !== 0) return diff;
      return (a.shortTitle || a.title).localeCompare(b.shortTitle || b.title);
    }

    if (normalized === 'title-asc') {
      return (a.shortTitle || a.title).localeCompare(b.shortTitle || b.title);
    }

    if (normalized === 'title-desc') {
      return (b.shortTitle || b.title).localeCompare(a.shortTitle || a.title);
    }

    // Default: featured first, preserving curated array order within each tier
    if (Boolean(a.featured) !== Boolean(b.featured)) {
      return a.featured ? -1 : 1;
    }
    return 0;
  });

  return copy;
}
