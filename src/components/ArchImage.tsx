'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

/**
 * The hero portal — built to read as a deep opening carved into a wall, seen
 * head-on, with a genuine sense of depth.
 *
 * What makes it read 3D (rather than a photo cropped to an arch):
 *  - DIRECTIONAL light: a crisp bright lip on the top & left front edges (the
 *    near face of the wall catching light) and a dark lip bottom & right, so
 *    the opening has a physical near surface.
 *  - A graduated SOFFIT: heavy shadow raking in from every inner edge,
 *    strongest at the top where the arch overhangs — the thickness of the
 *    wall the opening is bored through.
 *  - A lit POOL in the scene (light falling in from the upper-left) so the
 *    centre sits forward of the shadowed edges.
 *  - A scroll-driven DOLLY: the scene scales up and drifts as you move down
 *    the page, so it feels like advancing through the opening — not a flat
 *    parallax nudge. Disabled under prefers-reduced-motion.
 *
 * NOTE (still open): the dark source photo's laptop screen shows a placeholder
 * client-logo strip (Huel / Savage x Fenty / Barry's / Represent) — not real
 * clients. Replace before a real launch.
 */
export default function ArchImage() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    function update() {
      ticking = false;
      const w = wrapRef.current;
      const s = sceneRef.current;
      if (!w || !s) return;
      const rect = w.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const center = rect.top + rect.height / 2;
      // 1 (portal below viewport) → 0 (centred) → -1 (above viewport)
      let p = (center - vh / 2) / (vh / 2 + rect.height / 2);
      p = Math.max(-1, Math.min(1, p));
      s.style.setProperty('--sp', p.toFixed(4));
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

  const archRadius = '50% 50% 0 0 / 34% 34% 0 0';

  return (
    <div ref={wrapRef} className="relative mx-auto w-full max-w-[440px] sm:max-w-[480px]">
      <div
        className="relative aspect-[4/5] w-full overflow-hidden"
        style={{
          borderRadius: archRadius,
          // Grounds the wall and gives its near face a lit top edge.
          boxShadow:
            '0 50px 90px -45px rgba(0,0,0,0.55), 0 -1px 0 1px rgba(0,0,0,0.04)',
        }}
      >
        {/* Scene — dollies (scale) + drifts on scroll, so you advance through
            the opening. Scaled up so movement never reveals its edges. */}
        <div
          ref={sceneRef}
          className="absolute inset-0"
          style={{
            transform:
              'scale(calc(1.27 - var(--sp, 0) * 0.07)) translateY(calc(var(--sp, 0) * 44px))',
            willChange: 'transform',
          }}
        >
          <Image
            src="/images/arch-hero-light.png"
            alt="A laptop showing a Coltura website design on a wooden desk, seen through a sunlit plaster archway"
            fill
            priority
            sizes="(min-width: 1024px) 480px, 90vw"
            className="theme-fade object-cover opacity-100 transition-opacity duration-250 dark:opacity-0"
          />
          <Image
            src="/images/arch-hero-dark.png"
            alt="The same laptop and archway at dusk, lit by warm lamp light"
            fill
            sizes="(min-width: 1024px) 480px, 90vw"
            className="theme-fade object-cover opacity-0 transition-opacity duration-250 dark:opacity-100"
          />
        </div>

        {/* Light pooling into the recess from the upper-left. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(115% 85% at 40% 32%, rgba(255,249,240,0.18) 0%, rgba(255,249,240,0) 52%), linear-gradient(180deg, rgba(255,250,240,0.12) 0%, rgba(0,0,0,0) 24%, rgba(0,0,0,0) 58%, rgba(0,0,0,0.34) 100%)',
          }}
        />

        {/* The recess itself: graduated soffit shadow raking in from every
            edge (heaviest at the top overhang), plus a soft lit band on the
            upper-left inner wall where light grazes it. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            borderRadius: archRadius,
            boxShadow:
              'inset 0 44px 52px -16px rgba(0,0,0,0.72), inset 24px 0 46px -26px rgba(0,0,0,0.5), inset -24px 0 46px -26px rgba(0,0,0,0.5), inset 0 -28px 42px -22px rgba(0,0,0,0.46), inset 20px 26px 34px -30px rgba(255,248,236,0.6)',
          }}
        />

        {/* The wall's near face: a crisp bright lip on the top & left edges,
            a dark lip on the bottom & right — the single strongest cue that
            this is a solid surface with an opening cut through it. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            borderRadius: archRadius,
            boxShadow:
              'inset 0 3px 1px -1px rgba(255,255,255,0.6), inset 3px 0 1px -1px rgba(255,255,255,0.32), inset 0 -2px 1px -1px rgba(0,0,0,0.45), inset -2px 0 1px -1px rgba(0,0,0,0.4)',
          }}
        />
      </div>
    </div>
  );
}
