import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Backend Systems",
  "DevOps & Hosting",
  "Dedicated Team",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-[var(--greenaxis-card)]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block" aria-label="GreenAxis home">
              <Image
                src="/img/logo_1.svg"
                alt="GreenAxis"
                height={56}
                width={186}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-sm">
              Building innovative software solutions that grow with your
              business. From web development to mobile apps, we bring your ideas
              to life.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <Link
                    href="#services"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Email
                </span>
                <br />
                hello@greenaxis.com
              </li>
              <li className="pt-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Opening hours
                </span>
                <br />
                9am–6pm Mon–Fri
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 dark:border-gray-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {year} GreenAxis. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm">
            <Link
              href="#contact"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              Privacy policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
