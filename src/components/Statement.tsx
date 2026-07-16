'use client';

import { useEffect, useRef } from 'react';

/**
 * A "super clean" full-height statement that PINS (position: sticky) while the
 * next section rises up and covers it (stacking panels — see page.tsx).
 *
 * To avoid the pinned text lingering or peeking through the covering panel's
 * rounded corners, its content is faded + scaled DOWN in lockstep with how far
 * the next section has risen: by the time the panel covers the viewport the
 * statement has fully receded to nothing. Reads as the statement falling away
 * into the distance. No-ops under prefers-reduced-motion (it simply stays put,
 * still cleanly covered by the opaque panel).
 */
export default function Statement() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    function update() {
      ticking = false;
      const sec = sectionRef.current;
      const content = contentRef.current;
      const next = sec?.nextElementSibling as HTMLElement | null;
      if (!sec || !content || !next) return;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // 0 while the covering panel is still below the fold; 1 once it has
      // risen to the top of the viewport (fully covering).
      let cover = 1 - next.getBoundingClientRect().top / vh;
      cover = Math.max(0, Math.min(1, cover));
      // The centred text is the LAST thing the rising panel reaches, so it must
      // be fully gone before the panel's edge climbs past it — otherwise its
      // top line pokes above the panel at partial opacity. Complete the fade
      // early (by ~55% of the cover) so it disappears cleanly behind the panel.
      const fade = Math.min(1, cover / 0.55);
      content.style.opacity = String(1 - fade);
      content.style.transform = `scale(${(1 - fade * 0.05).toFixed(4)}) translateY(${(fade * -24).toFixed(1)}px)`;
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(update);
      }
    }
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 z-0 flex min-h-screen items-center justify-center overflow-hidden bg-bg px-5 py-24 sm:px-8"
    >
      {/* faint oversized arch glow for depth, well behind the text */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgb(var(--brand) / 0.05) 0%, transparent 60%)' }}
      />

      <div
        ref={contentRef}
        className="relative mx-auto max-w-3xl text-center"
        style={{ willChange: 'opacity, transform' }}
      >
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
