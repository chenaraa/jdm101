import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllCars, getCarBySlug, getCarsByManufacturer } from "@/lib/cars";
import { CarCard } from "@/components/CarCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCars().map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) return {};

  const title = `${car.name} — Specs, History & Buying Guide`;
  const description = `${car.name} (${car.chassisCode}): ${car.horsepower}, ${car.engine}, ${car.drivetrain}. ${car.overview.slice(0, 120)}...`;

  return {
    title,
    description,
    alternates: { canonical: `/cars/${car.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/cars/${car.slug}`
    },
    keywords: [car.name, car.chassisCode, car.engineCode, car.manufacturer, ...car.tags]
  };
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 py-2.5 border-b border-graphite-700 last:border-b-0">
      <dt className="text-sm text-chalk-dim">{label}</dt>
      <dd className="text-sm font-mono text-chalk text-right">{value}</dd>
    </div>
  );
}

function Section({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-8 border-b border-graphite-700">
      <h2 className="font-display text-xl sm:text-2xl font-semibold text-chalk mb-4">
        {title}
      </h2>
      <div className="text-chalk-dim leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

export default async function CarDetailPage({ params }: Props) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) notFound();

  const related = getCarsByManufacturer(car.manufacturer)
    .filter((c) => c.slug !== car.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Car",
    name: car.name,
    manufacturer: car.manufacturer,
    vehicleEngine: car.engine,
    driveWheelConfiguration: car.drivetrain,
    productionDate: car.years,
    description: car.overview
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="text-xs text-chalk-dim mb-6 font-mono">
        <Link href="/cars" className="hover:text-redline-bright">
          Encyclopedia
        </Link>{" "}
        / <span className="text-chalk">{car.name}</span>
      </nav>

      {/* Hero */}
      <div className="mb-8">
        <p className="font-mono text-redline-bright text-sm uppercase tracking-widest mb-2">
          {car.manufacturer} &middot; {car.chassisCode}
        </p>
        <h1 className="font-display text-3xl sm:text-5xl font-semibold text-chalk">
          {car.name}
        </h1>
        <p className="mt-4 text-lg text-chalk-dim max-w-3xl">{car.overview}</p>
      </div>

      <div className="aspect-[16/9] w-full rounded-lg spec-plate flex items-center justify-center mb-10">
        <span className="font-display text-4xl text-chalk-dim/20 uppercase tracking-widest">
          {car.name}
        </span>
      </div>

      {/* Spec plate */}
      <div className="rounded-lg spec-plate p-6 mb-10">
        <h2 className="font-display text-lg uppercase tracking-wide text-chalk mb-4">
          Spec Sheet
        </h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          <div>
            <SpecRow label="Generation / Chassis Code" value={car.chassisCode} />
            <SpecRow label="Years Produced" value={car.years} />
            <SpecRow label="Manufacturer" value={car.manufacturer} />
            <SpecRow label="Country" value={car.country} />
            <SpecRow label="Body Style" value={car.bodyStyle} />
            <SpecRow label="Engine" value={car.engine} />
          </div>
          <div>
            <SpecRow label="Horsepower" value={car.horsepower} />
            <SpecRow label="Torque" value={car.torque} />
            <SpecRow label="Transmission" value={car.transmission} />
            <SpecRow label="Drivetrain" value={car.drivetrain} />
            <SpecRow label="Weight" value={car.weight} />
            <SpecRow label="0–60 mph" value={car.zeroToSixty} />
          </div>
        </dl>
      </div>

      <Link
        href={`/compare?a=${car.slug}`}
        className="inline-block mb-10 rounded-md border border-graphite-600 px-5 py-2.5 font-display text-sm uppercase tracking-wide text-chalk hover:border-redline transition-colors"
      >
        Compare this car →
      </Link>

      <Section title="History">
        <p>{car.history}</p>
      </Section>

      <Section title="Why It Became Famous">
        <p>{car.whyFamous}</p>
      </Section>

      <Section title="Strengths">
        <ul className="list-disc list-inside space-y-2">
          {car.strengths.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </Section>

      <Section title="Weaknesses">
        <ul className="list-disc list-inside space-y-2">
          {car.weaknesses.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </Section>

      <Section title="Common Problems">
        <ul className="list-disc list-inside space-y-2">
          {car.commonProblems.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </Section>

      <Section title="Modification Potential">
        <p>{car.modPotential}</p>
      </Section>

      <Section title="Buying Guide">
        <p>{car.buyingGuide}</p>
      </Section>

      <Section title="Enthusiast Popularity Today">
        <p>{car.popularity}</p>
      </Section>

      <Section title="Fun Facts">
        <ul className="list-disc list-inside space-y-2">
          {car.funFacts.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </Section>

      {related.length > 0 && (
        <div className="pt-8">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-chalk mb-6">
            More from {car.manufacturer}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((c) => (
              <CarCard key={c.slug} car={c} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
