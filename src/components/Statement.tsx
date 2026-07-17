'use client';

import { useEffect, useRef } from 'react';

// A full-height statement that PINS (position: sticky) while the next section
// (Services) rises up in front of it. Rather than a flat 2D clip — where the
// panel just slides over crisp, static text like a sheet of paper — the
// statement RECEDES in 3D as it's covered: it scales back, drifts up, softens
// (blur), dims and fades, so it reads as physically sinking BEHIND the panel
// coming forward. See the stacking wrapper in page.tsx.
//
// Driven by a cheap rAF scroll handler writing a single --cover custom property
// (0 → 1), matching the ParallaxImage approach. No-ops under prefers-reduced-
// motion, where the opaque covering panel alone hides it.
export default function Statement() {
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const section = sectionRef.current;
    const wrap = section?.parentElement; // relative wrapper holding Statement + Services
    if (!section || !wrap) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // While pinned, the wrapper top travels 0 → -vh as Services rises a full
      // screen to fully cover. Normalise to raw progress, then remap so the
      // recede completes right as the panel finishes occluding the text (the
      // centred copy is gone by ~two-thirds of the travel).
      const top = wrap.getBoundingClientRect().top;
      const raw = Math.max(0, Math.min(1, -top / vh));
      const cover = Math.min(1, raw / 0.66);
      section.style.setProperty('--cover', cover.toFixed(4));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(update);
      }
    };
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
      style={{ perspective: '1400px' }}
    >
      {/* faint oversized glow for depth, well behind the text */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgb(var(--brand) / 0.05) 0%, transparent 60%)' }}
      />
      <div
        className="relative mx-auto max-w-3xl text-center"
        style={{
          transformOrigin: 'center center',
          transform:
            'translateY(calc(var(--cover, 0) * -3rem)) scale(calc(1 - var(--cover, 0) * 0.16)) rotateX(calc(var(--cover, 0) * -7deg))',
          filter:
            'blur(calc(var(--cover, 0) * 6px)) brightness(calc(1 - var(--cover, 0) * 0.5))',
          // Stay fully crisp while prominent, then fade away over the last of
          // the travel as the panel seals over it.
          opacity: 'calc(1 - max(0, var(--cover, 0) - 0.45) * 1.7)',
          willChange: 'transform, filter, opacity',
        }}
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
