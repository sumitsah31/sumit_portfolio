-- ============================================
-- Contact form submissions
-- ============================================

-- 1. Create table
-- ============================================

create table if not exists public.contact_messages (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- 2. Enable Row Level Security
-- ============================================

alter table public.contact_messages enable row level security;

-- 3. RLS Policies
-- ============================================

-- Anyone (anonymous visitors) can submit a message
create policy "Anyone can insert contact messages"
  on public.contact_messages for insert
  to anon, authenticated
  with check (true);

-- Only authenticated admins can read submissions
create policy "Authenticated users can read contact messages"
  on public.contact_messages for select
  to authenticated
  using (true);

-- Only authenticated admins can delete submissions
create policy "Authenticated users can delete contact messages"
  on public.contact_messages for delete
  to authenticated
  using (true);
