"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-greenaxis-200/50 dark:border-greenaxis-800/50 bg-[var(--greenaxis-bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-greenaxis-800 dark:text-greenaxis-200"
        >
          GreenAxis
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-greenaxis-700 dark:text-greenaxis-300 hover:text-greenaxis-600 dark:hover:text-greenaxis-400 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-greenaxis-200/50 dark:border-greenaxis-800/50 bg-[var(--greenaxis-bg)] px-6 py-4 flex flex-col gap-3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-greenaxis-700 dark:text-greenaxis-300"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
