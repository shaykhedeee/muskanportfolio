# Implementation Roadmap

## Phase 0 — Content and assets

Before coding final visuals, collect:
- approved portrait
- 5 featured projects
- 2D samples
- 3D samples
- furniture samples
- moodboards
- CV PDF
- LinkedIn URL
- verified project names, locations and roles

Create compressed web derivatives while keeping originals archived.

## Phase 1 — Static visual shell

Build only:
- global tokens
- header
- seven 100svh sections
- typography
- grid
- static imagery
- responsive layouts

No complex scrolling yet.

Acceptance:
- 1920×1080 screenshots visually match the design direction
- laptop 1440 and mobile layouts remain coherent

## Phase 2 — Homepage motion system

Build:
- SectionNavigator
- Lenis integration
- GSAP Observer
- progress rail
- keyboard navigation
- reduced motion behavior

Acceptance:
- one deliberate wheel action advances one screen
- trackpad momentum does not skip screens
- keyboard works
- browser back/forward does not break state

## Phase 3 — Selected Projects internal interaction

Build five-project internal rail.

Acceptance:
- two visible at 1920×1080
- internal states advance before leaving the section
- clicking opens correct project route
- reverse scroll works
- focus order remains logical

## Phase 4 — Category and project routes

Build:
- Residential
- Commercial
- Furniture
- Project detail template
- shared image route transitions

Acceptance:
- deep links work directly
- refresh on any project route works
- breadcrumbs and metadata are correct

## Phase 5 — My Style of Work

Build hover/focus reveals for:
- 2D
- 3D
- Furniture
- Moodboard

Acceptance:
- recruiter understands the artifact type in <5 seconds
- hover is not required on touch
- cards remain keyboard accessible

## Phase 6 — Experience + resume

Add concise timeline and capabilities.

Acceptance:
- current role is visible
- resume one click away
- no invented metrics

## Phase 7 — CMS

Wire Sanity after layout/data contracts are stable.

Acceptance:
- project can be added without code change
- homepage featured order editable
- alt text required
- draft project not public

## Phase 8 — Contact + operations

Add:
- contact form
- Resend
- Turnstile
- analytics events
- Speed Insights

## Phase 9 — QA

Run:
- Playwright desktop/mobile
- axe
- Lighthouse
- real-device Safari/Chrome testing
- slow-network image test
- keyboard-only test

## Phase 10 — Launch

- connect domain
- verify HTTPS
- sitemap / robots
- Search Console
- final OG image
- production analytics
- 404/500 pages
- launch checklist
