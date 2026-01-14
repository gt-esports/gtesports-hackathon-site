-- Create a storage bucket for resumes
insert into storage.buckets (id, name, public)
values ('resumes', 'resumes', false)
on conflict (id) do nothing;

-- Set up access policies for the resumes bucket

-- Allow authenticated users to upload files
create policy "Authenticated users can upload resumes"
on storage.objects for insert
with check (
  bucket_id = 'resumes' and
  auth.role() = 'authenticated'
);

-- Allow users to view their own uploaded files
create policy "Users can view their own resumes"
on storage.objects for select
using (
  bucket_id = 'resumes' and
  auth.uid() = owner
);

-- Allow admins to view all resumes
create policy "Admins can view all resumes"
on storage.objects for select
using (
  bucket_id = 'resumes' and
  exists (
    select 1 from public.profiles
    where profiles.id = auth.uid()
    and profiles.is_admin = true
  )
);
