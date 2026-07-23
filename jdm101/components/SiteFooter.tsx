import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-graphite-700 bg-graphite-900 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <span className="font-display text-xl font-semibold text-chalk">
              JDM<span className="text-redline">101</span>
            </span>
            <p className="mt-3 text-sm text-chalk-dim max-w-xs">
              The beginner-friendly encyclopedia of iconic Japanese Domestic
              Market cars — specs, history, and buying guides for enthusiasts
              at every level.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-wide text-chalk mb-3">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-chalk-dim">
              <li>
                <Link href="/cars" className="hover:text-redline transition-colors">
                  Car Encyclopedia
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:text-redline transition-colors">
                  JDM Matchmaker Quiz
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-redline transition-colors">
                  Compare Cars
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-wide text-chalk mb-3">
              About
            </h3>
            <p className="text-sm text-chalk-dim max-w-xs">
              JDM101 is an independent enthusiast resource and is not
              affiliated with Nissan, Toyota, Honda, Mazda, Mitsubishi,
              Subaru, or Suzuki. Specs are approximate and sourced from
              public manufacturer data for educational purposes.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-graphite-700 text-xs text-chalk-dim">
          © {new Date().getFullYear()} JDM101. Built for enthusiasts, by enthusiasts.
        </div>
      </div>
    </footer>
  );
}
