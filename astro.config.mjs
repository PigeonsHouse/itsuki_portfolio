import { defineConfig } from "astro/config";

export default defineConfig({
  markdown: {
    remarkPlugins: ["remark-breaks"],
    extendDefaultPlugins: true,
  },
});
