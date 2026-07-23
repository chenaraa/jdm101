"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Car } from "@/lib/types";
import { CarCard } from "@/components/CarCard";

export function EncyclopediaBrowser({
  cars,
  manufacturers
}: {
  cars: Car[];
  manufacturers: string[];
}) {
  const searchParams = useSearchParams();
  const initialManufacturer = searchParams.get("manufacturer") ?? "";
  const initialQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [manufacturer, setManufacturer] = useState(initialManufacturer);

  const filtered = useMemo(() => {
    let result = cars;

    if (manufacturer) {
      result = result.filter((c) => c.manufacturer === manufacturer);
    }

    const q = query.trim().toLowerCase();
    if (q) {
      result = result.filter((car) => {
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

    return result;
  }, [cars, manufacturer, query]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, chassis code, or engine code..."
          className="flex-1 rounded-md border border-graphite-600 bg-graphite-800 px-4 py-3 text-chalk placeholder:text-chalk-dim/60 focus:outline-none focus:ring-1 focus:ring-redline font-mono text-sm"
        />
        <select
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          className="rounded-md border border-graphite-600 bg-graphite-800 px-4 py-3 text-chalk focus:outline-none focus:ring-1 focus:ring-redline font-display uppercase text-sm tracking-wide"
        >
          <option value="">All Manufacturers</option>
          {manufacturers.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <p className="text-sm text-chalk-dim mb-6 font-mono">
        {filtered.length} car{filtered.length !== 1 ? "s" : ""} found
      </p>

      {filtered.length === 0 ? (
        <p className="text-chalk-dim">
          No cars match your search. Try a different chassis code, engine
          code, or manufacturer.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
      )}
    </div>
  );
}
