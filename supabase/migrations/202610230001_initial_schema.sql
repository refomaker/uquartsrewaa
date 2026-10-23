-- Rewaa art archive. IDs are allocated by a sequence and never reused.
create extension if not exists pgcrypto;
create sequence if not exists public.artwork_id_seq start 1;
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
create table if not exists public.artworks (
  id text primary key default ('RW-' || lpad(nextval('public.artwork_id_seq')::text, 4, '0')),
  title_ar text not null check (length(title_ar) between 1 and 180),
  title_en text not null check (length(title_en) between 1 and 180),
  artist_ar text not null check (length(artist_ar) between 1 and 180),
  artist_en text not null check (length(artist_en) between 1 and 180),
  description_ar text not null default '', description_en text not null default '',
  image_url text not null, thumbnail_url text,
  category text not null, medium text not null, year integer check (year is null or year between 1000 and 9999),
  dimensions text, keywords_ar text[] not null default '{}', keywords_en text[] not null default '{}',
  status text not null default 'draft' check (status in ('draft','published','archived')),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create index if not exists artworks_public_order on public.artworks(status,id);
create index if not exists artworks_category on public.artworks(category);
create index if not exists artworks_medium on public.artworks(medium);
create index if not exists artworks_search on public.artworks using gin(to_tsvector('simple',title_ar||' '||title_en||' '||artist_ar||' '||artist_en||' '||description_ar||' '||description_en));
alter table public.admin_users enable row level security;
alter table public.artworks enable row level security;
create policy "public reads published artwork" on public.artworks for select to anon,authenticated using (status='published');
create policy "admins read all artwork" on public.artworks for select to authenticated using (exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
create policy "admins create artwork" on public.artworks for insert to authenticated with check (exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
create policy "admins update artwork" on public.artworks for update to authenticated using (exists(select 1 from public.admin_users a where a.user_id=auth.uid())) with check (exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
create policy "admins read own admin row" on public.admin_users for select to authenticated using (user_id=auth.uid());
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('artworks','artworks',true,10485760,array['image/jpeg','image/png','image/webp'])
on conflict(id) do update set public=true,file_size_limit=10485760,allowed_mime_types=array['image/jpeg','image/png','image/webp'];
create policy "public reads artwork images" on storage.objects for select to anon,authenticated using (bucket_id='artworks');
create policy "admins upload artwork images" on storage.objects for insert to authenticated with check (bucket_id='artworks' and exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
create policy "admins update artwork images" on storage.objects for update to authenticated using (bucket_id='artworks' and exists(select 1 from public.admin_users a where a.user_id=auth.uid())) with check (bucket_id='artworks' and exists(select 1 from public.admin_users a where a.user_id=auth.uid()));
