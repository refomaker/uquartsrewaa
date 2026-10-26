# Rewaa | رواء — UQU Arts archive

A bilingual art archive and exhibition site for Rewaa, organized by the Designs & Arts Club at Umm Al-Qura University. The club is the organizer; Rewaa is the exhibition identity. The current nine sample cards (`DEMO-0001` through `DEMO-0009`) are clearly labeled demonstrations, not student submissions. The site displays Umm Al-Qura University and Designs & Arts Club logo assets; formal approval to use the University logo has been obtained. Demo records use `DEMO-*` IDs so they cannot be mistaken for, or collide with, real sequence-generated `RW-*` IDs.

## Local preview

1. Install Node.js 20+ and pnpm.
2. Run `pnpm install` and `pnpm dev`, then open http://localhost:3000.
3. Without Supabase credentials, the public site uses nine labeled demonstration records across three exhibition tracks. Admin features and persistent storage require Supabase setup.

## Supabase setup

1. Create a Supabase project. The free tier is sufficient for initial development; storage and bandwidth usage may incur costs as the archive grows. Review current Supabase pricing before launch.
2. In the SQL editor, apply `supabase/migrations/202610230001_initial_schema.sql`.
3. In Authentication settings, disable public signups after making the first administrator. Create the club administrator through the Supabase Dashboard's **Authentication → Users → Add user** flow.
4. In the SQL editor, authorize that user by ID: `insert into public.admin_users(user_id) values ('AUTH_USER_UUID');`. Do not expose service keys in browser code or commit them.
5. Copy `.env.example` to `.env.local`. Set the Supabase project URL, public anon key, service role key, production domain once verified. The service role key is server-only. Never paste it into chat.
6. Restart `pnpm dev`. Sign in at `/admin/login`. Only IDs in `admin_users` can manage the archive; API handlers verify the signed-in user and allowlist membership before using the server-only service key. Database RLS independently restricts public reads to published artworks.

The migration creates a sequence-backed ID allocator. New IDs are permanent, unique, and are never assigned to another artwork when a record is archived. The first generated ID is `RW-0001`; gaps are acceptable. Do not reset the sequence or recycle IDs. For an additional administrator, create the auth account and insert its UUID in `admin_users` using the Dashboard SQL editor.

## Content and URLs

Artwork pages use `/rewaa/art/RW-0042` routes. The former `/art/[id]` route redirects while preserving artwork IDs and query parameters. The Rewaa story is at `/rewaa`; `/about` redirects there, and the club page remains at `/club`. Add/edit/publish, image uploads (JPG/PNG/WebP up to 10 MB), archive status, preview, and CSV export live in `/admin`. Archive is a status change; records are not deleted. CSV export is unavailable until `PRODUCTION_SITE_URL` is set to the chosen canonical domain. This setting is configuration only; it does not prove the domain or DNS is live. Verify deployment and DNS before printing QR codes. Unavailable and invalid artwork IDs get a useful 404 page.

The public UI includes Arabic/English controls, RTL/LTR switching, responsive styling, keyword search, exhibition-track filtering, and light/dark theme. Individual artwork pages and About pages follow the selected language and display the other language as secondary content.

## Checks and deployment

Run `pnpm typecheck`, `pnpm lint`, `pnpm test`, and `pnpm build`. Vitest checks ID allocation behavior. Configure the same environment variables in Vercel (service key only in server environment), deploy, apply the migration to the production Supabase project, verify the site, then configure DNS for the selected custom domain. No remote database or deployment has been configured from this workspace.

## Troubleshooting

- Public page uses samples: Supabase URL or service role key is absent. Check `.env.local`, then restart Next.js.
- Admin sign-in fails: verify the auth user exists and password login is enabled.
- Signed in but denied: add the user's Auth UUID to `public.admin_users`.
- Upload fails: confirm the migration created the public `artworks` Storage bucket and the image is at most 10 MB in JPG, PNG, or WebP format.
- Magazine export reports a missing production URL: configure `PRODUCTION_SITE_URL` with the approved canonical origin; it is not a DNS check.
