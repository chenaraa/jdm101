import Link from "next/link";
import { getFeaturedCars, getAllManufacturers } from "@/lib/cars";
import { CarCard } from "@/components/CarCard";
import { SearchBar } from "@/components/SearchBar";

export default function HomePage() {
  const featured = getFeaturedCars();
  const manufacturers = getAllManufacturers();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-graphite-700">
        <div className="absolute inset-0 bg-gradient-to-b from-graphite-900 via-graphite-950 to-graphite-950" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <p className="font-mono text-redline-bright text-sm tracking-widest uppercase mb-4">
            RB26 &middot; 2JZ &middot; SR20 &middot; 4G63 &middot; EJ20
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-chalk max-w-3xl">
            The complete guide to{" "}
            <span className="text-redline">Japanese Domestic Market</span>{" "}
            cars.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-chalk-dim">
            JDM101 is the beginner-friendly encyclopedia for iconic Japanese
            sports cars — chassis codes, specs, history, and buying guides —
            plus a matchmaker quiz that finds the JDM car built for your
            budget and driving style.
          </p>

          <div className="mt-8 max-w-lg">
            <SearchBar />
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/cars"
              className="rounded-md bg-redline px-6 py-3 font-display uppercase tracking-wide text-sm text-chalk hover:bg-redline-bright transition-colors"
            >
              Browse the Encyclopedia
            </Link>
            <Link
              href="/quiz"
              className="rounded-md border border-graphite-600 px-6 py-3 font-display uppercase tracking-wide text-sm text-chalk hover:border-redline transition-colors"
            >
              Find My JDM Car
            </Link>
          </div>
        </div>
        <div className="redline-divider" />
      </section>

      {/* What is JDM */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <h2 className="font-display text-2xl font-semibold text-chalk">
              What does &ldquo;JDM&rdquo; actually mean?
            </h2>
          </div>
          <div className="lg:col-span-2 text-chalk-dim space-y-4">
            <p>
              JDM stands for <strong className="text-chalk">Japanese Domestic Market</strong> —
              vehicles and parts built specifically for sale inside Japan,
              often with different engines, trims, and equipment than the
              versions exported abroad. Some JDM cars, like the Nissan Skyline
              GT-R R34 or the Honda Civic Type R EK9, were never officially
              sold outside Japan at all.
            </p>
            <p>
              That exclusivity, combined with a golden era of engineering
              during Japan&rsquo;s late-1980s and 1990s performance car boom,
              turned JDM cars into some of the most beloved, tunable, and
              collectible vehicles in the world — the foundation of drift
              culture, grassroots motorsport, and a global enthusiast
              community that keeps growing decades later.
            </p>
          </div>
        </div>
      </section>

      {/* Featured cars */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 border-t border-graphite-700">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-chalk">
            Featured Icons
          </h2>
          <Link
            href="/cars"
            className="font-display text-sm uppercase tracking-wide text-redline-bright hover:text-redline transition-colors"
          >
            View all cars →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
      </section>

      {/* Manufacturers */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 border-t border-graphite-700">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-chalk mb-8">
          Popular Manufacturers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {manufacturers.map((m) => (
            <Link
              key={m}
              href={`/cars?manufacturer=${encodeURIComponent(m)}`}
              className="flex items-center justify-center rounded-lg spec-plate py-6 font-display uppercase tracking-wide text-chalk hover:border-redline/60 hover:text-redline-bright transition-colors text-center"
            >
              {m}
            </Link>
          ))}
        </div>
      </section>

      {/* Matchmaker CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-graphite-700">
        <div className="rounded-xl spec-plate p-10 sm:p-16 text-center relative overflow-hidden">
          <div className="redline-divider absolute top-0 left-0 right-0" />
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-chalk">
            Not sure which JDM car is right for you?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-chalk-dim">
            Answer four quick questions about your budget, driving style, and
            experience level, and the JDM Matchmaker will recommend the car
            built for you.
          </p>
          <Link
            href="/quiz"
            className="mt-8 inline-block rounded-md bg-redline px-8 py-4 font-display uppercase tracking-wide text-chalk hover:bg-redline-bright transition-colors"
          >
            Take the JDM Matchmaker Quiz
          </Link>
        </div>
      </section>
    </>
  );
}
