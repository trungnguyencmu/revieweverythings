/** @format */

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "d16fdzaq",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-08-14",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});

export default config;
