import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f8f4ea",
    theme_color: "#1d1a18",
    lang: siteConfig.language,
    categories: ["business", "productivity"],
    icons: [
      {
        src: siteConfig.icons.app,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: siteConfig.icons.large,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
