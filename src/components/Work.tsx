const projects = [
  {
    title: "Platform & API",
    category: "Fintech",
    summary: "Core platform and public API for a payments product, built for scale and compliance.",
  },
  {
    title: "Internal tools",
    category: "Logistics",
    summary: "Operations dashboard and automation that cut manual work by 60%.",
  },
  {
    title: "Consumer app",
    category: "Health",
    summary: "Mobile-first experience for scheduling and telehealth, from zero to launch.",
  },
];

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-greenaxis-200/50 dark:border-greenaxis-800/50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-greenaxis-900 dark:text-greenaxis-100 sm:text-4xl">
          Selected work
        </h2>
        <p className="mt-3 text-lg text-greenaxis-700 dark:text-greenaxis-300 max-w-2xl">
          A few examples of what we’ve shipped with our clients.
        </p>
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, category, summary }) => (
            <li
              key={title}
              className="rounded-2xl border border-greenaxis-200/80 dark:border-greenaxis-800/80 bg-[var(--greenaxis-card)] p-8 transition-shadow hover:shadow-lg"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-greenaxis-500 dark:text-greenaxis-400">
                {category}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-greenaxis-900 dark:text-greenaxis-100">
                {title}
              </h3>
              <p className="mt-2 text-greenaxis-600 dark:text-greenaxis-400">
                {summary}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
