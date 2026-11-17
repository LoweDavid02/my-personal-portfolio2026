import { PROJECT_CATEGORIES } from '../data/categories.js';

export const NAVIGATION_ITEMS = [
  {
    id: 'home',
    label: 'Home',
    to: '/',
    iconName: 'Home',
    end: true,
  },
  {
    id: 'about',
    label: 'About Me',
    to: '/about',
    iconName: 'User',
    children: [
      {
        id: 'about-profile',
        label: 'Professional Profile',
        to: '/about#profile',
        hash: '#profile',
      },
      { id: 'about-skills', label: 'Technical Skills', to: '/about#skills', hash: '#skills' },
      { id: 'about-education', label: 'Education', to: '/about#education', hash: '#education' },
    ],
  },
  {
    id: 'projects',
    label: 'Projects',
    to: '/projects',
    iconName: 'FolderKanban',
    children: [
      { id: 'projects-all', label: 'All Projects', to: '/projects', matchType: 'all' },
      {
        id: 'projects-featured',
        label: 'Featured Projects',
        to: '/projects?featured=true',
        matchType: 'featured',
      },
      ...PROJECT_CATEGORIES.map((category) => ({
        id: `projects-cat-${category.id}`,
        label: category.label,
        shortLabel: category.shortLabel,
        to: `/projects?category=${category.slug}`,
        matchType: 'category',
        categoryId: category.id,
        dividerBefore: category.id === 'full-stack-web',
      })),
    ],
  },
  {
    id: 'experience',
    label: 'Experience',
    to: '/experience',
    iconName: 'Briefcase',
    children: [
      {
        id: 'experience-training',
        label: 'Experience & Training',
        to: '/experience#experience',
        hash: '#experience',
      },
      {
        id: 'experience-certifications',
        label: 'Certifications',
        to: '/experience#certifications',
        hash: '#certifications',
      },
    ],
  },
  {
    id: 'resume',
    label: 'Resume / CV',
    to: '/resume',
    iconName: 'FileText',
  },
  {
    id: 'contact',
    label: 'Contact',
    to: '/contact',
    iconName: 'Mail',
  },
];

export function isGroupActive(item, location) {
  const { pathname } = location;
  if (item.id === 'home') return pathname === '/';
  if (item.id === 'about') return pathname === '/about';
  if (item.id === 'projects') return pathname === '/projects' || pathname.startsWith('/projects/');
  if (item.id === 'experience') return pathname === '/experience';
  if (item.id === 'resume') return pathname === '/resume';
  if (item.id === 'contact') return pathname === '/contact';
  return pathname === item.to;
}

export function isChildActive(child, location) {
  const { pathname, search, hash } = location;
  const params = new URLSearchParams(search);

  if (child.to.startsWith('/about')) {
    if (pathname !== '/about') return false;
    if (!hash) return child.hash === '#profile';
    return hash === child.hash;
  }

  if (child.to.startsWith('/experience')) {
    if (pathname !== '/experience') return false;
    if (!hash) return child.hash === '#experience';
    return hash === child.hash;
  }

  if (child.to.startsWith('/projects')) {
    if (pathname !== '/projects') return false;
    const category = params.get('category');
    const featured = params.get('featured');

    if (child.matchType === 'all') {
      return !category && featured !== 'true';
    }
    if (child.matchType === 'featured') {
      return featured === 'true' && !category;
    }
    if (child.matchType === 'category') {
      return category === child.categoryId;
    }
  }

  return false;
}

export function buildBreadcrumbs(location, project = null) {
  const { pathname, search } = location;
  const params = new URLSearchParams(search);
  const crumbs = [{ label: 'Home', to: '/' }];

  if (pathname === '/') {
    return crumbs;
  }

  if (pathname === '/about') {
    crumbs.push({ label: 'About Me', to: '/about' });
    return crumbs;
  }

  if (pathname === '/projects') {
    crumbs.push({ label: 'Projects', to: '/projects' });
    const categoryId = params.get('category');
    const featured = params.get('featured');
    if (categoryId) {
      const cat = PROJECT_CATEGORIES.find((c) => c.id === categoryId);
      if (cat) {
        crumbs.push({ label: cat.shortLabel || cat.label, to: `/projects?category=${cat.slug}` });
      }
    } else if (featured === 'true') {
      crumbs.push({ label: 'Featured', to: '/projects?featured=true' });
    }
    return crumbs;
  }

  if (pathname.startsWith('/projects/')) {
    crumbs.push({ label: 'Projects', to: '/projects' });
    crumbs.push({
      label: project ? project.shortTitle || project.title : 'Case Study',
      to: pathname,
    });
    return crumbs;
  }

  if (pathname === '/experience') {
    crumbs.push({ label: 'Experience', to: '/experience' });
    return crumbs;
  }

  if (pathname === '/resume') {
    crumbs.push({ label: 'Resume / CV', to: '/resume' });
    return crumbs;
  }

  if (pathname === '/contact') {
    crumbs.push({ label: 'Contact', to: '/contact' });
    return crumbs;
  }

  crumbs.push({ label: 'Page Not Found', to: pathname });
  return crumbs;
}
