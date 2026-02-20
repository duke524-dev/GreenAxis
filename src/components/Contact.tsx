"use client";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 dark:border-gray-800 bg-[var(--greenaxis-card)] p-10 shadow-sm sm:p-12">
          <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Contact us now
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Request a free consultation with us
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Ready to transform your ideas into reality? Let&apos;s discuss your
            project and explore how we can help.
          </p>
          <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="mt-2 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--greenaxis-bg)] px-4 py-3 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 focus:border-greenaxis-500 focus:outline-none focus:ring-1 focus:ring-greenaxis-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="What are you looking to build?"
                className="mt-2 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--greenaxis-bg)] px-4 py-3 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 focus:border-greenaxis-500 focus:outline-none focus:ring-1 focus:ring-greenaxis-500"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-greenaxis-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-greenaxis-600/25 hover:bg-greenaxis-700 transition-colors sm:w-auto"
            >
              Send message
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We&apos;ll get back to you within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
