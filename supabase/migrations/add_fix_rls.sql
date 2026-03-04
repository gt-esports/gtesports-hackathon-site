-- Migration: Add is_admin column and fix RLS policies
-- Run this in the Supabase SQL Editor to apply to your live database.

-- 1. Restrict profiles SELECT: users see their own row, admins see all
drop policy if exists "Public profiles are viewable by everyone." on public.profiles;
drop policy if exists "Users can view own profile or admins can view all." on public.profiles;
create policy "Users can view own profile or admins can view all."
  on public.profiles for select
  using (
    auth.uid() = id
    or exists (
      select 1 from public.profiles as p
      where p.id = auth.uid()
      and p.is_admin = true
    )
  );

-- 2. Prevent users from changing their own application status
--    Users can still update their answers, but the status column must stay the same.
drop policy if exists "Users can update their own application." on public.applications;
create policy "Users can update their own application."
  on public.applications for update
  using ( auth.uid() = user_id )
  with check (
    auth.uid() = user_id
    and status = (select status from public.applications where id = applications.id)
  );
