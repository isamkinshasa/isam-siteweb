import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "isam-kinshasa",
  title: "ISAM Kinshasa — Administration",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "lpesrytz",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "isamkin",
  basePath: "/structure",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenu")
          .items([
            S.listItem()
              .title("Articles")
              .child(S.documentTypeList("article").title("Articles")),
            S.listItem()
              .title("Événements")
              .child(S.documentTypeList("event").title("Événements")),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
