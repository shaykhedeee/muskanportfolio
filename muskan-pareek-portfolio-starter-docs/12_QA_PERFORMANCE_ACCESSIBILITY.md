# QA, Performance and Accessibility

## Accessibility rules

- semantic heading order
- one `h1` per route
- real buttons/links, never clickable divs
- visible keyboard focus
- minimum body contrast WCAG AA
- alt text for every meaningful image
- decorative notes/plants marked appropriately
- no essential information only available on hover
- reduced-motion support
- skip-to-content link
- project modal/lightbox, if any, must trap focus correctly

## Full-screen navigation accessibility

Desktop custom scrolling must not break:
- Tab / Shift+Tab
- PageUp / PageDown
- Arrow keys
- Home / End
- browser find
- anchor links
- direct URLs

Recommended keyboard mapping:
- ArrowDown / PageDown → next section
- ArrowUp / PageUp → previous section
- Home → hero
- End → contact

Do not hijack keyboard when user is inside a form, select, textarea or nested gallery control.

## Performance targets

- LCP <= 2.5s
- INP <= 200ms
- CLS <= 0.1
- avoid long main-thread tasks > 200ms
- route JS budget should remain disciplined; lazy-load noncritical animation modules if needed

## Image rules

Hero:
- responsive `sizes`
- preload only true LCP visual
- use quality around 78–86 depending on image detail

Below fold:
- lazy load
- width-aware derivatives
- avoid using original 5K renders directly

Moodboards / plans:
- preserve legibility
- use higher resolution when users can zoom

## Animation performance

Animate:
- transform
- opacity
- SVG stroke properties

Avoid animating:
- width/height continuously
- large blur filters
- box shadows on huge elements
- background-position on giant bitmaps

Use `will-change` only around active animations and remove after.

## Visual regression test sizes

- 1920×1080
- 1440×900
- 1366×768
- 1024×768
- 768×1024
- 430×932
- 390×844

## Core e2e tests

### Home section navigation
- start at hero
- wheel down once → selected projects
- wheel up once → hero
- rapid wheel events do not skip

### Selected Projects
- enter section
- internal down gestures advance project rail
- next gesture after final internal state advances to Explore All My Work
- reverse works

### Project navigation
- click project card
- URL changes to correct slug
- hero loads
- back returns to selected projects

### Category navigation
- Residential / Commercial / Furniture routes open
- correct projects displayed

### Reduced motion
- emulate reduced motion
- page remains usable
- no scroll lock

### Contact
- invalid email rejected
- valid message sends
- bot challenge handled

## Content QA

Before launch verify:
- role titles
- company names
- dates
- contact email
- current location
- resume file
- project names
- project ownership / confidentiality
- testimonial permission
- image rights
