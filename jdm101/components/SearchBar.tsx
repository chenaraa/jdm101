"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { cars } from "@/data/cars";

function searchLocal(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return cars
    .filter((car) => {
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
    })
    .slice(0, 8);
}

export function SearchBar({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = useMemo(() => searchLocal(query), [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (results.length > 0) {
      router.push(`/cars/${results[0].slug}`);
      setOpen(false);
    } else {
      router.push(`/cars?q=${encodeURIComponent(query)}`);
    }
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search RB26, Supra, S15..."
          className={`w-full rounded-md border border-graphite-600 bg-graphite-800 text-chalk placeholder:text-chalk-dim/60 focus:outline-none focus:ring-1 focus:ring-redline font-mono ${
            compact ? "px-3 py-1.5 text-sm" : "px-4 py-3 text-base"
          }`}
        />
      </form>

      {open && query.trim().length > 0 && (
        <div className="absolute z-50 mt-2 w-full max-h-96 overflow-y-auto rounded-md border border-graphite-600 bg-graphite-900 shadow-2xl">
          {results.length === 0 ? (
            <p className="p-4 text-sm text-chalk-dim">
              No cars found for &ldquo;{query}&rdquo;
            </p>
          ) : (
            <ul>
              {results.map((car) => (
                <li key={car.slug}>
                  <a
                    href={`/cars/${car.slug}`}
                    className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-graphite-800 transition-colors border-b border-graphite-800 last:border-b-0"
                  >
                    <div>
                      <p className="text-sm font-medium text-chalk">
                        {car.name}
                      </p>
                      <p className="text-xs text-chalk-dim font-mono">
                        {car.chassisCode} &middot; {car.engineCode}
                      </p>
                    </div>
                    <span className="text-xs text-chalk-dim">
                      {car.manufacturer}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
