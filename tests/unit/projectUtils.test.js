import { describe, expect, it } from 'vitest';
import {
  buildBreadcrumbs,
  isChildActive,
  isGroupActive,
  NAVIGATION_ITEMS,
} from '../../src/config/navigation.js';
import { PROJECTS } from '../../src/data/projects.js';
import {
  filterProjects,
  getAllTechnologies,
  matchesTechnologyFilter,
} from '../../src/utils/projectFilters.js';
import { normalizeSortOption, sortProjects } from '../../src/utils/projectSorting.js';

describe('projectFilters', () => {
  it('returns all projects when no filters are active', () => {
    expect(filterProjects(PROJECTS, {})).toHaveLength(PROJECTS.length);
  });

  it('filters by primary category accurately', () => {
    const webProjects = filterProjects(PROJECTS, { category: 'full-stack-web' });
    expect(webProjects).toHaveLength(3);
    expect(webProjects.every((p) => p.category === 'full-stack-web')).toBe(true);

    const mobileProjects = filterProjects(PROJECTS, { category: 'mobile' });
    expect(mobileProjects).toHaveLength(1);
    expect(mobileProjects[0].slug).toBe('opendoor-mobile-application');
  });

  it('returns empty array for unrecognized categories instead of crashing', () => {
    expect(filterProjects(PROJECTS, { category: 'nonexistent-category' })).toEqual([]);
  });

  it('filters by technology slug including shorthand ?tech=react', () => {
    expect(matchesTechnologyFilter(['React JS', 'Laravel'], 'react')).toBe(true);
    expect(matchesTechnologyFilter(['React Native', 'Laravel'], 'react')).toBe(true);
    expect(matchesTechnologyFilter(['Laravel', 'MySQL'], 'react')).toBe(false);

    const laravelProjects = filterProjects(PROJECTS, { tech: 'laravel' });
    expect(laravelProjects).toHaveLength(4);

    const postgresProjects = filterProjects(PROJECTS, { tech: 'postgresql' });
    expect(postgresProjects).toHaveLength(1);
    expect(postgresProjects[0].slug).toBe('barangay-ticketing-system');
  });

  it('performs case-insensitive whitespace-tolerant search', () => {
    const matches = filterProjects(PROJECTS, { search: '  barangay   openstreetmap ' });
    expect(matches).toHaveLength(1);
    expect(matches[0].slug).toBe('barangay-ticketing-system');
  });

  it('extracts sorted unique technologies', () => {
    const techs = getAllTechnologies(PROJECTS);
    expect(techs.some((t) => t.slug === 'react-js')).toBe(true);
    expect(techs.some((t) => t.slug === 'laravel')).toBe(true);
  });
});

describe('projectSorting', () => {
  it('falls back invalid sort values to featured', () => {
    expect(normalizeSortOption('invalid-sort')).toBe('featured');
    expect(normalizeSortOption('newest')).toBe('newest');
  });

  it('sorts alphabetically A-Z and Z-A by display title', () => {
    const asc = sortProjects(PROJECTS, 'title-asc').map((p) => p.shortTitle || p.title);
    const desc = sortProjects(PROJECTS, 'title-desc').map((p) => p.shortTitle || p.title);
    expect(asc).toEqual([...asc].sort((a, b) => a.localeCompare(b)));
    expect(desc).toEqual([...asc].reverse());
  });

  it('sorts newest and oldest consistently', () => {
    const newest = sortProjects(PROJECTS, 'newest');
    const oldest = sortProjects(PROJECTS, 'oldest');
    expect(newest[0].slug).toBe('opendoor-consultation-booking-system');
    expect(oldest[0].slug).toBe('barangay-ticketing-system');
  });
});

describe('navigation helpers', () => {
  it('detects active parent groups and child links from location', () => {
    const projectsGroup = NAVIGATION_ITEMS.find((item) => item.id === 'projects');
    const detailLoc = { pathname: '/projects/barangay-ticketing-system', search: '', hash: '' };
    expect(isGroupActive(projectsGroup, detailLoc)).toBe(true);

    const fullStackChild = projectsGroup.children.find(
      (c) => c.id === 'projects-cat-full-stack-web'
    );
    const catLoc = { pathname: '/projects', search: '?category=full-stack-web', hash: '' };
    expect(isChildActive(fullStackChild, catLoc)).toBe(true);
  });

  it('builds breadcrumbs including case study title', () => {
    const crumbs = buildBreadcrumbs(
      { pathname: '/projects/barangay-ticketing-system', search: '' },
      PROJECTS[0]
    );
    expect(crumbs.map((c) => c.label)).toEqual([
      'Home',
      'Projects',
      'Barangay San Vicente Ticketing System',
    ]);
  });
});
