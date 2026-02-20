import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-greenaxis-200/50 dark:border-greenaxis-800/50 bg-[var(--greenaxis-card)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-lg font-semibold text-greenaxis-800 dark:text-greenaxis-200"
          >
            GreenAxis
          </Link>
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link
              href="#services"
              className="text-greenaxis-600 dark:text-greenaxis-400 hover:text-greenaxis-700 dark:hover:text-greenaxis-300"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-greenaxis-600 dark:text-greenaxis-400 hover:text-greenaxis-700 dark:hover:text-greenaxis-300"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-greenaxis-600 dark:text-greenaxis-400 hover:text-greenaxis-700 dark:hover:text-greenaxis-300"
            >
              Contact
            </Link>
          </nav>
        </div>
        <p className="mt-8 text-sm text-greenaxis-600 dark:text-greenaxis-400">
          © {year} GreenAxis. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
