"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#process", label: "How we work" },
  { href: "#work", label: "Our Work" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-[var(--greenaxis-bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
        >
          GreenAxis
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="flex flex-col gap-1.5 p-2"
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
      </div>
      {open && (
        <nav className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-[var(--greenaxis-bg)] px-6 py-4 flex flex-col gap-3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
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
