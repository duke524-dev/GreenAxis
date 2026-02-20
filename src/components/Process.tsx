import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Join exploration call",
    description:
      "Tell us more about your business on a discovery call. We'll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help.",
  },
  {
    number: "2",
    title: "Discuss solution and team structure",
    description:
      "In a matter of days, we will finalize your project specifications, agree on an engagement model, and select and onboard your team.",
  },
  {
    number: "3",
    title: "Get started and track performance",
    description:
      "Once we've agreed on milestones, we'll get to work. We'll track progress, report updates, and continuously adapt to your needs.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
          How we work
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Our process. Simple, seamless, streamlined.
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
          We follow a clear and collaborative process — from understanding your
          goals, to building the right team, and delivering results with
          transparency and adaptability.
        </p>
        <ul className="mt-16 space-y-12 lg:space-y-16">
          {steps.map(({ number, title, description }) => (
            <li key={number} className="flex gap-8 lg:gap-12">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-lg font-bold text-gray-900 dark:text-gray-100">
                {number}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link
            href="#contact"
            className="inline-flex rounded-lg bg-greenaxis-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-greenaxis-600/25 hover:bg-greenaxis-700 transition-colors"
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </section>
  );
}
