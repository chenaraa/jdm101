import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-graphite-700 bg-graphite-950/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <span className="font-display text-2xl font-semibold tracking-tight text-chalk">
              JDM<span className="text-redline">101</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 font-display text-sm uppercase tracking-wide text-chalk-dim">
            <Link href="/cars" className="hover:text-redline transition-colors">
              Encyclopedia
            </Link>
            <Link href="/quiz" className="hover:text-redline transition-colors">
              JDM Matchmaker
            </Link>
            <Link href="/compare" className="hover:text-redline transition-colors">
              Compare
            </Link>
          </nav>

          <div className="hidden sm:block w-full max-w-xs">
            <SearchBar compact />
          </div>
        </div>
      </div>
    </header>
  );
}
