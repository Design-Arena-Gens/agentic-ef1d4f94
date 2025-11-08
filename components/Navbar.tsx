import Link from "next/link";

const navigation = [
  { name: "Platform", href: "#platform" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Pricing", href: "#pricing" },
  { name: "Stories", href: "#stories" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 backdrop-blur bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-semibold text-slate-900">
          Agentic Insights
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="transition hover:text-slate-900">
              {item.name}
            </Link>
          ))}
        </nav>
        <Link
          href="#waitlist"
          className="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-500"
        >
          Join Waitlist
        </Link>
      </div>
    </header>
  );
}
