// A full-height statement that PINS (position: sticky, z-0) and stays perfectly
// still while the next section (Services, z-10) physically slides UP IN FRONT of
// it and covers it — a stacking-panel effect (see page.tsx). Nothing about the
// text moves, scales or fades: the opaque panel simply rises over it and hides
// it. The depth comes purely from one panel being in front of another.
export default function Statement() {
  return (
    <section className="sticky top-0 z-0 flex min-h-screen items-center justify-center overflow-hidden bg-bg px-5 py-24 sm:px-8">
      {/* faint oversized glow for depth, well behind the text */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgb(var(--brand) / 0.05) 0%, transparent 60%)' }}
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
