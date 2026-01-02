-- Create applications table if it doesn't exist
create table if not exists public.applications (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  status text default 'pending' check (status in ('pending', 'accepted', 'rejected', 'waitlisted')),
  answers jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable RLS
alter table public.applications enable row level security;

-- Policy: Users can view their own application
create policy "Users can view their own application"
  on public.applications for select
  using (auth.uid() = user_id);

-- Policy: Users can insert their own application
create policy "Users can insert their own application"
  on public.applications for insert
  with check (auth.uid() = user_id);

-- Policy: Users can update their own application (optional, if allowing edits)
create policy "Users can update their own application"
  on public.applications for update
  using (auth.uid() = user_id);
