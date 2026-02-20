"use client";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-greenaxis-200/50 dark:border-greenaxis-800/50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl rounded-2xl border border-greenaxis-200/80 dark:border-greenaxis-800/80 bg-[var(--greenaxis-card)] p-10 shadow-sm sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight text-greenaxis-900 dark:text-greenaxis-100">
            Let’s talk
          </h2>
          <p className="mt-4 text-lg text-greenaxis-700 dark:text-greenaxis-300">
            Tell us about your project or idea. We’ll get back with next steps
            and how we can help.
          </p>
          <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-greenaxis-800 dark:text-greenaxis-200"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="mt-2 block w-full rounded-lg border border-greenaxis-300 dark:border-greenaxis-600 bg-[var(--greenaxis-bg)] px-4 py-3 text-greenaxis-900 dark:text-greenaxis-100 placeholder:text-greenaxis-500 focus:border-greenaxis-500 focus:outline-none focus:ring-1 focus:ring-greenaxis-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-greenaxis-800 dark:text-greenaxis-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="What are you looking to build?"
                className="mt-2 block w-full rounded-lg border border-greenaxis-300 dark:border-greenaxis-600 bg-[var(--greenaxis-bg)] px-4 py-3 text-greenaxis-900 dark:text-greenaxis-100 placeholder:text-greenaxis-500 focus:border-greenaxis-500 focus:outline-none focus:ring-1 focus:ring-greenaxis-500"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-greenaxis-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-greenaxis-600/25 hover:bg-greenaxis-700 transition-colors sm:w-auto"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
