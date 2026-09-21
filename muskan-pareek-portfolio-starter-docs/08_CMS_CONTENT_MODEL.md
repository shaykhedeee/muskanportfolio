# CMS Content Model — Sanity

## Why Sanity

The portfolio will evolve as Muskan adds projects, visuals and case studies. A structured CMS prevents project content from being hard-coded and allows the layout to remain consistent.

Use `next-sanity` with Next.js App Router.

## Document: `project`

Fields:

```ts
{
  title: string,
  slug: slug,
  status: 'draft' | 'published',
  featured: boolean,
  featuredOrder?: number,
  category: 'residential' | 'commercial' | 'furniture',
  subcategory?: string[],
  location?: string,
  year?: number,
  role?: string,
  scope?: string[],
  software?: string[],
  summary: text,
  heroImage: image,
  heroAlt: string,
  thumbnailImage: image,
  palette?: color[],
  brief?: blockContent,
  constraints?: string[],
  planningGallery?: mediaBlock[],
  moodboardGallery?: mediaBlock[],
  modelGallery?: mediaBlock[],
  furnitureGallery?: mediaBlock[],
  finalGallery?: mediaBlock[],
  decisions?: designDecision[],
  outcome?: blockContent,
  seoTitle?: string,
  seoDescription?: string,
  ogImage?: image,
  confidentialityNote?: string
}
```

## Object: `mediaBlock`

```ts
{
  mediaType: 'image' | 'beforeAfter' | 'drawingRenderPair',
  image?: image,
  beforeImage?: image,
  afterImage?: image,
  alt: string,
  caption?: string,
  drawingType?: 'plan' | 'elevation' | 'section' | 'detail' | 'moodboard' | 'render'
}
```

## Object: `designDecision`

```ts
{
  title: string,
  category: 'function' | 'material' | 'detail',
  text: string,
  image?: image
}
```

## Document: `styleShowcase`

Fields:
- title
- type: `2d | 3d | furniture | moodboard`
- cover image
- hover text
- evidence bullets
- gallery
- sort order

## Document: `experience`

Fields:
- company
- role
- start date
- end date / current
- location
- employment type
- short summary
- key responsibilities
- skills
- sort order

## Document: `siteSettings`

Fields:
- name
- headline
- short bio
- email
- location
- work preference
- LinkedIn URL
- resume file
- hero portrait
- hero interior image
- default OG image
- availability label

## Document: `homepage`

Fields:
- hero eyebrow
- hero headline
- hero body
- featured projects references (max 5)
- category cover images
- process copy
- style showcase references
- contact CTA copy

## Validation

- exactly 5 featured projects on homepage once content is ready
- every image requires alt text
- every project requires a unique slug
- unpublished projects must never appear in production queries
- no client-identifying text unless approved
