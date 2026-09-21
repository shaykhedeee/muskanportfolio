# Master Build Prompt

Copy this entire prompt into a capable coding agent after the repository is created.

---

Build a production-quality personal interior-design portfolio website for **Muskan Pareek**.

## Objective

Create an original, high-end editorial portfolio inspired by warm interior moodboards. The site must feel custom, art-directed, professional and interactive while remaining fast, accessible and recruiter-friendly.

The approved visual reference is `docs/design-reference.png` or the supplied reference image. Do not copy another portfolio literally. Preserve the design language: warm paper background, brown editorial type, olive green, bright sunflower yellow accents, arches, organic paper curves, selected handwritten notes, interior imagery and clean whitespace.

## Identity

Name: Muskan Pareek
Role: Interior Designer
Location: Bengaluru, Karnataka, India
Email: pareekmuskan01@gmail.com
Work preference: Hybrid · Remote · Bengaluru
Experience statement: 3+ years

Professional strengths:
- Residential Interior Design
- Space Planning
- AutoCAD
- SketchUp
- 3D Modelling
- Photorealistic 3D Visualization
- AI-Assisted Interior Design / Rendering
- Modular Furniture
- Kitchens and Wardrobes
- Furniture Design
- Material / Finish Selection
- Client, Vendor and Site Coordination
- Design Development and Execution Support

## Tech requirements

Use:
- Next.js 16.x App Router
- React 19.3+
- TypeScript strict
- Tailwind CSS 4
- GSAP + ScrollTrigger/Observer
- Lenis
- React View Transitions where supported
- Sanity / next-sanity after UI fixtures are stable
- Next/Image
- Vercel deployment compatibility

Do not use a generic component kit for the visual design.
Do not use WebGL/Three.js unless specifically requested later.

## Homepage architecture

Build seven major sections. On desktop every section is `100svh`, designed from a 1920×1080 master.

### 1. Hero

Asymmetrical editorial composition.

Left:
- `INTERIORS THAT FEEL LIKE YOU`
- H1: `Designing spaces that feel like home.`
- short professional description
- yellow `View My Work` button
- secondary `Download Resume`
- proof row: `3+ Years Experience`, `2D → 3D → Execution`, `Bengaluru · Hybrid / Remote`

Right/center:
- portrait
- supporting interior image
- arch / organic paper masks
- subtle sunflower or yellow object
- one small taped handwritten note
- restrained material swatches

Animate the hero through an arch reveal, line-by-line text entrance, a drawn yellow underline and very subtle plant/paper motion.

### 2. Selected Projects

Full screen.
Five projects total; exactly two large project cards visible simultaneously at 1920×1080.

Left: vertical 01–05 navigation.
Right: large vertically moving project rail.

Critical interaction:
- while this section is active, wheel/trackpad gestures first move through internal project states,
- only after the final state does the next gesture move to section 3,
- reverse scrolling reverses internal states first.

Each card links directly to `/projects/[slug]`.
Do not invent final project names; use clearly labeled fixture placeholders until real project content is supplied.

### 3. Explore All My Work

Full-screen 3-panel composition:
- Residential
- Commercial
- Furniture

Each panel contains strong imagery, title, short description and arrow.
On hover/focus, the active panel expands and neighboring panels compress.
Routes:
- `/work/residential`
- `/work/commercial`
- `/work/furniture`

Use a shared-element/View Transition into the category page where supported.

### 4. My Design Process

Full screen.
H2: `From brief to buildable design.`

Stages:
1. Discover
2. Plan
3. Design
4. Coordinate
5. Deliver

Create an animated architectural path across the screen. Draw SVG lines, show ruler ticks and move a tiny plan-view furniture icon along the path. Keep it tasteful.

### 5. My Style of Work

Full screen and optimized for recruiters.

Cards:
- My 2D Style
- My 3D Style
- My Furniture Design
- My Moodboard Design

Each starts as a clean image card. On hover/focus, reveal 2–3 concise proof points and an `Explore Examples` CTA.

2D: plans/elevations/dimension-conscious detailing.
3D: SketchUp + photorealistic visualization.
Furniture: modular/custom units, ergonomics and storage.
Moodboards: materials, laminates, lighting and palette.

