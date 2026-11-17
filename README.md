# Lowe David C. Tubat — Full-Stack Web Developer Portfolio

A modern minimalist developer portfolio built with React, Vite, Tailwind CSS, React Router, and Motion. Designed around a persistent collapsible sidebar application shell, hierarchical navigation, synchronized URL-driven project filtering, and dedicated technical case studies.

## Key Features

- **Collapsible Sidebar Application Shell**: Persistent `256px` / `72px` desktop sidebar with local storage preference persistence, keyboard-accessible accordion navigation groups, collapsed hover/focus tooltips, and active route synchronization.
- **Accessible Mobile Drawer**: Off-canvas navigation drawer below `768px` with backdrop dismissal, `Escape` key handling, focus trapping, body scroll locking, and automatic closing on navigation.
- **Categorized Project Directory**: Centralized project dataset supporting primary category tabs, technology filter chips, real-time search, multi-option sorting, URL query parameter synchronization (`/projects?category=...&tech=...&sort=...`), and helpful empty states.
- **Project Case Studies**: Dynamic `/projects/:slug` pages covering problem statements, solutions, system architecture layers, features, challenges, screenshot galleries with lightbox inspection, and related projects.
- **Theme System**: Light, Dark, and System theme detection with zero-flash initial load script and local storage persistence.
- **Resume & Contact Pages**: Verified resume PDF overview, inline document preview, direct PDF download/open controls (`public/resume/developer-resume.pdf`), verified social links, and `mailto:` email composer.
- **Vercel-Ready SPA Configuration**: Includes `vercel.json` fallback rewrites for client-side routes, `robots.txt`, `sitemap.xml`, and route-based code splitting via `React.lazy`.

## Tech Stack

- **Frontend**: React 19, Vite 8, JavaScript (ES6+ / JSX), React Router DOM 7
- **Styling & UI**: Tailwind CSS v4 (`@tailwindcss/vite`), CSS custom properties (design tokens), Lucide React, Motion (`motion/react`)
- **Testing & Quality**: Vitest, React Testing Library, Playwright, ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js 20+ (tested on Node 24)
- npm 10+

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

### Production Build & Preview

```bash
npm run build
npm run preview
```

### Linting, Formatting & Tests

```bash
# Run ESLint
npm run lint

# Check code formatting
npm run format:check

# Run unit and component tests (Vitest + React Testing Library)
npm test

# Run Playwright E2E tests against production preview (build first)
npm run build
npm run test:e2e
```

## Project Structure

```text
my-personal-portfolio/
├── public/
│   ├── images/
│   │   ├── profile/            # Profile portraits & logo assets
│   │   └── projects/           # Real project screenshots
│   ├── resume/
│   │   └── developer-resume.pdf
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── App.jsx             # Root provider & Router setup
│   │   └── router.jsx          # Lazy-loaded route definitions
│   ├── components/
│   │   ├── layout/             # ContentHeader, Breadcrumbs, MainContainer, Footer
│   │   ├── projects/           # ProjectCard, Grid, Search, Filters, Sort, Gallery
│   │   ├── sections/           # Homepage sections (Hero, Expertise, Approach, CTA)
│   │   ├── sidebar/            # Desktop Sidebar, NavGroups, Items, Mobile Drawer
│   │   └── ui/                 # Reusable Button, Card, Badge, Dialog, ThemeToggle
│   ├── config/
│   │   ├── navigation.js       # Sidebar hierarchy & breadcrumb builder
│   │   └── site.js             # Owner identity, contact info & verified external links
│   ├── context/
│   │   ├── SidebarProvider.jsx # Desktop collapse, accordion & mobile drawer state
│   │   └── ThemeProvider.jsx   # Light/Dark/System theme state
│   ├── data/
│   │   ├── categories.js       # Primary project categories
│   │   ├── experience.js       # Experience timeline & certifications
│   │   ├── projects.js         # Centralized project & case study records
│   │   └── skills.js           # Grouped technical skills & education records
│   ├── hooks/                  # useSidebar, useTheme, usePageMeta
│   ├── layouts/
│   │   └── AppLayout.jsx       # Sidebar shell + main content region
│   ├── pages/                  # Home, About, Projects, ProjectDetails, Experience, Resume, Contact, NotFound
│   ├── styles/
│   │   └── index.css           # Tailwind v4 setup & Light/Dark theme CSS tokens
│   ├── utils/                  # assetUrl, storage, projectFilters, projectSorting
│   └── main.jsx
├── tests/
│   ├── unit/                   # Vitest + React Testing Library suites
│   ├── e2e/                    # Playwright browser tests
│   └── setup.js
├── docs/
│   └── MISSING_CONTENT.md      # Pending personal content & asset verification checklist
├── .env.example
├── vercel.json
├── vite.config.js
├── vitest.config.js
└── playwright.config.js
```

