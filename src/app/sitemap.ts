import { MetadataRoute } from "next";
import { FEATURED_PROJECTS } from "@/data/fixtures/projects";
import { DETAILED_FURNITURE_DESIGNS } from "@/data/fixtures/furniture-cad";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://muskanpareek.com";

  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/process",
    "/contact",
    "/resume",
    "/work",
    "/work/residential",
    "/work/commercial",
    "/work/furniture",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes = FEATURED_PROJECTS.map((proj) => ({
    url: `${baseUrl}/projects/${proj.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const furnitureRoutes = DETAILED_FURNITURE_DESIGNS.map((item) => ({
    url: `${baseUrl}/work/furniture/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...projectRoutes, ...furnitureRoutes];
}

