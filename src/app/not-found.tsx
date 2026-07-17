import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

/**
 * Even the 404 sells. Most sites treat this page as a dead end — which is
 * exactly the kind of leak the audit exists to find, so the page says so.
 */
export default function NotFound() {
  return (
    <main className="relative">
      <Nav />
      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-bg">
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-heading text-[clamp(16rem,42vw,34rem)] font-semibold leading-none text-ink/[0.04]"
        >
          404
        </span>
        <div className="relative mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Page not found
          </p>
          <h1 className="mb-5 text-balance font-heading text-[clamp(2rem,4.6vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
            This is a 404 page. Notice how it&rsquo;s still <span className="text-brand">trying to win you over?</span>
          </h1>
          <p className="mx-auto mb-9 max-w-lg text-lg leading-relaxed text-muted">
            On most websites, a dead link is where the customer gives up and rings someone
            else. Broken links are one of the first things we check in a free audit —
            because pages like this one shouldn&rsquo;t exist at all.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-brand px-8 text-sm font-bold tracking-[0.01em] text-on-brand shadow-[0_10px_24px_-8px_rgba(223,44,50,0.45)] transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
            >
              Back to the working site
            </a>
            <a
              href="/get-started"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-lg border border-line px-8 text-sm font-semibold text-ink transition-colors hover:border-ink/30 sm:w-auto"
            >
              Check my site for dead ends
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
