import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-28 md:pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--greenaxis-bg)_0%,transparent_50%),linear-gradient(90deg,transparent_60%,rgba(34,197,94,0.03)_100%)]" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
          We build software that
          <span className="block text-gray-600 dark:text-gray-400">
            grows with you.
          </span>
        </h1>
        <p className="mt-4 text-xl font-medium text-greenaxis-700 dark:text-greenaxis-300 sm:text-2xl">
          Reliability. Agility. Delivered.
        </p>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 sm:text-xl max-w-2xl mx-auto">
          From the first spark of an idea to the final product, GreenAxis is
          with you every step of the way. We blend creativity, technology, and
          strategy to build experiences that move people and grow businesses.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#contact"
            className="rounded-lg bg-greenaxis-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-greenaxis-600/25 hover:bg-greenaxis-700 transition-colors"
          >
            Schedule a Call
          </Link>
          <Link
            href="#work"
            className="rounded-lg border border-gray-300 dark:border-gray-600 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