## Content & Customization Guide

### Adding a New Project

1. Place real project screenshots inside `public/images/projects/`.
2. Open `src/data/projects.js` and append a new project object to the `PROJECTS` array with a unique `id`, unique `slug`, one primary `category` ID from `src/data/categories.js`, `technologies`, `links`, and optional `caseStudy` details.
3. The project directory (`/projects`), featured section (`featured: true`), technology filters, related projects, and dynamic route (`/projects/<slug>`) update automatically.
4. Optionally add `/projects/<slug>` to `public/sitemap.xml`.

### Adding a Project Category

1. Open `src/data/categories.js` and add a new entry (`id`, `slug`, `label`, `shortLabel`, `description`, `iconName`).
2. Verify `iconName` is registered in `src/components/ui/NavIcon.jsx`.
3. Sidebar navigation (`src/config/navigation.js`) and project filter tabs (`src/components/projects/ProjectCategoryFilter.jsx`) automatically reflect the new category.

### Updating Personal Information & External Links

Edit `src/config/site.js` to update:

- Name, role, headline, location, and portrait image paths (`SITE_CONFIG.owner`)
- Email and phone details (`SITE_CONFIG.contact`)
- GitHub, LinkedIn, Facebook, and Instagram URLs (`SITE_CONFIG.links`)
- Development methodology steps (`SITE_CONFIG.methodology`)

Edit `src/data/skills.js` and `src/data/experience.js` to update technical skills, education, timeline entries, or certifications.

### Adding Screenshots

1. Save screenshots as PNG/WebP/JPG files inside `public/images/projects/`.
2. Reference them relative to `public/` (e.g., `images/projects/my-screenshot.png`) in `coverImage` and `gallery` items inside `src/data/projects.js`.
3. Always provide descriptive `alt` text and captions.

### Updating the Resume / CV

1. Replace `public/resume/developer-resume.pdf` with your updated PDF file.
2. Update `SITE_CONFIG.resume.lastUpdated` and `downloadFilename` in `src/config/site.js` if desired.
3. Update the summary card fields on `src/pages/Resume.jsx` if education or contact details change.

## Deployment (Vercel)

This repository is preconfigured for static SPA deployment on Vercel:

- `vite.config.js` defaults `base` to `'/'`.
- `vercel.json` rewrites client-side routes to `/index.html` so deep links such as `/projects/barangay-ticketing-system` and `/about` load cleanly on direct refresh.
- Copy `.env.example` to `.env` (or configure `VITE_SITE_URL` in Vercel Project Settings) if you want canonical `<link rel="canonical">` tags emitted for your production domain.

If deploying to a subpath host such as GitHub Pages, set `VITE_BASE_PATH=/my-personal-portfolio2026/` before building.

## Pending Content Checklist

See [docs/MISSING_CONTENT.md](docs/MISSING_CONTENT.md) for personal assets, email verification notes, live demo URLs, and optional certifications awaiting confirmation.
