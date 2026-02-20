export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-greenaxis-200/50 dark:border-greenaxis-800/50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-greenaxis-900 dark:text-greenaxis-100 sm:text-4xl">
              Built on clarity and delivery
            </h2>
            <p className="mt-6 text-lg text-greenaxis-700 dark:text-greenaxis-300">
              GreenAxis exists to build software the right way: clear scope,
              modern stack, and outcomes you can measure. We work as an
              extension of your team—aligned on goals and transparent on
              progress.
            </p>
            <p className="mt-4 text-lg text-greenaxis-700 dark:text-greenaxis-300">
              Whether you need a new product from scratch, a legacy system
              modernized, or ongoing support, we bring the same focus on quality
              and speed.
            </p>
          </div>
          <div className="rounded-2xl border border-greenaxis-200/80 dark:border-greenaxis-800/80 bg-greenaxis-50/50 dark:bg-greenaxis-950/30 p-8 lg:p-10">
            <ul className="space-y-4 font-mono text-sm text-greenaxis-700 dark:text-greenaxis-300">
              <li className="flex gap-3">
                <span className="text-greenaxis-500">→</span>
                <span>Outcome-focused development</span>
              </li>
              <li className="flex gap-3">
                <span className="text-greenaxis-500">→</span>
                <span>Modern, maintainable stacks</span>
              </li>
              <li className="flex gap-3">
                <span className="text-greenaxis-500">→</span>
                <span>Transparent process and pricing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-greenaxis-500">→</span>
                <span>Long-term support and iteration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
