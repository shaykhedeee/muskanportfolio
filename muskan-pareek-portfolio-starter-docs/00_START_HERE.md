# Muskan Pareek — Interior Design Portfolio Website

## North Star

Build a polished, editorial, employer-friendly interior-design portfolio for **Muskan Pareek** that feels like a living design moodboard rather than a conventional boxed website.

The site should combine:
- warm off-white editorial space,
- sunflower yellow accents,
- muted olive/sage green,
- cocoa-brown typography,
- organic arches and soft paper-like curves,
- professional interior photography/renders,
- subtle handwritten annotations,
- refined motion inspired by drafting, materials, plants, furniture, sunlight and moodboards.

The approved homepage direction is saved at:
`references/approved-homepage-reference.png`

## Core interaction rule

On desktop, **one deliberate wheel/trackpad gesture advances one full-screen section**. Each major homepage section is `100svh` and designed from a 1920×1080 master canvas. The movement should feel like a stop-motion editorial presentation, not like a long ordinary webpage.

The **Selected Projects** section is the one exception: while that section is active, the same wheel gesture first advances through its internal vertical project rail. Five projects exist, but only two project cards are visible at once. After the internal sequence is exhausted, the next gesture advances to the next full-screen section.

On touch devices and when `prefers-reduced-motion` is enabled, use a less restrictive native-scroll fallback.

## Primary audience

1. Recruiters and hiring managers who need to assess Muskan’s quality quickly.
2. Interior design / architecture studios considering Muskan for a role.
3. Residential clients looking for design or visualization support.
4. Collaborators who need drafting, SketchUp, visualization, modular design, furniture or presentation support.

## Homepage section order

1. Hero — 100svh
2. Selected Projects — 100svh with nested project navigation
3. Explore All My Work — 100svh
4. My Design Process — 100svh
5. My Style of Work — 100svh
6. Experience + Capabilities — 100svh
7. Contact / Final CTA — 100svh

## Primary routes

- `/`
- `/projects/[slug]`
- `/work/residential`
- `/work/commercial`
- `/work/furniture`
- `/about`
- `/resume` or downloadable PDF
- `/studio` if Sanity Studio is embedded

## Recommended production stack

- Next.js 16.x App Router
- React 19.3+
- TypeScript
- Tailwind CSS 4
- GSAP + ScrollTrigger/Observer for section choreography
- Lenis for smooth native scrolling and controlled scroll-to behavior
- React View Transitions for project/category route transitions where supported
- Sanity + `next-sanity` for editable projects/content
- Vercel for deployment, preview URLs, analytics and performance monitoring
- Resend for contact-form email delivery
- Cloudflare Turnstile for spam protection
- Playwright + axe for end-to-end/accessibility testing

## Do not do

- Do not turn the site into a generic portfolio template.
- Do not use heavy glassmorphism, neon gradients, tech-dashboard styling, or excessive 3D/WebGL.
- Do not invent project names, client names, testimonials, project counts or awards.
- Do not make the sunflower theme literal everywhere. Yellow is an accent, not the background of every section.
- Do not let animation prevent keyboard navigation, deep links, mobile browsing or reduced-motion access.
- Do not sacrifice image quality, typography or whitespace just to fit more information.

## Build sequence

Read these files in order:

1. `01_PRODUCT_BRIEF.md`
2. `02_SITE_MAP_AND_ROUTES.md`
3. `03_VISUAL_DESIGN_SYSTEM.md`
4. `04_SCREEN_BY_SCREEN_SPEC.md`
5. `05_MOTION_AND_SCROLL_SPEC.md`
6. `06_CONTENT_AND_COPY.md`
7. `07_PROJECT_PAGE_TEMPLATE.md`
8. `08_CMS_CONTENT_MODEL.md`
9. `09_TECH_STACK_AND_ARCHITECTURE.md`
10. `10_PROJECT_STRUCTURE.md`
11. `11_IMPLEMENTATION_ROADMAP.md`
12. `12_QA_PERFORMANCE_ACCESSIBILITY.md`
13. `13_DEPLOYMENT_AND_OPERATIONS.md`
14. `14_MASTER_BUILD_PROMPT.md`
15. `15_AGENT_PROMPTS.md`
16. `16_ASSET_CHECKLIST.md`
17. `17_PROFILE_SOURCE_CONTENT.md`
