-- ============================================
-- Initial schema: tables, RLS, storage policies
-- ============================================

-- 1. Create tables
-- ============================================

create table if not exists public.experiences (
  id uuid default gen_random_uuid() primary key,
  company text not null,
  role text not null,
  start_date text not null,
  end_date text not null,
  description text[] not null default '{}',
  tech_stack text[] not null default '{}',
  company_url text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  description text[] not null default '{}',
  tech_stack text[] not null default '{}',
  url text,
  featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.travel_photos (
  id uuid default gen_random_uuid() primary key,
  image_path text not null,
  location text not null,
  tags text[] not null default '{}',
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- 2. Enable Row Level Security
-- ============================================

alter table public.experiences enable row level security;
alter table public.projects enable row level security;
alter table public.travel_photos enable row level security;

-- 3. RLS Policies — Public READ for everyone
-- ============================================

create policy "Public can read experiences"
  on public.experiences for select
  using (true);

create policy "Public can read projects"
  on public.projects for select
  using (true);

create policy "Public can read travel photos"
  on public.travel_photos for select
  using (true);

-- 4. RLS Policies — Authenticated users can INSERT/UPDATE/DELETE
-- ============================================

create policy "Authenticated users can insert experiences"
  on public.experiences for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update experiences"
  on public.experiences for update
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated users can delete experiences"
  on public.experiences for delete
  to authenticated
  using (true);

create policy "Authenticated users can insert projects"
  on public.projects for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update projects"
  on public.projects for update
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated users can delete projects"
  on public.projects for delete
  to authenticated
  using (true);

create policy "Authenticated users can insert travel photos"
  on public.travel_photos for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update travel photos"
  on public.travel_photos for update
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated users can delete travel photos"
  on public.travel_photos for delete
  to authenticated
  using (true);

-- 5. Storage policies for travel-photos bucket
-- ============================================

create policy "Public can read travel photos storage"
  on storage.objects for select
  using (bucket_id = 'travel-photos');

create policy "Authenticated users can upload travel photos"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'travel-photos');

create policy "Authenticated users can delete travel photos"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'travel-photos');
