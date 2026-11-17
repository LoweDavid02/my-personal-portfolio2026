import { CATEGORY_MAP } from '../data/categories.js';

export function toTechSlug(tech = '') {
  return String(tech)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getAllTechnologies(projects = []) {
  const seen = new Map();
  for (const project of projects) {
    for (const tech of project.technologies || []) {
      const slug = toTechSlug(tech);
      if (slug && !seen.has(slug)) {
        seen.set(slug, { label: tech, slug });
      }
    }
  }
  return Array.from(seen.values()).sort((a, b) => a.label.localeCompare(b.label));
}

export function matchesTechnologyFilter(technologies = [], filterQuery = '') {
  if (!filterQuery) return true;
  const normalizedQuery = toTechSlug(filterQuery);
  if (!normalizedQuery) return true;

  return technologies.some((tech) => {
    const slug = toTechSlug(tech);
    if (slug === normalizedQuery) return true;
    // Allow shorthand ?tech=react to match React JS / React Native
    if (normalizedQuery === 'react') {
      return slug === 'react-js' || slug === 'react' || slug === 'react-native';
    }
    return slug.split('-').includes(normalizedQuery);
  });
}

export function matchesSearchQuery(project, rawQuery = '') {
  const query = String(rawQuery).trim().toLowerCase();
  if (!query) return true;

  const tokens = query.split(/\s+/).filter(Boolean);
  const haystack = [
    project.title,
    project.shortTitle,
    project.organization,
    project.summary,
    project.caseStudy?.overview,
    project.caseStudy?.problem,
    project.caseStudy?.solution,
    ...(project.technologies || []),
    ...(project.tags || []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return tokens.every((token) => haystack.includes(token));
}

export function filterProjects(projects = [], filters = {}) {
  const { category = 'all', featured = false, tech = '', search = '' } = filters;

  const validCategory = category && category !== 'all' && CATEGORY_MAP[category] ? category : null;

  return projects.filter((project) => {
    if (category && category !== 'all' && !validCategory) {
      return false;
    }
    if (validCategory && project.category !== validCategory) {
      return false;
    }
    if (featured && !project.featured) {
      return false;
    }
    if (tech && !matchesTechnologyFilter(project.technologies, tech)) {
      return false;
    }
    if (search && !matchesSearchQuery(project, search)) {
      return false;
    }
    return true;
  });
}
