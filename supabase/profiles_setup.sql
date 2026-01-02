-- Create a table for public profiles link to auth.users
create table if not exists public.profiles (
  id uuid not null references auth.users on delete cascade,
  email text,
  first_name text,
  last_name text,
  full_name text,
  college text,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),

  primary key (id)
);

-- Create a table for applications linked to profiles
create table if not exists public.applications (
  id uuid not null default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending', 'accepted', 'rejected', 'waitlisted')),
  answers jsonb not null default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),

  primary key (id)
);

-- Enable Row Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.applications enable row level security;

-- Create policies for profiles
drop policy if exists "Public profiles are viewable by everyone." on public.profiles;
create policy "Public profiles are viewable by everyone."
  on public.profiles for select
  using ( true );

drop policy if exists "Users can insert their own profile." on public.profiles;
create policy "Users can insert their own profile."
  on public.profiles for insert
  with check ( auth.uid() = id );

drop policy if exists "Users can update own profile." on public.profiles;
create policy "Users can update own profile."
  on public.profiles for update
  using ( auth.uid() = id );

-- Create policies for applications
drop policy if exists "Users can view their own application." on public.applications;
create policy "Users can view their own application."
  on public.applications for select
  using ( auth.uid() = user_id );

drop policy if exists "Users can insert their own application." on public.applications;
create policy "Users can insert their own application."
  on public.applications for insert
  with check ( auth.uid() = user_id );

drop policy if exists "Users can update their own application." on public.applications;
create policy "Users can update their own application."
  on public.applications for update
  using ( auth.uid() = user_id );

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, college)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'college'
  );
  return new;
end;
$$;

-- Trigger to call the function on new user creation
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Extension for auto-updating updated_at
create extension if not exists moddatetime schema extensions;

-- Trigger to update updated_at on profiles update
create trigger handle_updated_at before update on public.profiles
  for each row execute procedure moddatetime (updated_at);

-- Trigger to update updated_at on applications update
create trigger handle_updated_at before update on public.applications
  for each row execute procedure moddatetime (updated_at);
