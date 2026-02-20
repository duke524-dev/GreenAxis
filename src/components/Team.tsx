const team = [
  {
    name: "Team Leader",
    role: "Team Leader",
    bio: "Leading our development team with strategic vision and technical expertise to deliver exceptional results.",
  },
  {
    name: "Business Leader",
    role: "Business Leader",
    bio: "Driving business growth through innovative strategies and strong client relationships.",
  },
  {
    name: "Tech Leader",
    role: "Tech Leader",
    bio: "Architecting cutting-edge solutions with deep technical knowledge and innovative thinking.",
  },
];

export function Team() {
  return (
    <section id="team" className="scroll-mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Our team
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          The people behind GreenAxis
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
          Developers, designers, and innovators who bring your ideas to life
          with creativity and technical excellence.
        </p>
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map(({ name, role, bio }) => (
            <li
              key={name}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-[var(--greenaxis-card)] p-8 shadow-sm"
            >
              <div className="h-24 w-24 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-2xl font-bold text-gray-700 dark:text-gray-300">
                {name.charAt(0)}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                {name}
              </h3>
              <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                {role}
              </p>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {bio}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
