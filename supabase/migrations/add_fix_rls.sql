-- Migration: Fix RLS policies
-- Run this in the Supabase SQL Editor to apply to your live database.

-- 1. Create/replace security definer function to check admin status
--    This bypasses RLS so the profiles SELECT policy doesn't infinitely recurse.
create or replace function public.is_admin()
returns boolean
language plpgsql
security definer set search_path = public
as $$
begin
  return exists (
    select 1 from public.profiles
    where id = auth.uid()
    and is_admin = true
  );
end;
$$;

-- 2. Restrict profiles SELECT: users see their own row, admins see all
drop policy if exists "Public profiles are viewable by everyone." on public.profiles;
drop policy if exists "Users can view own profile or admins can view all." on public.profiles;
create policy "Users can view own profile or admins can view all."
  on public.profiles for select
  using (
    auth.uid() = id
    or public.is_admin()
  );

-- 3. Prevent users from changing their own application status
--    Users can still update their answers, but the status column must stay the same.
drop policy if exists "Users can update their own application." on public.applications;
create policy "Users can update their own application."
  on public.applications for update
  using ( auth.uid() = user_id )
  with check (
    auth.uid() = user_id
    and status = (select status from public.applications where id = applications.id)
  );
