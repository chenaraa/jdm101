/**
 * Converts a car name into a URL-safe slug, e.g.
 * slugify("Nissan Skyline GT-R R34") -> "nissan-skyline-gt-r-r34"
 * Useful when adding new cars to data/cars.ts.
 */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Joins class names, skipping falsy values. Lightweight `clsx` alternative. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
