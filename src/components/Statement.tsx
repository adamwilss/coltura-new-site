// A "super clean" full-height statement that PINS while the following section
// slides up and covers it (the stacking-panels effect). The pin is pure CSS
// `position: sticky` — see page.tsx, where this sits with its covering section
// inside one relative wrapper so the sticky range is limited to that pair.
//
// Content is real: the problem-statement headline from coltura.uk. Kept
// deliberately spare — one line, one supporting sentence, lots of air.
export default function Statement() {
  return (
    <section className="sticky top-0 z-0 flex min-h-screen items-center justify-center overflow-hidden bg-bg px-5 py-24 sm:px-8">
      {/* faint oversized arch outline for depth, well behind the text */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.5]"
        style={{
          background: 'radial-gradient(circle, rgb(var(--brand) / 0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="mx-auto mb-7 block h-px w-10 bg-brand/55" />
        <h2 className="text-balance font-heading text-[clamp(2rem,5.2vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.015em] text-ink">
          Your website has one job: turn visitors into{' '}
          <span className="text-brand">customers.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted">
          Most sites don&apos;t fail loudly. They fail quietly — a slow page, a missing
          detail, a weak call to action — until the enquiries simply stop.
        </p>
      </div>
    </section>
  );
}
