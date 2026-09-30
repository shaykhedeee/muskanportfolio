# Sitemap and Route Architecture

## Global navigation

Desktop header:
- Muskan Pareek wordmark / MP monogram
- Work
- About
- Process
- Resume
- Contact
- primary CTA: `Let's Talk`

Keep the top navigation compact so the hero remains editorial.

## Home `/`

### Section 01 — Hero
Purpose: identity + positioning + visual signature.

Primary CTA: `View My Work`
Secondary CTA: `Download Resume`

### Section 02 — Selected Projects
Purpose: strongest case studies.

Five projects in a vertically controlled internal rail.
Only two large project cards are visible simultaneously on desktop.
Clicking a project opens `/projects/[slug]` directly.

### Section 03 — Explore All My Work
Three large category portals:
- Residential → `/work/residential`
- Commercial → `/work/commercial`
- Furniture → `/work/furniture`

### Section 04 — My Design Process
Five stages:
1. Discover
2. Plan / Concept
3. Design
4. Execute / Coordinate
5. Reveal / Deliver

### Section 05 — My Style of Work
Employer-first capability preview:
- My 2D Style
- My 3D Style
- My Furniture Design
- My Moodboard Design

Each tile uses an image and a hover/focus reveal explaining what the artifact demonstrates.

### Section 06 — Experience + Capabilities
A concise career timeline plus software/capability clusters.

Recommended visible items:
- 3+ years experience
- current: Spacious Venture
- Residential Interiors
- AutoCAD
- SketchUp
- 3D Visualization
- Modular Design
- AI-Assisted Workflows

CTA: `View Resume`

### Section 07 — Contact / Final CTA
Copy: `Let's create spaces that feel considered, useful and alive.`

Show:
- pareekmuskan1999@gmail.com
- Bengaluru, Karnataka, India
- Hybrid · Remote · Bengaluru
- LinkedIn button
- Download Resume

## Category pages

### `/work/residential`
Grid or editorial list of all residential projects.
Filters may include:
- Living
- Bedroom
- Kitchen
- Wardrobe / Storage
- Pooja
- Study
- Full Home

### `/work/commercial`
Commercial, retail, hospitality, boutique, office, café projects.

### `/work/furniture`
Custom furniture, modular units, storage, TV units, crockery, pooja, dressers, studies, beds and special pieces.

## Project route `/projects/[slug]`

Each project is a proper case study, not a lightbox.

Recommended sequence:
1. Hero image + project facts
2. Brief / problem
3. Space plan / 2D
4. Concept / moodboard
5. 3D design development
6. Furniture / modular details
7. Material palette
8. Final visualization / photography
9. Key design decisions
10. Next project

## About `/about`

Professional bio, design philosophy, experience timeline, capabilities and CV link.

## Resume

Preferred:
- `/resume` with a simple HTML version for accessibility/SEO
- prominent `Download PDF` button

Optional direct file:
- `/muskan-pareek-resume.pdf`
