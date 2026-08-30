import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = siteConfig.url.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/cursos", "/terminos"],
        disallow: [
          "/admin",
          "/api",
          "/courses",
          "/dashboard",
          "/mis-cursos",
          "/pagos",
          "/perfil",
          "/ranking",
          "/recuperar-acceso",
          "/restablecer-clave",
          "/search",
          "/sign-in",
          "/sign-up",
          "/teacher",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
