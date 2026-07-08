-- ============================================
-- Add CodaPet rebrand + @codapet/design-system to Selected Work.
-- Idempotent: inserts only when a row with the name doesn't already exist.
-- ============================================

insert into public.projects (name, description, tech_stack, url, featured, sort_order)
select
  'CodaPet Rebrand',
  array['Led the visual rebrand of CodaPet''s web applications — a modern, cohesive design language rolled out across the in-home pet care booking platform, serving owners and veterinarians nationwide.'],
  array['Next.js', 'TypeScript', 'Design System', 'Tailwind'],
  'https://www.codapet.com/',
  false,
  4
where not exists (
  select 1 from public.projects where name = 'CodaPet Rebrand'
);

insert into public.projects (name, description, tech_stack, url, featured, sort_order)
select
  '@codapet/design-system',
  array['A comprehensive React component library — built and published to npm as CodaPet''s shared design system, reused across every CodaPet app and built on Radix UI, Tailwind CSS and TypeScript.'],
  array['React', 'TypeScript', 'Radix UI', 'Tailwind'],
  'https://www.npmjs.com/package/@codapet/design-system',
  false,
  5
where not exists (
  select 1 from public.projects where name = '@codapet/design-system'
);
