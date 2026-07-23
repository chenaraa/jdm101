import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <p className="font-mono text-redline-bright text-sm uppercase tracking-widest mb-4">
        Error 404
      </p>
      <h1 className="font-display text-4xl font-semibold text-chalk mb-4">
        This car isn&rsquo;t in the garage.
      </h1>
      <p className="text-chalk-dim mb-8">
        The page you&rsquo;re looking for doesn&rsquo;t exist. It might have
        been moved, or the chassis code might be off by a letter.
      </p>
      <Link
        href="/cars"
        className="inline-block rounded-md bg-redline px-6 py-3 font-display uppercase tracking-wide text-sm text-chalk hover:bg-redline-bright transition-colors"
      >
        Browse the Encyclopedia
      </Link>
    </div>
  );
}
