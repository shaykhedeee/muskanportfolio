export const designDecision = {
  name: "designDecision",
  title: "Design Decision",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Decision Title / Scope",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Function", value: "function" },
          { title: "Material", value: "material" },
          { title: "Detail", value: "detail" },
        ],
        layout: "radio",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "text",
      title: "Explanation",
      type: "text",
      description: "e.g. FUNCTION — Moved storage to the full-height wall to preserve circulation around the bed.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Supporting Detail Image / Sketch",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
  ],
};
