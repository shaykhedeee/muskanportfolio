# Motion and Scroll Specification

## Principle

Motion should feel like the website is being arranged by an interior designer: paper slides, images reveal through arches, layout lines draw, swatches shift, and small objects settle into place.

It should never feel like a gaming website or a tech demo.

## Desktop section navigation

### Requirement
One deliberate wheel/trackpad gesture advances exactly one major homepage section.

### Recommended implementation
Use:
- native document sections (`section[data-section]`)
- Lenis for controlled native smooth scrolling
- GSAP `Observer` / `ScrollTrigger.observe()` to detect desktop wheel/touch intent
- CSS scroll snap as fallback, not as the only control

### State machine
Track:
- `activeSectionIndex`
- `isTransitioning`
- `direction`
- `selectedProjectIndex`
- `selectedProjectsInternalMax`

Pseudo-behavior:

```text
onWheelDown:
  if isTransitioning: ignore
  if activeSection == selectedProjects AND selectedProjectIndex < internalMax:
    selectedProjectIndex += 1
    animate project rail
  else:
    goToSection(activeSection + 1)

onWheelUp:
  if isTransitioning: ignore
  if activeSection == selectedProjects AND selectedProjectIndex > 0:
    selectedProjectIndex -= 1
    animate project rail
  else:
    goToSection(activeSection - 1)
```

### Gesture tuning
- require a minimum wheel delta / intent threshold
- ignore micro trackpad noise
- lock input for ~850–1100ms while a full-section transition is in progress
- transition duration: ~0.9–1.15s
- use `power3.inOut`, `expo.inOut` or a custom cubic curve
- never chain multiple sections from one momentum burst

## Mobile behavior

Do not force the same desktop wheel lock on mobile.

For <= 767px:
- native touch scrolling
- `scroll-snap-type: y proximity`
- sections use `min-height: 100svh`, but may grow when content needs it
- Selected Projects becomes horizontal or stacked swipe cards
- no pointer-only interactions

For tablet:
- test both strategies; prefer native scroll if touch-first.

## Reduced motion

When `prefers-reduced-motion: reduce`:
- disable Lenis smoothing
- disable parallax
- disable text stagger
- remove large image scaling
- use simple fade/instant section navigation
- keep all content fully reachable by ordinary scroll

## Section progress

Desktop right-side indicator:
- 7 dots or short ticks
- active tick in sunflower yellow
- click/tap to jump to a section
- use accessible button labels: `Go to Selected Projects`

Update URL hash optionally:
- `#home`
- `#projects`
- `#work`
- `#process`
- `#style`
- `#experience`
- `#contact`

Use `history.replaceState` rather than causing browser jumps.

## Signature micro-animations

### Hero
- arch mask reveal
- yellow underline draw
- slow 1–2° sunflower emblem rotation
- leaf sway 1.5–2.5°
- tiny paper note drop/settle

### Selected Projects
- image crop changes subtly on active card
- vertical card rail translate
- project index moves like an elevator counter
- line marker extends and retracts

### Category panels
- hovered panel expands
- text baseline shifts 8–12px
- circular arrow rotates 30–45°

### Process
- plan line draws with SVG stroke-dashoffset
- tiny sofa/chair plan symbol follows motion path
- ruler ticks appear sequentially

### Style of Work
- 2D card: plan line overlays then fades
- 3D card: render light sweeps softly across surface
- Furniture: exploded joinery outline appears for 600–800ms
- Moodboard: swatches spread 6–12px then return

### Contact
- sunflower head turns/rotates slightly
- underline grows under email on hover

## Cursor

Desktop only:
- 10–12px warm-brown dot
- thin 32–36px ring
- on interactive image: ring becomes sunflower yellow and shows `VIEW`
- on drag/scrollable project region: label `SCROLL`

Disable on touch devices.

## Route transitions

For project/category navigation:
- use React View Transitions where supported
- project card image should visually expand toward the project hero
- duration 450–700ms
- fallback to normal route transition

## Never animate

- body paragraphs continuously
- entire screens with constant floating
- every icon
- large autoplay 3D scenes
- cursor trails
- essential text behind motion-only reveals
