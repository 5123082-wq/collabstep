import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.APP_URL ?? "https://collabverse.ru";
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/mkt"],
      disallow: ["/api", "/admin"]
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