For 2D and 3D cards, add a light working-layer reveal showing drawing/model → final result.

### 6. Experience + Capabilities

Full screen.
H2: `Design experience grounded in real projects.`

Include a compact timeline using verified data:
- Spacious Venture — May 2026–Present
- Freelance Interior Designer & 3D Visualizer — Aug 2025–Apr 2026 (mark start month as content to verify before production)
- Giftyaari — Founder and Owner — May 2025–Jul 2025
- 12 Square Interiors — Jun 2025–Sep 2025
- CubeDecors — Nov 2022–Aug 2024
- The Design Palette — May 2022–Jul 2022
- B.Sc. Interior Design — INIFD Institute — 2019–2022

Show concise skills matrix and `View Resume` CTA.

### 7. Contact

Full screen.
H2: `Let's create something considered.`

Show:
- pareekmuskan01@gmail.com
- Bengaluru, Karnataka, India
- Hybrid · Remote · Bengaluru
- LinkedIn link placeholder until supplied
- Resume button

No invented phone number.

## Scroll behavior

Desktop: one deliberate wheel/trackpad gesture = one main section.
Use a stateful SectionNavigator.

Implement with native sections + Lenis programmatic scroll + GSAP Observer/ScrollTrigger for intent detection.

Rules:
- ignore micro trackpad noise,
- lock additional input during a transition,
- never skip two sections from one momentum burst,
- maintain correct state when navigating backward,
- update a 7-step progress indicator,
- support anchor/deep links,
- do not prevent browser navigation.

Mobile <= 767px:
- native touch scrolling,
- scroll snap proximity only,
- sections may exceed 100svh,
- project cards can become swipe/stack layout,
- no forced wheel-lock logic.

Reduced motion:
- remove smooth-scroll lock and parallax,
- show all content with simple fades or no animation.

## Visual system

Colors:
- paper #F7F2E8
- paper-white #FFFDF7
- brown #4B342B
- olive #66713E
- deep olive #454D2C
- sunflower #FFC928
- warm stone #D8CDBB
- charcoal #1C1A17

Typography:
- Instrument Serif for display
- Manrope for body/UI
- Caveat for occasional handwritten annotations

Keep yellow to approximately 3–6% of the visual surface.

## Motion motifs

Use only a restrained set:
- arch image reveal
- drawn yellow underline
- paper-note settle
- leaf sway
- material swatch spread
- floor-plan line drawing
- tiny chair/sofa icon moving on the process path
- project image crop/scale shift
- sunflower/sun emblem slow rotation
- sunlight-shadow drift

Avoid cursor trails, constant floating, huge blur effects or meaningless animation.

## Project routes

Create `/projects/[slug]` with:
1. hero
2. brief
3. planning / 2D
4. moodboard
5. 3D development
6. furniture/modular details
7. design decisions
8. final gallery
9. outcome
10. next project

Project pages use normal smooth scroll, not forced full-screen wheel snapping.

## Content rules

Never invent:
- project/client names
- awards
- client testimonials
- phone numbers
- project counts
- completion percentages

Use fixture placeholders clearly labeled until real content is supplied.

## Accessibility

- semantic sections and headings
- full keyboard support
- visible focus states
- no hover-only essential content
- alt text
- reduced motion
- skip link
- WCAG AA contrast

Keyboard section navigation:
- ArrowDown/PageDown = next
- ArrowUp/PageUp = previous
- Home = hero
- End = contact

Do not hijack keys inside forms or interactive controls.

## Performance

Target:
- LCP <= 2.5s
- INP <= 200ms
- CLS <= 0.1

Use Next/Image.
Preload only the hero LCP asset.
Lazy-load the rest.
Avoid loading all five full-resolution project images immediately.

## Deliverables

1. complete responsive implementation
2. reusable section components
3. `SectionNavigator`
4. local fixture content
5. project/category routes
6. accessibility support
7. Playwright tests for navigation behavior
8. metadata / sitemap / robots
9. `.env.example`
10. deployment-ready Vercel setup

Build the visual shell first. Do not connect Sanity until the homepage and project template are visually approved.

---
