export const homepage = {
  name: "homepage",
  title: "Homepage Configuration",
  type: "document",
  fields: [
    {
      name: "heroEyebrow",
      title: "Hero Eyebrow Text",
      type: "string",
      initialValue: "Spaces for a brighter tomorrow",
    },
    {
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      initialValue: "Designing spaces that feel like home.",
    },
    {
      name: "heroBody",
      title: "Hero Subtitle / Description",
      type: "text",
      rows: 3,
      initialValue:
        "Thoughtful interiors for a kinder, brighter everyday. I'm Muskan Pareek, an interior designer creating soulful, functional and timeless spaces that reflect you.",
    },
    {
      name: "featuredProjects",
      title: "Featured Projects (Max 5, Editable Order)",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
      description: "Controls the dual-card rail sequence on the homepage. Exactly 5 references recommended.",
      validation: (Rule: any) => Rule.max(5).error("Maximum 5 featured projects on the homepage."),
    },
    {
      name: "categoryCoverImages",
      title: "Explore Work Category Cover Overrides",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "processCopy",
      title: "Process Section Headline",
      type: "string",
      initialValue: "From requirement to refined interior.",
    },
    {
      name: "styleShowcaseReferences",
      title: "Style of Work Showcases",
      type: "array",
      of: [{ type: "reference", to: [{ type: "styleShowcase" }] }],
    },
    {
      name: "contactCtaHeadline",
      title: "Footer / Contact CTA Headline",
      type: "string",
      initialValue: "Let's build thoughtful spaces together.",
    },
    {
      name: "contactCtaCopy",
      title: "Footer / Contact CTA Copy",
      type: "text",
      rows: 2,
      initialValue:
        "Explore my work, download my professional portfolio, or connect with me on LinkedIn for interior-design opportunities and collaborations.",
    },
  ],
};
