import type { MetadataRoute } from "next";

const marketingRoutes = [
  "/",
  "/product",
  "/product/ai",
  "/product/pm",
  "/product/marketplace",
  "/audience",
  "/projects",
  "/projects/cases",
  "/specialists",
  "/contractors",
  "/pricing",
  "/blog",
  "/login",
  "/register"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL ?? "https://collabverse.ru";
  const allRoutes = [
    ...marketingRoutes,
    ...marketingRoutes.map((route) => `/mkt${route === "/" ? "" : route}`)
  ];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));
}
