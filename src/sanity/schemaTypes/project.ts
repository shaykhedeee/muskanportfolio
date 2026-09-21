export const project = {
  name: "project",
  title: "Project Case Study",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required().error("Every project requires a unique slug for routing."),
    },
    {
      name: "status",
      title: "Publication Status",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Published", value: "published" },
        ],
        layout: "radio",
      },
      initialValue: "published",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "featuredOrder",
      title: "Homepage Featured Order (1–5)",
      type: "number",
      description: "Controls the sequence on the homepage Selected Projects dual-card rail.",
      hidden: ({ document }: any) => !document?.featured,
    },
    {
      name: "category",
      title: "Primary Discipline Category",
      type: "string",
      options: {
        list: [
          { title: "Residential", value: "residential" },
          { title: "Commercial & Hospitality", value: "commercial" },
          { title: "Custom Furniture & Millwork", value: "furniture" },
        ],
        layout: "radio",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "subcategory",
      title: "Subcategories / Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
    {
      name: "location",
      title: "Location (e.g. Bengaluru, Jaipur)",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "year",
      title: "Year",
      type: "number",
      initialValue: 2024,
    },
    {
      name: "role",
      title: "Role (e.g. Lead Interior Designer, Millwork Specialist)",
      type: "string",
      initialValue: "Interior Designer",
    },
    {
      name: "scope",
      title: "Project Scope",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "software",
      title: "Software & Tools Used",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
    {
      name: "summary",
      title: "Short Project Premise / Summary",
      type: "text",
      rows: 3,
      validation: (Rule: any) => Rule.required().max(250),
    },
    {
      name: "heroImage",
      title: "Hero Banner Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Required for accessibility.",
          validation: (Rule: any) => Rule.required().error("Hero image requires alt text."),
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "heroAlt",
      title: "Hero Alternative Text Fallback",
      type: "string",
    },
    {
      name: "thumbnailImage",
      title: "Grid Thumbnail Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: "palette",
      title: "Material Color Swatches (Hex Codes)",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "brief",
      title: "Project Brief & Constraints",
      type: "text",
      rows: 4,
    },
    {
      name: "constraints",
      title: "Constraints Solved",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "planningGallery",
      title: "Section 03: Space Planning & 2D Drawings",
      type: "array",
      of: [{ type: "mediaBlock" }],
    },
    {
      name: "moodboardGallery",
      title: "Section 04: Moodboard & Material Textures",
      type: "array",
      of: [{ type: "mediaBlock" }],
    },
    {
      name: "modelGallery",
      title: "Section 05: 3D Perspectives & Visualizations",
      type: "array",
      of: [{ type: "mediaBlock" }],
    },
    {
      name: "furnitureGallery",
      title: "Section 06: Modular Millwork & System 32 Joinery",
      type: "array",
      of: [{ type: "mediaBlock" }],
    },
    {
      name: "decisions",
      title: "Section 07: Design Decisions (Function, Material, Detail)",
      type: "array",
      of: [{ type: "designDecision" }],
    },
    {
      name: "finalGallery",
      title: "Section 08: Final Editorial Gallery",
      type: "array",
      of: [{ type: "mediaBlock" }],
    },
    {
      name: "outcome",
      title: "Section 09: Outcome & Solved Impact",
      type: "text",
      rows: 3,
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
    },
    {
      name: "ogImage",
      title: "Open Graph Social Share Image",
      type: "image",
    },
    {
      name: "confidentialityNote",
      title: "Confidentiality / NDA Note",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "thumbnailImage",
      featured: "featured",
      featuredOrder: "featuredOrder",
    },
    prepare(selection: any) {
      const { title, category, media, featured, featuredOrder } = selection;
      return {
        title,
        subtitle: `${category?.toUpperCase()} ${featured ? `• ★ Featured #${featuredOrder || 1}` : ""}`,
        media,
      };
    },
  },
};
