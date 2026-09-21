import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn, hasSanityConfig } from "./env";

export const client = hasSanityConfig
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      perspective: "published",
    })
  : null;
