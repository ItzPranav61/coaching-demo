import type { NextConfig } from "next";
import { realpathSync } from "node:fs";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    // Resolve Windows junctions when this demo lives on another drive.
    root: realpathSync(process.cwd()),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
