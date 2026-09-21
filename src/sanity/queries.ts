import { groq } from "next-sanity";

// Query all published projects
export const ALL_PROJECTS_QUERY = groq`
  *[_type == "project" && status == "published"] | order(year desc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    status,
    featured,
    featuredOrder,
    category,
    subcategory,
    location,
    year,
    role,
    scope,
    software,
    summary,
    heroImage,
    "heroAlt": heroImage.alt,
    thumbnailImage,
    palette,
    brief,
    constraints,
    decisions,
    outcome,
    seoTitle,
    seoDescription
  }
`;

// Query featured projects for homepage (editable order, max 5)
export const FEATURED_PROJECTS_QUERY = groq`
  *[_type == "project" && status == "published" && featured == true] | order(featuredOrder asc, year desc)[0...5] {
    _id,
    title,
    "slug": slug.current,
    status,
    featured,
    featuredOrder,
    category,
    location,
    summary,
    heroImage,
    "heroAlt": heroImage.alt,
    thumbnailImage
  }
`;

// Query single project case study by slug
export const PROJECT_BY_SLUG_QUERY = groq`
  *[_type == "project" && slug.current == $slug && status == "published"][0] {
    _id,
    title,
    "slug": slug.current,
    status,
    featured,
    featuredOrder,
    category,
    subcategory,
    location,
    year,
    role,
    scope,
    software,
    summary,
    heroImage,
    "heroAlt": heroImage.alt,
    thumbnailImage,
    palette,
    brief,
    constraints,
    planningGallery,
    moodboardGallery,
    modelGallery,
    furnitureGallery,
    decisions,
    finalGallery,
    outcome,
    seoTitle,
    seoDescription
  }
`;

// Query experiences (newest first)
export const ALL_EXPERIENCES_QUERY = groq`
  *[_type == "experience"] | order(sortOrder asc, startDate desc) {
    _id,
    company,
    role,
    startDate,
    endDate,
    isCurrent,
    location,
    employmentType,
    shortSummary,
    keyResponsibilities,
    skills,
    sortOrder
  }
`;

// Query style of work showcases
export const STYLE_SHOWCASES_QUERY = groq`
  *[_type == "styleShowcase"] | order(sortOrder asc) {
    _id,
    title,
    type,
    coverImage,
    "coverAlt": coverImage.alt,
    workingLayerImage,
    hoverText,
    evidenceBullets,
    sortOrder
  }
`;

// Query site settings & profile
export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    name,
    headline,
    shortBio,
    email,
    location,
    workPreference,
    linkedInUrl,
    resumeFile,
    heroPortrait,
    heroInteriorImage,
    defaultOgImage,
    availabilityLabel
  }
`;
