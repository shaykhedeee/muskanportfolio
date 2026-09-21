# Deployment and Operations

## Hosting recommendation

Use **Vercel** for the Next.js frontend.

Why it fits this site:
- native Next.js support
- preview deployment per branch/PR
- image optimization support
- easy custom domain and HTTPS
- integrated analytics and speed monitoring

## CMS

Use Sanity for project/media content.

Recommended setup:
- one production dataset
- optionally one development dataset later
- keep write tokens server-side only
- public frontend reads published content

## Domain

Preferred naming pattern:
- `muskanpareek.com`
- `muskanpareek.design`
- `muskanpareek.in`

Check actual availability before purchase.

## Email / form

Contact form:
- Resend
- sender from verified website domain
- deliver to `pareekmuskan01@gmail.com`
- use Turnstile to reduce spam

## Environment variables

Example:

```bash
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
RESEND_API_KEY=
CONTACT_TO_EMAIL=pareekmuskan01@gmail.com
TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
```

Never commit secrets.

## Vercel environments

### Preview
- every pull request
- draft/noindex metadata if preview URL is public
- preview Sanity drafts only when authenticated

### Production
- `main`
- custom domain
- analytics enabled
- Speed Insights enabled

## Analytics

Track only useful events:
- project open
- category open
- resume download
- contact CTA
- LinkedIn click
- style showcase open

Do not add invasive trackers simply because they exist.

## SEO launch tasks

- canonical production URL
- sitemap
- robots
- page titles
- meta descriptions
- OG images
- Person/ProfilePage structured data
- project structured breadcrumbs
- favicon / web manifest
- Search Console verification

## Security

- keep Next.js on a supported patched release
- update dependencies monthly or via Dependabot/Renovate
- rate-limit form endpoint
- Turnstile verification server-side
- sanitize rich content rendering
- no private project files in public assets

## Backups

- GitHub for code
- Sanity dataset export before major schema migrations
- keep original project visuals separately from optimized web copies
- keep resume master file outside the repo as well

## Monitoring

At minimum:
- Vercel deployment health
- Web Analytics
- Speed Insights
- form delivery logs

A full error-monitoring service is optional for this portfolio and can be added only if needed.
