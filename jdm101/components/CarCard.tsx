import Link from "next/link";
import type { Car } from "@/lib/types";

export function CarCard({ car }: { car: Car }) {
  return (
    <Link
      href={`/cars/${car.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-lg spec-plate transition-all hover:border-redline/60 hover:-translate-y-0.5"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-graphite-800 flex items-center justify-center">
        {/* Image placeholder — swap for real photography per car */}
        <div className="absolute inset-0 bg-gradient-to-br from-graphite-700 via-graphite-800 to-graphite-900" />
        <span className="relative font-display text-3xl text-chalk-dim/30 tracking-widest uppercase">
          {car.manufacturer}
        </span>
        <span className="absolute top-3 right-3 rounded bg-graphite-950/80 border border-graphite-600 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-redline-bright">
          {car.chassisCode}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-medium leading-tight text-chalk group-hover:text-redline-bright transition-colors">
            {car.name}
          </h3>
        </div>
        <p className="font-mono text-xs text-chalk-dim">
          {car.years} &middot; {car.horsepower.split(" ")[0]} hp &middot;{" "}
          {car.drivetrain}
        </p>
        <p className="text-sm text-chalk-dim line-clamp-2">{car.overview}</p>
      </div>
    </Link>
  );
}
