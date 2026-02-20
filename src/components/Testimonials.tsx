const testimonials = [
  {
    quote:
      "Honest, thoughtful, responsive, and professional. They quickly gained a firm understanding of what we were attempting and even gave us ideas we had not thought of. Cannot recommend them enough!",
    author: "Paul",
    role: "Founder & CEO",
    company: "Memorygram",
  },
  {
    quote:
      "GreenAxis created a great platform that worked well without bugs. They were friendly, down-to-earth, and hardworking. Their customer service also took the stress off our shoulders.",
    author: "Sarah",
    role: "Founder",
    company: "Recruiticka",
  },
  {
    quote:
      "We worked with the team to build our SaaS product and couldn't be happier with the outcome. From start to finish they were great to work with. Highly skilled and brought a wealth of experience to the project.",
    author: "Daniel",
    role: "Founder",
    company: "Krispy",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Testimonials
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          What our clients think
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
          Feedback from teams we've partnered with.
        </p>
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ quote, author, role, company }) => (
            <li
              key={company}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-[var(--greenaxis-card)] p-8 shadow-sm"
            >
              <p className="text-gray-700 dark:text-gray-300">
                &ldquo;{quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                {author}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {role} @ {company}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
