# Visual Design System

## Direction

Sunflower-inspired, but sophisticated.

The design language is **warm editorial minimalism + interior moodboard composition**.

## Color tokens

### Core
- `paper`: `#F7F2E8` — warm off-white background
- `paper-2`: `#FFFDF7` — elevated cards / clean areas
- `brown`: `#4B342B` — primary display typography
- `brown-soft`: `#6D5144` — secondary type
- `olive`: `#66713E` — major supporting accent
- `olive-deep`: `#454D2C` — dark panel / footer / contrast
- `sunflower`: `#FFC928` — primary interactive accent
- `sunflower-soft`: `#F6D86B` — soft highlight
- `stone`: `#D8CDBB` — borders / surfaces
- `charcoal`: `#1C1A17` — critical body text and dark buttons

### Usage ratio
- 65–75% warm white / paper
- 10–15% interior imagery
- 8–12% olive / natural green
- 3–6% bright sunflower yellow
- brown used primarily for typography and fine UI lines

Yellow must remain special. Do not create giant yellow backgrounds except for a single controlled CTA blob/badge.

## Typography

Recommended open-source stack:
- Display serif: **Cormorant Garamond** or **Instrument Serif**
- UI / body: **Manrope**
- Handwritten annotation: **Caveat**

Recommended final pairing:
- Headings: Instrument Serif
- Body/UI: Manrope
- Notes: Caveat

Desktop sizing baseline:
- Hero H1: clamp(72px, 6.1vw, 118px)
- Section H2: clamp(56px, 4.2vw, 84px)
- Card H3: 26–36px
- Body: 16–18px
- Micro-label: 11–13px, uppercase, 0.14em tracking

Do not use more than three font families.

## Grid

Master artboard: `1920×1080`.

Desktop:
- 12-column grid
- max content width: 1760px
- outer gutters: 64–80px
- internal section padding: 64px vertical

Laptop 1440:
- preserve relative proportions
- outer gutters: 48px

Mobile:
- 4-column grid
- 20–24px gutters

## Shapes

Signature shapes:
- tall soft arch
- cropped organic ellipse
- wavy paper edge
- rounded photo cards (24–32px radius)
- taped note rectangle rotated 1–4 degrees
- circular project counter / sun badge

Avoid using an arch around every image. Reserve them for hero, process and a small number of accents.

## Lines and borders

- 1px warm-brown or olive at 18–30% opacity
- occasional hand-drawn underline in sunflower yellow
- slim architectural/dimension lines for motion details

## Imagery

Prioritize:
1. Finished photorealistic interiors
2. 2D plans / elevations
3. clean SketchUp / 3D visuals
4. furniture close-ups
5. moodboard / material swatches
6. one professional portrait

Color grade:
- warm natural daylight
- restrained saturation
- true material texture
- no fake heavy bloom
- no beige-on-beige wash that removes contrast

## Iconography

Use line icons only, ideally Lucide or custom SVG:
- sofa
- building
- plan / ruler
- cube
- chair
- palette / swatch
- lamp
- home

Icons use brown/olive lines, with yellow only on interaction.

## Buttons

Primary:
- sunflower fill
- dark text
- pill radius
- small arrow circle or arrow icon

Secondary:
- transparent / paper background
- 1px brown border
- dark text

Hover:
- 2–4px lift maximum
- arrow shifts 6–8px
- yellow highlight grows from left or rotates slightly

## Texture

Use a subtle paper/grain layer under 4% opacity. It must not interfere with legibility or image quality.

## Composition rule

Every 100vh screen should have:
- one dominant focal element,
- one supporting composition,
- one micro-detail/annotation,
- one clear interaction path.

Do not fill every empty area. Whitespace is part of the visual identity.
