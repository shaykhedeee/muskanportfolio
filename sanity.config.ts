import { schemaTypes } from "./src/sanity/schemaTypes";
import { projectId, dataset } from "./src/sanity/env";

export const sanityConfig = {
  name: "default",
  title: "Muskan Pareek — Interior Design Portfolio CMS",
  projectId: projectId || "mock-project-id",
  dataset: dataset || "production",
  basePath: "/studio",
  schema: {
    types: schemaTypes,
  },
};

export default sanityConfig;
