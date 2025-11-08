import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-slate-600">&copy; {new Date().getFullYear()} Agentic Insights, Inc. All rights reserved.</p>
        <div className="flex gap-4 text-sm text-slate-600">
          <Link href="#privacy" className="transition hover:text-slate-900">
            Privacy
          </Link>
          <Link href="#terms" className="transition hover:text-slate-900">
            Terms
          </Link>
          <Link href="#security" className="transition hover:text-slate-900">
            Security
          </Link>
        </div>
      </div>
    </footer>
  );
}
