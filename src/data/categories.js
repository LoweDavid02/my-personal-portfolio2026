export const PROJECT_CATEGORIES = [
  {
    id: 'full-stack-web',
    slug: 'full-stack-web',
    label: 'Full-Stack Web Applications',
    shortLabel: 'Full-Stack Web',
    description:
      'End-to-end web platforms integrating React frontends, Laravel REST APIs, authentication, and relational databases.',
    iconName: 'Layers',
  },
  {
    id: 'frontend',
    slug: 'frontend',
    label: 'Frontend Development',
    shortLabel: 'Frontend',
    description:
      'Responsive, accessible user interfaces built with modern JavaScript, React, Vite, and Tailwind CSS.',
    iconName: 'Monitor',
  },
  {
    id: 'backend-apis',
    slug: 'backend-apis',
    label: 'Backend & APIs',
    shortLabel: 'Backend & APIs',
    description:
      'Server-side architectures, RESTful endpoints, role-based access control, and database modeling.',
    iconName: 'Server',
  },
  {
    id: 'mobile',
    slug: 'mobile',
    label: 'Mobile Applications',
    shortLabel: 'Mobile Apps',
    description:
      'Cross-platform mobile apps developed with React Native and NativeWind connected to backend APIs.',
    iconName: 'Smartphone',
  },
  {
    id: 'ui-ux',
    slug: 'ui-ux',
    label: 'UI/UX Design',
    shortLabel: 'UI/UX',
    description:
      'Interface architecture, interactive prototypes, and component systems designed with Figma and Tailwind CSS.',
    iconName: 'PenTool',
  },
  {
    id: 'academic',
    slug: 'academic',
    label: 'Academic Projects',
    shortLabel: 'Academic',
    description:
      'Coursework and institutional Information Systems builds developed at La Verdad Christian College.',
    iconName: 'GraduationCap',
  },
];

export const CATEGORY_MAP = Object.fromEntries(
  PROJECT_CATEGORIES.map((category) => [category.id, category])
);

export function getCategoryById(categoryId) {
  return CATEGORY_MAP[categoryId] || null;
}
