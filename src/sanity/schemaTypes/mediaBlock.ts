export const mediaBlock = {
  name: "mediaBlock",
  title: "Media Block",
  type: "object",
  fields: [
    {
      name: "mediaType",
      title: "Media Type",
      type: "string",
      options: {
        list: [
          { title: "Standard Image", value: "image" },
          { title: "Before / After Slider", value: "beforeAfter" },
          { title: "2D Drawing & 3D Render Pair", value: "drawingRenderPair" },
        ],
        layout: "radio",
      },
      initialValue: "image",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Primary Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Required for accessibility and SEO.",
          validation: (Rule: any) => Rule.required().error("Every image must have descriptive alt text."),
        },
      ],
    },
    {
      name: "beforeImage",
      title: "Before Image / 2D Draft",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "afterImage",
      title: "After Image / 3D Render",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "alt",
      title: "General Accessibility Alt Text",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "caption",
      title: "Caption / Architectural Note",
      type: "string",
    },
    {
      name: "drawingType",
      title: "Drawing Type",
      type: "string",
      options: {
        list: [
          { title: "Floor Plan", value: "plan" },
          { title: "Elevation", value: "elevation" },
          { title: "Section", value: "section" },
          { title: "Joinery Detail", value: "detail" },
          { title: "Moodboard", value: "moodboard" },
          { title: "3D Render", value: "render" },
        ],
      },
    },
  ],
};
