import { cars } from "@/data/cars";
import type { Car } from "@/lib/types";

/** Returns every car in the database, sorted alphabetically by name. */
export function getAllCars(): Car[] {
  return [...cars].sort((a, b) => a.name.localeCompare(b.name));
}

/** Returns a single car by its URL slug, or undefined if not found. */
export function getCarBySlug(slug: string): Car | undefined {
  return cars.find((car) => car.slug === slug);
}

/** Returns every unique manufacturer name, alphabetically sorted. */
export function getAllManufacturers(): string[] {
  return Array.from(new Set(cars.map((c) => c.manufacturer))).sort();
}

/** Returns all cars from a given manufacturer. */
export function getCarsByManufacturer(manufacturer: string): Car[] {
  return cars.filter(
    (c) => c.manufacturer.toLowerCase() === manufacturer.toLowerCase()
  );
}

/**
 * Full-text search across name, manufacturer, chassis code, engine code,
 * and tags (nicknames / alternate codes). Case-insensitive substring match.
 * This is what powers the site's search bar, including queries like
 * "RB26" surfacing the Skyline GT-R pages.
 */
export function searchCars(query: string): Car[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return cars.filter((car) => {
    const haystack = [
      car.name,
      car.shortName,
      car.manufacturer,
      car.chassisCode,
      car.engineCode,
      car.engine,
      ...car.tags
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(q);
  });
}

/** Returns a handful of "featured" cars for the homepage hero/grid. */
export function getFeaturedCars(): Car[] {
  const featuredSlugs = [
    "nissan-skyline-gtr-r34",
    "toyota-supra-mk4",
    "mazda-rx7-fd",
    "honda-nsx-na1",
    "nissan-silvia-s15",
    "toyota-ae86-corolla",
    "subaru-impreza-wrx-sti-gc8",
    "mitsubishi-evo-6"
  ];
  return featuredSlugs
    .map((slug) => getCarBySlug(slug))
    .filter((c): c is Car => Boolean(c));
}
