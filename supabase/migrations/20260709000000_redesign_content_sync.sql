-- ============================================
-- Sync experiences & projects content to the 2026 "premium dark" redesign.
-- Non-destructive: updates the three known rows in place (matched by stable
-- company_url / name). Removes GoLang and trims tags/copy to the design.
-- ============================================

-- Experiences ---------------------------------------------------------------

update public.experiences set
  company = 'CodaPet',
  role = 'Frontend Developer',
  start_date = 'Jan 2025',
  end_date = 'Present',
  description = array[
    'Redesigned all CodaPet web applications for a modern, cohesive experience across the platform.',
    'Built and published @codapet/design-system — a reusable npm package used across all CodaPet apps.',
    'Developed the frontend for CodaPet''s in-home pet euthanasia booking platform, serving owners and vets nationwide.'
  ],
  tech_stack = array['Next.js', 'TypeScript', 'Design System', 'Tailwind'],
  sort_order = 0
where company_url = 'https://www.codapet.com/';

update public.experiences set
  company = 'Apxor Pvt. Ltd.',
  role = 'SDE-I',
  start_date = 'May 2023',
  end_date = 'Dec 2024',
  description = array[
    'Full-stack developer on a large-scale project alongside SDK, backend, frontend, QA and product teams.',
    'Architected reusable React components and algorithms to optimize the dashboard for scale.'
  ],
  tech_stack = array['React', 'TypeScript', 'Zustand', 'GitLab CI/CD'],
  sort_order = 1
where company_url = 'https://www.apxor.com/';

update public.experiences set
  company = 'Infinite CercleX',
  role = 'Junior Developer',
  start_date = 'Sep 2022',
  end_date = 'Apr 2023',
  description = array[
    'Designed a scalable architecture for a full-stack project using React and Java Spring Boot.',
    'Achieved a 20% codebase reduction through refactoring and modularization.'
  ],
  tech_stack = array['React', 'Spring Boot', 'Material UI'],
  sort_order = 2
where company_url = 'https://cerclex.com/';

-- Projects ------------------------------------------------------------------

update public.projects set
  description = array['No-code dashboard helping consumer app developers create in-app nudges to boost engagement, conversion and retention — a unified platform across Web, iOS and Android with config, simulator and analysis modules.'],
  tech_stack = array['React', 'TypeScript', 'TanStack Query', 'Zustand', 'Tailwind'],
  url = 'https://engage.apxor.com/',
  featured = true,
  sort_order = 0
where name = 'New In-App Nudges Dashboard';

update public.projects set
  description = array['Legacy dashboard for nudges, campaigns and surveys across Web, iOS and Android with configuration, simulator and analysis features.'],
  tech_stack = array['React', 'Material UI v4', 'React-Tracked'],
  url = 'https://nudges.apxor.com/',
  featured = false,
  sort_order = 1
where name = 'In-App Nudges (Legacy)';

update public.projects set
  description = array['Web2/Web3 & blockchain-integrated dashboard for Extended Producer Responsibility, with brand, recycler and aggregator views and Solidity-backed certificates.'],
  tech_stack = array['React', 'Material UI v5', 'TanStack Charts'],
  url = 'https://epr.cerclex.com/dashboard',
  featured = false,
  sort_order = 2
where name = 'EPR Dashboard';
