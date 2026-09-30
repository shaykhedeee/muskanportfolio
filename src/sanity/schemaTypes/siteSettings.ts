export const siteSettings = {
  name: "siteSettings",
  title: "Site Settings & Profile",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Designer Name",
      type: "string",
      initialValue: "Muskan Pareek",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "headline",
      title: "Professional Headline",
      type: "string",
      initialValue: "Interior Designer",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "shortBio",
      title: "Short Professional Bio",
      type: "text",
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "email",
      title: "Direct Email Address",
      type: "string",
      initialValue: "pareekmuskan1999@gmail.com",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "Bengaluru, Karnataka, India",
    },
    {
      name: "workPreference",
      title: "Work Preference",
      type: "string",
      initialValue: "Hybrid · Remote · Bengaluru",
    },
    {
      name: "linkedInUrl",
      title: "LinkedIn Profile URL",
      type: "url",
      initialValue: "https://www.linkedin.com/in/muskan-pareek-78b19a224",
    },
    {
      name: "resumeFile",
      title: "Printable Resume PDF",
      type: "file",
    },
    {
      name: "portfolioFile",
      title: "Offline Portfolio PDF",
      type: "file",
    },
    {
      name: "heroPortrait",
      title: "Hero Portrait Image",
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
    {
      name: "heroInteriorImage",
      title: "Hero Supporting Interior Image",
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
    {
      name: "defaultOgImage",
      title: "Default Social Share (OpenGraph) Image",
      type: "image",
    },
    {
      name: "availabilityLabel",
      title: "Availability Status Badge",
      type: "string",
      initialValue: "Available for interior design & career opportunities",
    },
  ],
};
