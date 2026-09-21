import { client } from "./client";
import {
  ALL_PROJECTS_QUERY,
  FEATURED_PROJECTS_QUERY,
  PROJECT_BY_SLUG_QUERY,
  ALL_EXPERIENCES_QUERY,
  STYLE_SHOWCASES_QUERY,
} from "./queries";
import { FEATURED_PROJECTS, FURNITURE_DESIGNS } from "@/data/fixtures/projects";
import { EXPERIENCES, CORE_SKILLS } from "@/data/fixtures/experience";
import { STYLE_OUTPUTS } from "@/data/fixtures/styles";
import { Project, StyleOutput, FurnitureItem } from "@/types/project";
import { ExperienceItem } from "@/types/site";
import { urlForImage } from "./image";

// Map Sanity raw document to strongly-typed Project interface
function mapSanityProject(doc: any): Project {
  return {
    id: doc._id || doc.id,
    slug: doc.slug,
    number: doc.number || "01",
    title: doc.title,
    category:
      doc.category === "commercial"
        ? "Commercial"
        : doc.category === "furniture"
        ? "Furniture"
        : "Residential",
    location: doc.location || "Bengaluru",
    year: doc.year ? String(doc.year) : undefined,
    headline: doc.summary || doc.headline || "",
    shortDescription: doc.summary || doc.shortDescription || "",
    heroImage: urlForImage(doc.heroImage) || doc.heroImage,
    thumbnailImage: urlForImage(doc.thumbnailImage || doc.heroImage) || doc.thumbnailImage,
    details: {
      scope: Array.isArray(doc.scope) ? doc.scope.join(", ") : doc.details?.scope,
      deliverables: doc.scope || doc.details?.deliverables,
    },
    designDecisions: doc.decisions
      ? {
          function:
            doc.decisions.find((d: any) => d.category === "function")?.text ||
            "Moved storage to full-height wall to preserve circulation.",
          material:
            doc.decisions.find((d: any) => d.category === "material")?.text ||
            "Selected honed natural travertine and matte PU oak.",
          detail:
            doc.decisions.find((d: any) => d.category === "detail")?.text ||
            "Integrated 20mm shadow reveals and System 32 millwork alignment.",
        }
      : undefined,
  };
}

// Fetch all published projects (Sanity with graceful fixture fallback)
export async function getProjects(): Promise<Project[]> {
  if (client) {
    try {
      const data = await client.fetch(ALL_PROJECTS_QUERY);
      if (Array.isArray(data) && data.length > 0) {
        return data.map(mapSanityProject);
      }
    } catch (err) {
      console.warn("Sanity fetch failed, using verified local fixtures:", err);
    }
  }
  return FEATURED_PROJECTS;
}

// Fetch homepage featured projects (strictly up to 5, editable order)
export async function getFeaturedProjects(): Promise<Project[]> {
  if (client) {
    try {
      const data = await client.fetch(FEATURED_PROJECTS_QUERY);
      if (Array.isArray(data) && data.length > 0) {
        return data.map(mapSanityProject);
      }
    } catch (err) {
      console.warn("Sanity featured fetch failed, using local fixtures:", err);
    }
  }
  // Up to 5 projects for homepage dual-card rail per CMS spec
  return FEATURED_PROJECTS.slice(0, 5);
}

// Fetch single project by slug
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (client) {
    try {
      const doc = await client.fetch(PROJECT_BY_SLUG_QUERY, { slug });
      if (doc) {
        const mapped = mapSanityProject(doc);
        // Preserve spatialStudy if local fixture has it
        const fixture = FEATURED_PROJECTS.find((p) => p.slug === slug);
        if (fixture?.spatialStudy) {
          mapped.spatialStudy = fixture.spatialStudy;
        }
        return mapped;
      }
    } catch (err) {
      console.warn("Sanity single project fetch failed:", err);
    }
  }
  const match = FEATURED_PROJECTS.find((p) => p.slug === slug);
  return match || null;
}

// Fetch professional experiences
export async function getExperiences(): Promise<ExperienceItem[]> {
  if (client) {
    try {
      const data = await client.fetch(ALL_EXPERIENCES_QUERY);
      if (Array.isArray(data) && data.length > 0) {
        return data.map((d: any) => ({
          id: d._id,
          role: d.role,
          company: d.company,
          period: `${d.startDate} – ${d.isCurrent ? "Present" : d.endDate || ""}`,
          location: d.location,
          description: d.shortSummary,
          isCurrent: d.isCurrent,
        }));
      }
    } catch (err) {
      console.warn("Sanity experience fetch failed:", err);
    }
  }
  return EXPERIENCES;
}

// Fetch style showcases
export async function getStyleShowcases(): Promise<StyleOutput[]> {
  if (client) {
    try {
      const data = await client.fetch(STYLE_SHOWCASES_QUERY);
      if (Array.isArray(data) && data.length > 0) {
        return data.map((d: any) => ({
          id: d._id,
          title: d.title,
          subtitle: d.hoverText,
          image: urlForImage(d.coverImage),
          evidence: d.evidenceBullets || [],
          linkText: `Explore ${d.title}`,
          href: d.type === "furniture" ? "/work/furniture" : "/work/residential",
        }));
      }
    } catch (err) {
      console.warn("Sanity style showcases fetch failed:", err);
    }
  }
  return STYLE_OUTPUTS;
}

// Fetch all 9 bespoke furniture designs
export async function getFurnitureDesigns(): Promise<FurnitureItem[]> {
  return FURNITURE_DESIGNS;
}

