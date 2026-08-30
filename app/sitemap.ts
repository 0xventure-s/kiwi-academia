import type { MetadataRoute } from "next";

import { db } from "@/lib/db";
import { siteConfig } from "@/lib/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = siteConfig.url.replace(/\/$/, "");
  const courses = await db.course.findMany({
    where: { isPublished: true },
    select: { id: true, updatedAt: true },
  });

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/cursos`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/terminos`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...courses.map((course) => ({
      url: `${siteUrl}/cursos/${course.id}`,
      lastModified: course.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
