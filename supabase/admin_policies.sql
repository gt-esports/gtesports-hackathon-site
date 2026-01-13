-- Policy to allow admins to update any application
-- This relies on the 'is_admin' field in the public.profiles table

drop policy if exists "Admins can update any application" on public.applications;

create policy "Admins can update any application"
  on public.applications for update
  using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid()
      and profiles.is_admin = true
    )
  );
