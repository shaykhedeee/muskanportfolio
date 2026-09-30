# Screen-by-Screen Homepage Specification

All desktop screens are designed on a **1920×1080 master** and implemented as `min-height: 100svh`.

## Screen 01 — Hero

### Objective
Make the first screen immediately communicate “interior designer + strong taste + professional capability.”

### Layout
Use an asymmetrical 12-column layout.

Left 4–5 columns:
- small label: `INTERIORS THAT FEEL LIKE YOU`
- large editorial headline:
  `Designing spaces that feel like home.`
- short professional intro
- yellow `View My Work` CTA
- secondary `Download Resume`
- three small proof points: `3+ Years`, `Residential + Modular`, `2D → 3D → Execution`

Center/right:
- professional portrait integrated into an arch or organic paper cutout
- one secondary interior image behind/alongside portrait
- sunflower vase or yellow material accent
- one taped handwritten note
- subtle material-swatch stack

Micro elements:
- small rotating sun/sunflower emblem
- vertical “spaces / people / stories” microtype
- section index `01 / 07`

### Motion
- headline reveals by line
- portrait mask opens like an arched doorway
- one leaf/branch drifts 6–12px
- yellow underline draws itself
- handwritten note settles in with tiny rotation
- pointer hover creates very light image parallax

## Screen 02 — Selected Projects

### Objective
Showcase five projects while making the page feel cinematic.

### Layout
Left 3 columns:
- title `Selected Projects`
- vertical project list 01–05
- active project line is sunflower yellow
- brief category/location metadata

Right 9 columns:
- vertical stack/rail of five large project cards
- exactly **two cards visible at once** on 1920×1080
- cards approx. 55–60% viewport height but offset vertically so two remain visible
- active card slightly larger or brighter

Each card:
- large project image
- project number
- title
- category
- short one-line design premise
- `View Project →`

### Internal scroll behavior
When this section becomes active:
1. first downward gesture advances project rail to the next project state,
2. after the final internal state, the next gesture moves to Screen 03,
3. reverse behavior when scrolling upward.

Five project slots exist. Use real names only after content is supplied.

### Motion
- cards move vertically with soft spring-like ease
- active project image subtly scales from 1.02 to 1
- plant silhouette / drafting line in background moves at 0.1× scroll speed
- project number morph/slide

## Screen 03 — Explore All My Work

### Objective
Create three memorable category entrances.

Headline:
`Explore All My Work`

Subtitle:
`Different scales. One design language.`

Three vertical panels across the screen:
1. Residential
2. Commercial
3. Furniture

Each panel:
- large full-height interior/furniture image
- category title in large serif type
- short description
- project count only if verified
- circular arrow button

Interaction:
- default widths 33/33/33
- hovered/focused panel grows to ~46%
- neighbors compress smoothly
- image pans slightly toward pointer
- category label remains readable

On click, use shared-element/View Transition to the category page.

## Screen 04 — My Design Process

### Objective
Communicate practical working method, not generic agency steps.

Headline:
`From brief to buildable design.`

Five stages:
1. Discover — requirements, measurements, lifestyle, site constraints
2. Plan — layouts, circulation, storage, zoning
3. Design — materials, furniture, 3D visualisation
4. Coordinate — revisions, vendors, practical detailing, site support
5. Deliver — approved drawings, visuals and implementation guidance

### Composition
- process path travels horizontally across the screen like a drawn plan line
- left side contains a large arch with a floor-plan / site-measure image
- center stages use simple circles/icons
- right side has a small moodboard/material cluster

### Animation
- drafting line draws from step 1 to 5
- ruler ticks appear
- tiny furniture-plan icon travels along the path
- stage card expands when hovered/focused
- background sunlight shadow slowly shifts

## Screen 05 — My Style of Work

### Objective
Let employers assess output quality without opening full case studies.

Headline:
`My Style of Work`

Intro:
`A quick look at how I translate ideas into buildable, presentable design.`

Four large cards:
1. My 2D Style
2. My 3D Style
3. My Furniture Design
4. My Moodboard Design

### Card behavior
Default state:
- strong image
- title
- one-line descriptor

Hover/focus state:
- image shifts / zooms lightly
- translucent paper label slides up
- 2–3 evidence points appear
- CTA `Explore Examples →`

Suggested evidence:

2D:
- plans
- elevations
- dimension-conscious detailing

3D:
- SketchUp modelling
- photorealistic visuals
- material/lighting studies

Furniture:
- modular units
- custom storage
- ergonomic proportions

Moodboards:
- materials
- laminates
- palette + lighting direction

### Advanced interaction
Move the cursor across a card to reveal a partial “working layer” beneath the polished image: e.g. drawing → final render. Avoid a heavy before/after slider on all four cards; use it on only 2D/3D.

## Screen 06 — Experience + Capabilities

### Objective
Give recruiters the essential CV signal without making the homepage text-heavy.

Headline:
`Design experience grounded in real projects.`

Left half:
- concise experience timeline
- current role at Spacious Venture
- prior freelance / studio experience
- education

Right half:
- capabilities matrix

Capabilities:
- AutoCAD
- SketchUp
- 3D Modelling
- Photorealistic Visualization
- Space Planning
- Modular Kitchens & Wardrobes
- Furniture Design
- Material Selection
- Design Presentations
- Client / Vendor Coordination
- AI-Assisted Design Workflows

CTA:
`View / Download Resume`

### Animation
- timeline line draws vertically
- skill chips lightly rearrange into a grid
- a small plan sheet folds/unfolds visually

## Screen 07 — Contact / Final CTA

### Objective
End with a clear professional action.

Headline:
`Let's create something considered.`

Subtext:
`Available for interior design, visualization, project-based collaborations and stronger career opportunities.`

Display:
- pareekmuskan1999@gmail.com
- Bengaluru, Karnataka, India
- Hybrid · Remote · Bengaluru
- LinkedIn
- Resume

Visual:
- olive panel + warm white panel split
- one interior vignette with sunflowers
- subtle paper note: `Good spaces. Better everyday.`

CTA:
`Start a Conversation`

No invented phone number.
