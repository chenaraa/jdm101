"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Car } from "@/lib/types";

function CarSelect({
  cars,
  value,
  onChange,
  label
}: {
  cars: Car[];
  value: string;
  onChange: (slug: string) => void;
  label: string;
}) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-widest text-chalk-dim mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-graphite-600 bg-graphite-800 px-4 py-3 text-chalk focus:outline-none focus:ring-1 focus:ring-redline font-display text-sm"
      >
        <option value="">Select a car...</option>
        {cars.map((car) => (
          <option key={car.slug} value={car.slug}>
            {car.name}
          </option>
        ))}
      </select>
    </div>
  );
}

function CompareRow({
  label,
  a,
  b
}: {
  label: string;
  a: string;
  b: string;
}) {
  return (
    <div className="grid grid-cols-3 gap-4 py-3 border-b border-graphite-700 last:border-b-0">
      <div className="text-sm text-chalk-dim">{label}</div>
      <div className="text-sm font-mono text-chalk">{a}</div>
      <div className="text-sm font-mono text-chalk">{b}</div>
    </div>
  );
}

export function CompareWidget({ cars }: { cars: Car[] }) {
  const searchParams = useSearchParams();
  const [slugA, setSlugA] = useState(searchParams.get("a") ?? "");
  const [slugB, setSlugB] = useState(searchParams.get("b") ?? "");

  const carA = useMemo(() => cars.find((c) => c.slug === slugA), [cars, slugA]);
  const carB = useMemo(() => cars.find((c) => c.slug === slugB), [cars, slugB]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <CarSelect cars={cars} value={slugA} onChange={setSlugA} label="Car A" />
        <CarSelect cars={cars} value={slugB} onChange={setSlugB} label="Car B" />
      </div>

      {carA && carB ? (
        <div className="rounded-lg spec-plate p-6 sm:p-8">
          <div className="grid grid-cols-3 gap-4 pb-4 mb-4 border-b border-graphite-600">
            <div />
            <h2 className="font-display text-lg text-chalk">{carA.name}</h2>
            <h2 className="font-display text-lg text-chalk">{carB.name}</h2>
          </div>

          <CompareRow label="Horsepower" a={carA.horsepower} b={carB.horsepower} />
          <CompareRow label="Torque" a={carA.torque} b={carB.torque} />
          <CompareRow label="Engine" a={carA.engine} b={carB.engine} />
          <CompareRow label="Weight" a={carA.weight} b={carB.weight} />
          <CompareRow label="Drivetrain" a={carA.drivetrain} b={carB.drivetrain} />
          <CompareRow label="0–60 mph" a={carA.zeroToSixty} b={carB.zeroToSixty} />
          <CompareRow label="Transmission" a={carA.transmission} b={carB.transmission} />
          <CompareRow label="Years" a={carA.years} b={carB.years} />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-sm uppercase tracking-wide text-redline-bright mb-2">
                {carA.shortName}: Modification Potential
              </h3>
              <p className="text-sm text-chalk-dim">{carA.modPotential}</p>
            </div>
            <div>
              <h3 className="font-display text-sm uppercase tracking-wide text-redline-bright mb-2">
                {carB.shortName}: Modification Potential
              </h3>
              <p className="text-sm text-chalk-dim">{carB.modPotential}</p>
            </div>
            <div>
              <h3 className="font-display text-sm uppercase tracking-wide text-redline-bright mb-2">
                {carA.shortName}: Reliability Notes
              </h3>
              <p className="text-sm text-chalk-dim">
                {carA.commonProblems[0]}
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm uppercase tracking-wide text-redline-bright mb-2">
                {carB.shortName}: Reliability Notes
              </h3>
              <p className="text-sm text-chalk-dim">
                {carB.commonProblems[0]}
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm uppercase tracking-wide text-redline-bright mb-2">
                {carA.shortName}: Collectibility
              </h3>
              <p className="text-sm text-chalk-dim">{carA.popularity}</p>
            </div>
            <div>
              <h3 className="font-display text-sm uppercase tracking-wide text-redline-bright mb-2">
                {carB.shortName}: Collectibility
              </h3>
              <p className="text-sm text-chalk-dim">{carB.popularity}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-chalk-dim">
          Select two cars above to see a full head-to-head comparison.
        </p>
      )}
    </div>
  );
}
