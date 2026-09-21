import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId, hasSanityConfig } from "./env";

const imageBuilder = hasSanityConfig
  ? createImageUrlBuilder({
      projectId,
      dataset,
    })
  : null;

export const urlForImage = (source: any): string => {
  if (!source) return "";
  if (typeof source === "string") return source;
  if (imageBuilder && source?.asset) {
    return imageBuilder.image(source).auto("format").fit("max").url();
  }
  return source?.url || "";
};
