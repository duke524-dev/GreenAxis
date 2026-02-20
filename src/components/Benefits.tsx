const benefits = [
  {
    title: "Affordable, high-quality solutions",
    description:
      "We deliver premium software at competitive prices without compromising on quality. Our cost-effective approach ensures you get maximum value while maintaining high standards.",
  },
  {
    title: "Versatile and skilled team",
    description:
      "Our team includes experienced developers, designers, and project managers. From frontend to backend, mobile to web, we have the expertise to handle any technical challenge.",
  },
  {
    title: "Latest technology trends",
    description:
      "We stay ahead by continuously adopting the latest technologies and best practices. Your projects are built with modern, scalable, and future-proof solutions.",
  },
  {
    title: "Client-focused and transparent",
    description:
      "We prioritize your success with open communication, regular updates, and complete transparency throughout the process. Your goals become our goals.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="scroll-mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Exclusive benefits
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          You should choose us
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
          We offer affordable, high-quality solutions with a skilled, versatile
          team that stays ahead of tech trends. Our client-focused, transparent
          approach ensures success.
        </p>
        <ul className="mt-16 grid gap-8 sm:grid-cols-2">
          {benefits.map(({ title, description }) => (
            <li
              key={title}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-[var(--greenaxis-card)] p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {title}
              </h3>
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
