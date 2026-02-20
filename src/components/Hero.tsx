import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--greenaxis-bg)_0%,transparent_50%),linear-gradient(90deg,transparent_60%,rgba(34,197,94,0.03)_100%)]" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-greenaxis-400/30 to-transparent" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-greenaxis-900 dark:text-greenaxis-100 sm:text-5xl md:text-6xl">
          Software that
          <span className="block text-greenaxis-600 dark:text-greenaxis-400">
            moves forward.
          </span>
        </h1>
        <p className="mt-6 text-lg text-greenaxis-700 dark:text-greenaxis-300 sm:text-xl max-w-2xl mx-auto">
          We build reliable products and platforms for teams that want to ship
          fast without cutting corners. Custom development, cloud, and digital
          products.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#contact"
            className="rounded-lg bg-greenaxis-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-greenaxis-600/25 hover:bg-greenaxis-700 transition-colors"
          >
            Start a project
          </Link>
          <Link
            href="#work"
            className="rounded-lg border border-greenaxis-300 dark:border-greenaxis-600 px-6 py-3 text-sm font-semibold text-greenaxis-700 dark:text-greenaxis-300 hover:bg-greenaxis-100 dark:hover:bg-greenaxis-900/50 transition-colors"
          >
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
