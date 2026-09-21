export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  isCurrent?: boolean;
}

export interface SiteMetadata {
  name: string;
  title: string;
  email: string;
  location: string;
  workPreference: string;
  experienceYears: string;
  linkedinUrl: string;
}
