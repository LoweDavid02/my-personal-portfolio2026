export const PROJECTS = [
  {
    id: 'project-001',
    slug: 'barangay-ticketing-system',
    title: 'Web-Based Service Request & Ticketing Management System',
    shortTitle: 'Barangay San Vicente Ticketing System',
    organization: 'Barangay San Vicente, Apalit, Pampanga',
    summary:
      'Centralized municipal service request, complaint mapping, and ticket lifecycle platform built for Barangay San Vicente with role-based workflows and real-time operational oversight.',
    category: 'full-stack-web',
    technologies: [
      'React JS',
      'Vite',
      'Tailwind CSS',
      'Laravel',
      'PostgreSQL',
      'REST API',
      'OpenStreetMap',
    ],
    tags: [
      'Civic Tech',
      'Ticketing Workflow',
      'Role-Based Access',
      'Leaflet Mapping',
      'Academic Project',
    ],
    featured: true,
    status: 'in-development',
    statusLabel: 'Academic Project · Active Development',
    role: 'Full-Stack Web Developer & UI Designer',
    startedAt: '2024-01',
    completedAt: null,
    periodLabel: '2024 – Present',
    coverImage: 'images/projects/barangay-san-vicente-admin.png',
    coverAlt:
      'Admin Portal interface for Barangay San Vicente showing ticket summary cards, an OpenStreetMap complaint map, and department workload indicators',
    gallery: [
      {
        src: 'images/projects/barangay-san-vicente-admin.png',
        alt: 'Barangay San Vicente Admin Portal dashboard with OpenStreetMap complaint markers and department workload progress bars',
        caption:
          'Admin Portal prototype showing operations overview, complaint geospatial markers via OpenStreetMap/Leaflet, and sector workload tracking.',
      },
    ],
    links: {
      demo: null,
      github: 'https://github.com/LoweDavid02/SAN-VICENTE-TICKET-MANAGEMENT-SYSTEM',
      documentation: null,
    },
    caseStudy: {
      overview:
        'A centralized service request and ticketing management web application designed for Barangay San Vicente, Apalit, Pampanga. The platform structures resident issue submission, ticket tracking, barangay personnel assignment, department workload visibility, and audit logging inside a unified administrative portal.',
      problem:
        'Manual and walk-in service request handling at the barangay level makes it difficult to track pending complaints, assign personnel across departments, verify resolution evidence, or inspect recurring neighborhood issues geographically.',
      solution:
        'Developed a full-stack web architecture pairing a React JS and Tailwind CSS interface with a Laravel REST API and relational PostgreSQL database. Residents can submit and track service requests while administrators and assigned personnel manage ticket categories, status transitions, evidence uploads, and department workloads.',
      objectives: [
        'Provide a structured resident ticket submission and tracking workflow without requiring complex onboarding.',
        'Centralize ticket triage, department assignment, status updates, and evidence management for barangay personnel.',
        'Visualize complaint locations on an interactive map using Leaflet and OpenStreetMap contributors data.',
        'Maintain accountability through structured status histories and audit logging.',
      ],
      features: [
        {
          group: 'Resident & Guest Request Flow',
          items: [
            'Guest service request and complaint submission with categorized issue types',
            'Ticket status tracking from pending submission through active progress and resolution',
            'Geospatial pin placement and verification within Barangay San Vicente boundaries',
          ],
        },
        {
          group: 'Personnel & Operations Workflow',
          items: [
            'Ticket category management and personnel assignment across barangay departments',
            'Department workload monitoring across Social Services, Public Safety, Waste Management, and Infrastructure',
            'Evidence upload and status update handling for assigned field personnel',
          ],
        },
        {
          group: 'Administration & Oversight',
          items: [
            'Administrative dashboard summarizing total tickets, urgent pending issues, and active personnel',
            'Interactive OpenStreetMap complaint map with color-coded status markers',
            'Notifications, structured reporting views, and audit logging support',
          ],
        },
      ],
      architecture: {
        summary:
          'Separated SPA frontend communicating over JSON REST endpoints with a Laravel backend and relational PostgreSQL persistence.',
        layers: [
          {
            name: 'Client Interface',
            tech: 'React JS, Vite, Tailwind CSS, Leaflet / OpenStreetMap',
            detail:
              'Responsive single-page administration and request portals with interactive complaint mapping and department workload views.',
          },
          {
            name: 'Application & API Layer',
            tech: 'Laravel PHP, REST API',
            detail:
              'Request validation, ticket lifecycle state transitions, role-based personnel authorization, notifications, and audit trail logging.',
          },
          {
            name: 'Data Layer',
            tech: 'PostgreSQL / Relational Schema',
            detail:
              'Normalized tables for tickets, categories, barangay departments, personnel assignments, status updates, and evidence records.',
          },
        ],
      },
      process: [
        'Mapped barangay service request intake, triage, and resolution workflows with project stakeholders.',
        'Designed relational schemas covering ticket categories, department assignments, evidence attachments, and audit records.',
        'Built RESTful API endpoints in Laravel and integrated interactive dashboard and Leaflet mapping views in React.',
        'Iteratively tested guest submission, personnel status updates, and geospatial boundary checks during academic development.',
      ],
      challenges: [
        {
          challenge:
            'Validating complaint coordinates within Barangay San Vicente service boundaries',
          resolution:
            'Integrated Leaflet map boundary checks on top of OpenStreetMap tiles so submissions outside the barangay polygon clearly notify the user before dispatching.',
        },
        {
          challenge:
            'Keeping ticket assignments, status updates, and department workloads consistent',
          resolution:
            'Centralized ticket state transitions in Laravel API controllers with relational foreign keys and structured status categories (Pending, In Progress, Resolved).',
        },
      ],
      outcomes: [
        'Delivered an integrated React + Laravel prototype covering resident intake, department workload views, and complaint mapping.',
        'Published source codebase on GitHub and integrated project architecture into the BS Information Systems academic track at La Verdad Christian College.',
      ],
      learnings: [
        'Designing clear REST API contracts early avoids duplicated state validation between React forms and Laravel controllers.',
        'Explicit ticket status enums and audit logging make multi-role workflows easier to debug and verify.',
        'Geospatial UI controls require clear boundary feedback and connection-error states for field reliability.',
      ],
      missingFields: [
        'Public live deployment URL (not yet deployed to a public production server)',
        'Additional screenshots of resident guest submission and evidence detail views',
        'Post-deployment municipal adoption metrics (pending formal barangay rollout)',
      ],
    },
  },
  {
    id: 'project-002',
    slug: 'opendoor-consultation-booking-system',
    title: 'OpenDoor Consultation Booking & Appointment Scheduling System',
    shortTitle: 'OpenDoor Web Application',
    organization: 'Prefect of Student Affairs & Services · La Verdad Christian College',
    summary:
      'Role-based office consultation scheduling and calendar management web application built with React JS, Laravel, Tailwind CSS, and MySQL.',
    category: 'full-stack-web',
    technologies: ['React JS', 'Laravel', 'Tailwind CSS', 'MySQL', 'Laravel Socialite', 'REST API'],
    tags: ['Scheduling', 'Calendar Integration', 'Role-Based Workflows', 'Student Services'],
    featured: true,
    status: 'completed',
    statusLabel: 'Academic System Build',
    role: 'Full-Stack Developer',
    startedAt: '2025-01',
    completedAt: '2026-03',
    periodLabel: '2025 – 2026',
    coverImage: 'images/projects/opendoor-web-dashboard.png',
    coverAlt:
      'OpenDoor Web Application dashboard displaying daily consultations, pending approvals, monthly calendar view, and upcoming appointments',
    gallery: [
      {
        src: 'images/projects/opendoor-web-dashboard.png',
        alt: 'OpenDoor Web Dashboard with monthly calendar grid, upcoming appointments list, and office filtering',
        caption:
          'OpenDoor web dashboard showing consultation counters, monthly schedule grid, office filter, and upcoming appointment approvals.',
      },
    ],
    links: {
      demo: null,
      github: 'https://github.com/garrellmacarilay/open-door',
      documentation: null,
    },
    caseStudy: {
      overview:
        'A full-stack consultation booking and appointment management web application created for managing student service requests and office schedules under the Prefect of Student Affairs & Services at La Verdad Christian College.',
      problem:
        'Coordinating student consultations across campus offices such as Guidance and Counseling or Medical and Dental Services through manual logs creates scheduling conflicts, delayed approvals, and poor visibility of upcoming office events.',
      solution:
        'Built a role-based consultation management web application using Laravel, React JS, Tailwind CSS, MySQL, and Laravel Socialite authentication so students and office staff can submit, review, approve, and track scheduled appointments on a shared calendar.',
      objectives: [
        'Streamline student consultation requests and office approval workflows.',
        'Provide a unified monthly calendar highlighting approved, pending, and scheduled campus events.',
        'Secure institutional user access via Laravel Socialite authentication.',
      ],
      features: [
        {
          group: 'Scheduling & Calendar Management',
          items: [
            'Interactive monthly calendar displaying approved consultations, pending requests, and campus events',
            'Office-level filtering across campus student service offices',
            'Dedicated Upcoming Appointments and Upcoming Events side panels with quick event creation',
          ],
        },
        {
          group: 'Role-Based Booking Workflows',
          items: [
            'Approval and status workflow (Pending, Approved) for office coordinators',
            'Office Management, Consultation Summary, and Analytics navigation modules',
            'Institutional authentication powered by Laravel Socialite and relational MySQL storage',
          ],
        },
      ],
      architecture: {
        summary:
          'React JS client interface integrated with a Laravel backend, Socialite OAuth authentication, and a MySQL relational database.',
        layers: [
          {
            name: 'Frontend UI',
            tech: 'React JS, Tailwind CSS',
            detail:
              'Dashboard cards, monthly calendar grid, office filters, and consultation approval panels.',
          },
          {
            name: 'Backend & Authentication',
            tech: 'Laravel PHP, Laravel Socialite, REST API',
            detail:
              'Handles OAuth-based sign-in, role-based office workflows, booking approvals, and event scheduling.',
          },
          {
            name: 'Relational Database',
            tech: 'MySQL',
            detail:
              'Stores user roles, service offices, consultation appointments, approval states, and scheduled events.',
          },
        ],
      },
      process: [
        'Collaborated within a student development team using Git and GitHub branches.',
        'Modeled MySQL relational tables for offices, appointments, users, and calendar events.',
        'Implemented authentication via Laravel Socialite and connected React dashboard views to Laravel routes.',
      ],
      challenges: [
        {
          challenge: 'Presenting dense monthly appointment data without cluttering staff views',
          resolution:
            'Separated high-level daily/monthly counters from the interactive calendar grid and dedicated sidebars for upcoming appointments and events.',
        },
        {
          challenge:
            'Coordinating consistent API conventions across web and companion mobile clients',
          resolution:
            'Standardized office filters, appointment status labels, and event payload structures in Laravel controllers.',
        },
      ],
      outcomes: [
        'Completed core web scheduling, office management, and calendar visualization workflows in collaboration with the team.',
        'Established shared Laravel API contracts later consumed by the companion OpenDoor Mobile application.',
      ],
      learnings: [
        'Collaborative Git branching and shared API contracts significantly speed up parallel web and mobile development.',
        'Role-based scheduling systems benefit from explicit status color coding and clean date-range filtering.',
      ],
      missingFields: [
        'Public live demo URL (internal institutional build)',
        'Additional screenshots of Office Management and Consultation Summary sub-views',
      ],
    },
  },
  {
    id: 'project-003',
    slug: 'opendoor-mobile-application',
    title: 'OpenDoor Mobile Consultation Application',
    shortTitle: 'OpenDoor Mobile',
    organization: 'La Verdad Christian College · Companion Mobile Client',
    summary:
      'Cross-platform React Native mobile client for student consultation booking, office/status filtering, and real-time calendar tracking built with NativeWind and Laravel APIs.',
    category: 'mobile',
    technologies: ['React Native', 'NativeWind', 'Tailwind CSS', 'Laravel', 'REST API'],
    tags: ['Cross-Platform Mobile', 'UI/UX Design', 'Consultation Tracking', 'Student Portal'],
    featured: true,
    status: 'in-development',
    statusLabel: '2026 – Present · Active Build',
    role: 'Mobile UI/UX Designer & React Native Developer',
    startedAt: '2026-01',
    completedAt: null,
    periodLabel: '2026 – Present',
    coverImage: 'images/projects/opendoor-mobile-dashboard.png',
    coverAlt:
      'OpenDoor Mobile Application student dashboard showing office and status filters, monthly consultation calendar, and floating action button',
    gallery: [
      {
        src: 'images/projects/opendoor-mobile-dashboard.png',
        alt: 'OpenDoor Mobile Student Dashboard inside phone frame showing March 2026 calendar with color-coded status dots',
        caption:
          'Student mobile dashboard featuring office/status dropdown filters, color-coded consultation calendar dots, and quick booking action.',
      },
    ],
    links: {
      demo: null,
      github: 'https://github.com/garrellmacarilay/open-door-mobile',
      documentation: null,
    },
    caseStudy: {
      overview:
        'The companion mobile version of the OpenDoor consultation platform designed and built with React Native and NativeWind so students can view, filter, and schedule office consultations directly from mobile devices.',
      problem:
        'Students away from desktop computers needed a quick, mobile-friendly interface to check appointment approval statuses, inspect office schedules, and initiate new consultation requests.',
      solution:
        'Designed and implemented a mobile-first React Native application styled with NativeWind and connected to existing Laravel backend APIs, maintaining visual and status-state consistency with the OpenDoor web platform.',
      objectives: [
        'Bring OpenDoor consultation visibility and booking flows to mobile users.',
        'Keep appointment statuses (Pending, Approved, Declined, Events) visually consistent with the web platform.',
        'Apply mobile-first UI/UX spacing, clear touch targets, and concise bottom-tab navigation.',
      ],
      features: [
        {
          group: 'Mobile Student Dashboard',
          items: [
            'Office and status dropdown filters (All Offices, All Status) for quick schedule triage',
            'Interactive monthly calendar displaying color-coded status dots (Pending, Approved, Declined, Events)',
            'Floating action button (+) for initiating new consultation bookings and compact bottom navigation bar',
          ],
        },
        {
          group: 'Cross-System Consistency',
          items: [
            'Shared Laravel REST API integration synchronizing student consultation data with the web system',
            'Utility-first NativeWind styling aligned with the web brand palette',
          ],
        },
      ],
      architecture: {
        summary:
          'React Native mobile client using NativeWind for styling and RESTful HTTP integration with the OpenDoor Laravel API.',
        layers: [
          {
            name: 'Mobile Client',
            tech: 'React Native, NativeWind (Tailwind CSS)',
            detail:
              'Student dashboard, filter selectors, interactive monthly calendar, and bottom navigation shell.',
          },
          {
            name: 'Backend Integration',
            tech: 'Laravel REST API',
            detail:
              'Provides office lists, student consultation records, status updates, and event calendars.',
          },
        ],
      },
      process: [
        'Translated OpenDoor web consultation concepts into a mobile-first UI hierarchy with thumb-friendly controls.',
        'Configured NativeWind styling tokens to match the dark-navy and blue OpenDoor palette.',
        'Connected mobile views to Laravel REST APIs and maintained codebase parity via Git.',
      ],
      challenges: [
        {
          challenge:
            'Fitting full monthly calendar visibility and multi-status indicators onto narrow mobile viewports',
          resolution:
            'Replaced wide text badges from the desktop web view with compact color-coded indicator dots and an explicit legend directly beneath the calendar grid.',
        },
      ],
      outcomes: [
        'Implemented the mobile Student Dashboard, consultation calendar, and filter navigation in React Native.',
        'Maintained consistent data models and status semantics across both web and mobile repositories.',
      ],
      learnings: [
        'Desktop UI patterns such as text-heavy calendar chips must be distilled into compact visual indicators on mobile screens.',
        'Utility styling via NativeWind keeps design tokens consistent across React web and React Native projects.',
      ],
      missingFields: [
        'App store / Expo preview build link',
        'Additional mobile screens (booking form modal, notifications drawer)',
      ],
    },
  },
];

export function getProjectBySlug(slug) {
  return PROJECTS.find((project) => project.slug === slug) || null;
}

export function getRelatedProjects(currentProject, limit = 2) {
  if (!currentProject) return [];
  return PROJECTS.filter((project) => project.slug !== currentProject.slug)
    .map((project) => {
      let score = 0;
      if (project.category === currentProject.category) score += 3;
      const sharedTech = project.technologies.filter((tech) =>
        currentProject.technologies.includes(tech)
      ).length;
      score += sharedTech;
      return { project, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.project);
}
