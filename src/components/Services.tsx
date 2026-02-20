const services = [
  {
    title: "Custom software",
    description:
      "Web and mobile applications tailored to your workflows, from MVP to scale.",
    icon: "◇",
  },
  {
    title: "Cloud & infrastructure",
    description:
      "Architecture, DevOps, and managed services so you focus on product.",
    icon: "▣",
  },
  {
    title: "Product development",
    description:
      "End-to-end ownership: discovery, design, build, and iteration.",
    icon: "◈",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-greenaxis-200/50 dark:border-greenaxis-800/50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-greenaxis-900 dark:text-greenaxis-100 sm:text-4xl">
          What we do
        </h2>
        <p className="mt-3 text-lg text-greenaxis-700 dark:text-greenaxis-300 max-w-2xl">
          We partner with startups and enterprises to ship software that lasts.
        </p>
        <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon }) => (
            <li
              key={title}
              className="group rounded-2xl border border-greenaxis-200/80 dark:border-greenaxis-800/80 bg-[var(--greenaxis-card)] p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-2xl text-greenaxis-500 dark:text-greenaxis-400">
                {icon}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-greenaxis-900 dark:text-greenaxis-100">
                {title}
              </h3>
              <p className="mt-2 text-greenaxis-600 dark:text-greenaxis-400">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
