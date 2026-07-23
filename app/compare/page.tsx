import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllCars } from "@/lib/cars";
import { CompareWidget } from "@/components/CompareWidget";

export const metadata: Metadata = {
  title: "Compare JDM Cars — Head-to-Head Specs",
  description:
    "Compare any two JDM cars head-to-head: horsepower, engine, weight, drivetrain, reliability, tuning potential, and collectibility.",
  alternates: { canonical: "/compare" }
};

export default function ComparePage() {
  const cars = getAllCars();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-chalk">
          Compare JDM Cars
        </h1>
        <p className="mt-3 text-chalk-dim max-w-2xl">
          Pick any two cars from the encyclopedia and compare them
          head-to-head — horsepower, weight, drivetrain, and more.
        </p>
      </div>
      <Suspense fallback={<p className="text-chalk-dim">Loading...</p>}>
        <CompareWidget cars={cars} />
      </Suspense>
    </div>
  );
}
