# Recommended Project Structure

```text
muskan-pareek-portfolio/
├─ public/
│  ├─ fonts/                 # only properly licensed/self-hosted fonts
│  ├─ icons/
│  ├─ resume/
│  │  └─ muskan-pareek-resume.pdf
│  └─ static/
│
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ globals.css
│  │  ├─ about/
│  │  │  └─ page.tsx
│  │  ├─ resume/
│  │  │  └─ page.tsx
│  │  ├─ projects/
│  │  │  └─ [slug]/
│  │  │     └─ page.tsx
│  │  ├─ work/
│  │  │  ├─ residential/page.tsx
│  │  │  ├─ commercial/page.tsx
│  │  │  └─ furniture/page.tsx
│  │  ├─ studio/
│  │  │  └─ [[...tool]]/page.tsx
│  │  ├─ sitemap.ts
│  │  └─ robots.ts
│  │
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ Header.tsx
│  │  │  ├─ Footer.tsx
│  │  │  └─ SectionProgress.tsx
│  │  ├─ home/
│  │  │  ├─ HeroSection.tsx
│  │  │  ├─ SelectedProjectsSection.tsx
│  │  │  ├─ ExploreWorkSection.tsx
│  │  │  ├─ ProcessSection.tsx
│  │  │  ├─ StyleOfWorkSection.tsx
│  │  │  ├─ ExperienceSection.tsx
│  │  │  └─ ContactSection.tsx
│  │  ├─ projects/
│  │  │  ├─ ProjectCard.tsx
│  │  │  ├─ ProjectHero.tsx
│  │  │  ├─ ProjectGallery.tsx
│  │  │  ├─ DrawingRenderPair.tsx
│  │  │  └─ NextProject.tsx
│  │  ├─ ui/
│  │  │  ├─ Button.tsx
│  │  │  ├─ ArchMask.tsx
│  │  │  ├─ PaperNote.tsx
│  │  │  ├─ SunBadge.tsx
│  │  │  └─ RevealImage.tsx
│  │  └─ motion/
│  │     ├─ MotionProvider.tsx
│  │     ├─ SectionNavigator.tsx
│  │     ├─ useReducedMotion.ts
│  │     ├─ useSectionObserver.ts
│  │     └─ transitions.ts
│  │
│  ├─ data/
│  │  └─ fixtures/
│  │     ├─ projects.ts
│  │     └─ experience.ts
│  │
│  ├─ sanity/
│  │  ├─ env.ts
│  │  ├─ lib/
│  │  │  ├─ client.ts
│  │  │  ├─ queries.ts
│  │  │  └─ image.ts
│  │  └─ schemaTypes/
│  │     ├─ projectType.ts
│  │     ├─ experienceType.ts
│  │     ├─ styleShowcaseType.ts
│  │     ├─ homepageType.ts
│  │     └─ siteSettingsType.ts
│  │
│  ├─ lib/
│  │  ├─ cn.ts
│  │  ├─ metadata.ts
│  │  └─ analytics.ts
│  │
│  ├─ styles/
│  │  ├─ tokens.css
│  │  ├─ shapes.css
│  │  └─ motion.css
│  │
│  └─ types/
│     ├─ project.ts
│     └─ site.ts
│
├─ e2e/
│  ├─ home.spec.ts
│  ├─ project.spec.ts
│  ├─ accessibility.spec.ts
│  └─ contact.spec.ts
│
├─ docs/
│  └─ design-reference.png
│
├─ .env.example
├─ next.config.ts
├─ sanity.config.ts
├─ package.json
├─ README.md
└─ pnpm-lock.yaml
```

## Component rule

Each homepage screen owns:
- its layout,
- its entrance/exit timeline,
- its internal interactions.

`SectionNavigator` owns only:
- which main section is active,
- wheel/touch intent,
- scroll locking,
- URL hash / progress state.

This separation prevents one giant fragile animation file.
