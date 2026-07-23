import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllCars, getAllManufacturers } from "@/lib/cars";
import { EncyclopediaBrowser } from "@/components/EncyclopediaBrowser";

export const metadata: Metadata = {
  title: "JDM Car Encyclopedia — Browse Every Chassis Code",
  description:
    "Browse the full JDM101 encyclopedia of iconic Japanese Domestic Market cars. Search by name, manufacturer, chassis code, or engine code.",
  alternates: { canonical: "/cars" }
};

export default function CarsPage() {
  const cars = getAllCars();
  const manufacturers = getAllManufacturers();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-chalk">
          JDM Car Encyclopedia
        </h1>
        <p className="mt-3 text-chalk-dim max-w-2xl">
          {cars.length} iconic Japanese Domestic Market cars, searchable by
          name, manufacturer, chassis code, or engine code. Try searching
          &ldquo;RB26&rdquo; or &ldquo;2JZ&rdquo; to jump straight to a
          legendary engine family.
        </p>
      </div>

      <Suspense fallback={<p className="text-chalk-dim">Loading...</p>}>
        <EncyclopediaBrowser cars={cars} manufacturers={manufacturers} />
      </Suspense>
    </div>
  );
}
