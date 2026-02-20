const projects = [
  {
    title: "Memorygram",
    category: "United States · June 2025",
    summary:
      "Successful SaaS product that helps clients generate books of memories for their loved ones.",
  },
  {
    title: "Brainie Group",
    category: "Switzerland · July 2023",
    summary:
      "A custom-built financial educational SaaS platform that increased conversion and engagement rates.",
  },
  {
    title: "Platform & API",
    category: "Fintech",
    summary:
      "Core platform and public API for a payments product, built for scale and compliance.",
  },
];

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Our work
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Case studies
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
          A selection of what we've shipped with our clients.
        </p>
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, category, summary }) => (
            <li
              key={title}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-[var(--greenaxis-card)] p-8 transition-shadow hover:shadow-lg"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {category}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                {title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {summary}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
