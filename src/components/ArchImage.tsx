'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

/**
 * The hero portal image. Fills its parent (the parent controls size + position
 * — contained on mobile, bleeding off the page edge on desktop) and takes its
 * silhouette from `shapeClassName`.
 *
 * Depth cues so it reads as an opening, not a cropped photo:
 *  - a graduated soffit shadow raking in from the edges (wall thickness),
 *  - light pooling into the recess,
 *  - a scroll-driven DOLLY: the scene scales + drifts as you move down the
 *    page, so it feels like advancing through the opening.
 * Dolly is disabled under prefers-reduced-motion.
 *
 * NOTE (still open): the dark source photo's laptop screen shows a placeholder
 * client-logo strip (Huel / Savage x Fenty / Barry's / Represent) — not real
 * clients. Replace before a real launch.
 */
export default function ArchImage({ shapeClassName = 'hero-shape-mobile' }: { shapeClassName?: string }) {
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

  return (
    <div ref={wrapRef} className="absolute inset-0">
      <div
        className={`absolute inset-0 overflow-hidden ${shapeClassName}`}
        style={{ boxShadow: '0 50px 90px -45px rgba(0,0,0,0.5)' }}
      >
        {/* Scene — dollies (scale) + drifts on scroll. Scaled up so movement
            never reveals its edges. */}
        <div
          ref={sceneRef}
          className="absolute inset-0"
          style={{
            transform:
              'scale(calc(1.24 - var(--sp, 0) * 0.07)) translateY(calc(var(--sp, 0) * 42px))',
            willChange: 'transform',
          }}
        >
          {/* Two real photos, crossfaded by theme (mirrors the logo swap):
              the dark/dusk scene on the LIGHT theme, the bright scene on the
              DARK theme. NOTE: the bright photo's laptop screen shows a
              placeholder "trusted by" logo strip (Huel / Savage x Fenty /
              Barry's / Represent) — not real clients; replace before a real
              launch. */}
          <Image
            src="/images/arch-hero-light.png"
            alt="A Coltura website on a laptop in a warm, dusk-lit plaster archway"
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 90vw"
            className="theme-fade object-cover opacity-100 transition-opacity duration-250 dark:opacity-0"
          />
          <Image
            src="/images/arch-hero-dark.png"
            alt="A Coltura website on a laptop in a bright, sunlit plaster archway"
            fill
            sizes="(min-width: 1024px) 52vw, 90vw"
            className="theme-fade object-cover opacity-0 transition-opacity duration-250 dark:opacity-100"
          />
        </div>

        {/* Light pooling into the recess from the upper-left. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(115% 85% at 40% 32%, rgba(255,249,240,0.16) 0%, rgba(255,249,240,0) 52%), linear-gradient(180deg, rgba(255,250,240,0.1) 0%, rgba(0,0,0,0) 24%, rgba(0,0,0,0) 62%, rgba(0,0,0,0.26) 100%)',
          }}
        />

        {/* Soffit: graduated shadow raking in from the edges = wall thickness. */}
        <div
          className={`pointer-events-none absolute inset-0 ${shapeClassName}`}
          style={{
            boxShadow:
              'inset 0 40px 50px -16px rgba(0,0,0,0.6), inset 30px 0 50px -28px rgba(0,0,0,0.55), inset -24px 0 46px -26px rgba(0,0,0,0.4), inset 0 -28px 42px -22px rgba(0,0,0,0.4), inset 22px 26px 36px -32px rgba(255,248,236,0.55)',
          }}
        />
      </div>
    </div>
  );
}
