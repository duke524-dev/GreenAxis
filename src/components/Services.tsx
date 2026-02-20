const services = [
  {
    title: "Web Development",
    tagline: "Build web apps",
    description:
      "Custom web applications tailored to your workflows, from MVP to scale.",
    icon: "◇",
  },
  {
    title: "Mobile Apps",
    tagline: "Apps for mobile",
    description:
      "iOS and Android apps that perform and scale with your users.",
    icon: "▣",
  },
  {
    title: "UI/UX Design",
    tagline: "Simple UI/UX",
    description:
      "Clean, intuitive interfaces that engage users and drive results.",
    icon: "◈",
  },
  {
    title: "Backend Systems",
    tagline: "Server logic",
    description:
      "APIs, databases, and backend architecture built for reliability.",
    icon: "▤",
  },
  {
    title: "DevOps & Hosting",
    tagline: "Deploy & host",
    description:
      "Infrastructure, CI/CD, and managed hosting so you focus on product.",
    icon: "⬡",
  },
  {
    title: "Dedicated Team",
    tagline: "Your dev team",
    description:
      "A dedicated team that integrates with your process and delivers.",
    icon: "◉",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Our services
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Core technology services
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
          We provide full software solutions — web and mobile apps, UI/UX
          design, backend systems, DevOps & hosting, and dedicated development
          teams — delivering high-quality, scalable products tailored to your
          needs.
        </p>
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, tagline, description, icon }) => (
            <li
              key={title}
              className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-[var(--greenaxis-card)] p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-2xl text-gray-500 dark:text-gray-400">
                {icon}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                {title}
              </h3>
              <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                {tagline}
              </p>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
