-- ============================================
-- Add "AI Scheduling Agent" to Selected Work.
-- Idempotent: only inserts if a row with this name doesn't already exist.
-- ============================================

insert into public.projects (name, description, tech_stack, url, featured, sort_order)
select
  'AI Scheduling Agent',
  array['A conversational scheduling assistant built on the LLM agent-loop pattern — sign in with Google and it books calendar events by calling tools in a loop until the task is done, powered by Google Gemini.'],
  array['Next.js', 'TypeScript', 'Gemini', 'Auth.js'],
  'https://ai-scheduling-agent-three.vercel.app/',
  false,
  3
where not exists (
  select 1 from public.projects where name = 'AI Scheduling Agent'
);

-- Keep the URL current even if the row was already inserted by a prior run.
update public.projects
  set url = 'https://ai-scheduling-agent-three.vercel.app/'
  where name = 'AI Scheduling Agent';
