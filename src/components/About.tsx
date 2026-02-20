export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
          About us
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Our values and goals
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              GreenAxis empowers businesses, founders, and agencies with
              reliable, scalable software built right from day one. We focus on
              clean solutions and lasting partnerships founded on trust,
              clarity, and technical excellence.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Whether you need a new product from scratch, a legacy system
              modernized, or ongoing support, we bring the same focus on
              quality and speed.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-8 lg:p-10">
            <ul className="space-y-4 font-mono text-sm text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="text-gray-500">→</span>
                <span>Outcome-focused development</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500">→</span>
                <span>Modern, maintainable stacks</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500">→</span>
                <span>Transparent process and pricing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500">→</span>
                <span>Long-term support and iteration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
