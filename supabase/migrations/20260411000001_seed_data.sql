-- ============================================
-- Seed initial experiences and projects
-- ============================================

insert into public.experiences (company, role, start_date, end_date, description, tech_stack, company_url, sort_order) values
(
  'CodaPet',
  'Frontend Developer',
  'January 2025',
  'Present',
  array[
    'Redesigned all CodaPet web applications, delivering a modern and cohesive user experience across the platform.',
    'Built and published @codapet/design-system — a comprehensive, reusable design system package on npm used across all CodaPet apps.',
    'Developed and maintained the frontend for CodaPet''s in-home pet euthanasia booking platform, serving pet owners and veterinarians nationwide.'
  ],
  array['Next.js', 'TypeScript', 'Vercel', 'Design System', 'Tailwind CSS', 'React'],
  'https://www.codapet.com/',
  0
),
(
  'Apxor Private Limited',
  'Software Development Engineer-I',
  'May 2023',
  'December 2024',
  array[
    'Work as a Full Stack Developer on a large-scale project with a dedicated team including SDK, backend, frontend, QA, and product specialists.',
    'Architected and designed reusable React components and algorithms for optimizing the dashboard, contributing to a more efficient and scalable system.'
  ],
  array['React JS', 'TypeScript', 'Shadcn UI', 'Zustand', 'Redux', 'TanStack Query', 'Tailwind CSS', 'GoLang', 'GitLab CI/CD'],
  'https://www.apxor.com/',
  1
),
(
  'Infinite Cercle X',
  'Junior Developer',
  'September 2022',
  'April 2023',
  array[
    'Designed and implemented a scalable architecture for a full stack project using React JS and Java Spring Boot.',
    'Achieved a codebase reduction of 20% through effective refactoring and modularization strategies.'
  ],
  array['React JS', 'TypeScript', 'Context API', 'Material UI', 'Spring Boot', 'TanStack Libraries'],
  'https://cerclex.com/',
  2
);

insert into public.projects (name, description, tech_stack, url, featured, sort_order) values
(
  'New In-App Nudges Dashboard',
  array[
    'No-code dashboard helping consumer app developers create in-app nudges to enhance user engagement, conversions, and retention.',
    'Unified platform for Web, iOS, and Android app platforms.',
    'Developed features including configuration, simulator, and analysis modules.'
  ],
  array['React JS', 'TypeScript', 'Shadcn UI', 'TanStack Query', 'Tailwind CSS', 'Zustand'],
  'https://engage.apxor.com/',
  true,
  0
),
(
  'In-App Nudges (Legacy)',
  array[
    'Legacy dashboard for nudges, campaigns, and surveys.',
    'Unified platform supporting Web, iOS, and Android.',
    'Built configuration, simulator, and analysis features.'
  ],
  array['React JS', 'JavaScript', 'Material UI V4', 'React-Tracked', 'TanStack Query'],
  'https://Nudges.apxor.com/',
  false,
  1
),
(
  'EPR Dashboard',
  array[
    'Web2, Web3 and Blockchain integrated dashboard for Extended Producers Responsibility.',
    'Marketplace model addressing EPR liability of MNCs for waste management targets.',
    'Dashboards for brands, recyclers, and aggregators with deliveries, invoices, and reports.',
    'Integrated blockchain via Solidity network for transparency of waste recycling certificates.'
  ],
  array['React JS', 'TypeScript', 'Material UI V5', 'Context API', 'TanStack Charts'],
  'https://epr.cerclex.com/dashboard',
  false,
  2
);
