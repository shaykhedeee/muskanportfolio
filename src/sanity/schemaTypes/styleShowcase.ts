export const styleShowcase = {
  name: "styleShowcase",
  title: "Style Showcase",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Showcase Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "type",
      title: "Discipline Type",
      type: "string",
      options: {
        list: [
          { title: "2D Drafting & Plans", value: "2d" },
          { title: "3D Visualization", value: "3d" },
          { title: "Custom Furniture", value: "furniture" },
          { title: "Moodboards & Materials", value: "moodboard" },
        ],
        layout: "radio",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule: any) => Rule.required().error("Cover image requires alt text."),
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "workingLayerImage",
      title: "Working Layer (2D AutoCAD Draft or Clay Model)",
      type: "image",
      options: { hotspot: true },
      description: "Revealed on hover / toggle over the polished image.",
    },
    {
      name: "hoverText",
      title: "Hover Headline / Description",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "evidenceBullets",
      title: "Evidence Bullets (2–3 points)",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: any) => Rule.required().min(2).max(4),
    },
    {
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      initialValue: 1,
    },
  ],
};
