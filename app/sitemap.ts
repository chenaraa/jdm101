import type { MetadataRoute } from "next";
import { getAllCars } from "@/lib/cars";

const SITE_URL = "https://jdm101.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${SITE_URL}/cars`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${SITE_URL}/quiz`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${SITE_URL}/compare`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];

  const carRoutes: MetadataRoute.Sitemap = getAllCars().map((car) => ({
    url: `${SITE_URL}/cars/${car.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6
  }));

  return [...staticRoutes, ...carRoutes];
}
