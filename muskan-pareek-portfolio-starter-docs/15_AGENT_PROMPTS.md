# Staged Coding-Agent Prompts

Use these prompts in order rather than asking an agent to build everything in one uncontrolled pass.

## Prompt 1 — Repository and static design shell

> Read all files in `/docs` before coding. Build the Next.js/TypeScript/Tailwind project structure and implement the seven homepage sections as static responsive layouts using local fixture data. Match the approved visual reference and `03_VISUAL_DESIGN_SYSTEM.md`. Do not implement scroll hijacking or CMS yet. Prioritize 1920×1080 composition, then 1440 laptop, then mobile. Use semantic HTML and Next/Image. When complete, report the component tree and any places where real assets are still required.

## Prompt 2 — Section navigation system

> Implement the desktop full-screen section navigator exactly as defined in `05_MOTION_AND_SCROLL_SPEC.md`. Use Lenis for programmatic smooth scrolling and GSAP Observer/ScrollTrigger for wheel intent. One deliberate gesture must advance one major section. Add 7-step progress navigation, keyboard controls, hash state and reduced-motion fallback. Do not add decorative animations yet. Add Playwright tests that prove rapid wheel momentum cannot skip sections.

## Prompt 3 — Selected Projects nested rail

> Implement the Selected Projects internal project state machine. There are five fixture projects and two cards visible at once on a 1920×1080 viewport. While this section is active, scroll down/up must advance/reverse internal project states before the site leaves the section. Preserve keyboard and touch fallbacks. Project cards route to `/projects/[slug]`. Add e2e tests for forward and reverse behavior.

## Prompt 4 — Signature motion

> Add the approved motion language only: arch reveal, yellow underline draw, paper note settle, leaf sway, selected-project card shift, category panel expansion, SVG drafting process line, subtle swatch spread, and restrained sun emblem rotation. Keep transforms/opacity GPU-friendly. Respect reduced motion. Do not add cursor trails, WebGL or constant ambient movement.

## Prompt 5 — Category and project routes

> Build `/work/residential`, `/work/commercial`, `/work/furniture`, and `/projects/[slug]` using the specification in `07_PROJECT_PAGE_TEMPLATE.md`. Use local fixture data, dynamic metadata and accessible image galleries. Project pages use normal vertical scrolling, not homepage section locking. Add React View Transition enhancement with fallback.

## Prompt 6 — Employer-first Style of Work + Experience

> Finish the `My Style of Work` and `Experience + Capabilities` sections using the verified professional content in `17_PROFILE_SOURCE_CONTENT.md`. Ensure each style card is useful without hover and richer with hover/focus. Make the resume CTA prominent but not visually louder than the project work. Do not invent clients, testimonials, metrics or awards.

## Prompt 7 — Sanity CMS

> Replace local project/experience/style fixtures with Sanity documents based on `08_CMS_CONTENT_MODEL.md`. Keep TypeScript types strict. Add draft preview only if it does not complicate the public build. Require alt text and unique project slugs. Make homepage featured-project ordering editable. Keep the existing UI unchanged.

## Prompt 8 — Contact, analytics and deployment

> Add the contact form using Zod validation, Resend and Turnstile. Add Vercel Web Analytics and Speed Insights. Track project opens, category opens, resume downloads, contact CTA, LinkedIn click and style showcase opens. Implement sitemap, robots, Open Graph metadata and structured data. Do not expose secrets.

## Prompt 9 — Final QA

> Run the full Playwright suite, axe checks and performance review at 1920×1080, 1440×900, 1366×768, 1024×768, 768×1024, 430×932 and 390×844. Fix scroll traps, layout overflow, CLS, image loading, focus order and motion issues. Verify reduced motion and native mobile scrolling. Do not change the approved visual system unless a change is required for accessibility or performance; document any such change.
