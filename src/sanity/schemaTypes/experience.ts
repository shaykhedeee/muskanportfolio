export const experience = {
  name: "experience",
  title: "Professional Experience",
  type: "document",
  fields: [
    {
      name: "company",
      title: "Company / Studio Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "role",
      title: "Design Role / Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "startDate",
      title: "Start Date (e.g. May 2026, Nov 2022)",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "endDate",
      title: "End Date",
      type: "string",
      description: "Leave blank or enter 'Present' if currently employed.",
    },
    {
      name: "isCurrent",
      title: "Is Current Position?",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "location",
      title: "Location (e.g. Bengaluru, Karnataka)",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "employmentType",
      title: "Employment Type",
      type: "string",
      options: {
        list: ["Full-time", "Freelance / Self-Employed", "Internship", "Contract"],
      },
      initialValue: "Full-time",
    },
    {
      name: "shortSummary",
      title: "Short Summary",
      type: "text",
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "keyResponsibilities",
      title: "Key Deliverables & Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "skills",
      title: "Skills Used",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
    {
      name: "sortOrder",
      title: "Chronological Sort Order (1 = Most Recent)",
      type: "number",
      initialValue: 1,
    },
  ],
  orderings: [
    {
      title: "Chronological (Newest First)",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
};
