'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

/**
 * The hero aperture — reads as looking THROUGH a deep arched opening carved
 * into a wall, not a photo cropped to an arch.
 *
 * Depth is driven by SCROLL, not the pointer: as the arch travels through the
 * viewport, the scene inside drifts vertically against the scroll while the
 * arched opening (soffit shadow + vignette) stays fixed — so the room behind
 * slides past the opening exactly as it would through a real window. The
 * scene is scaled up so its edges never enter the opening as it drifts.
 *
 * Layers:
 *  - scene: the theme-swapped photo, parallaxed by --sp (scroll progress).
 *  - atmosphere: daylight from the top, shadow gathering at the base.
 *  - soffit/occlusion: the wall's thickness casting shadow inward — this is
 *    what makes it read as bored through solid wall, not framed on the page.
 *
 * Parallax is disabled under prefers-reduced-motion; the static state still
 * reads as a recess thanks to the soffit + vignette.
 *
 * NOTE (still open): the laptop screen in the dark source photo shows a
 * placeholder "client" logo strip (Huel / Savage x Fenty / Barry's /
 * Represent) — not real Coltura clients. Needs replacing before a real launch.
 */
export default function ArchImage() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const scene = sceneRef.current;
    if (!wrap || !scene) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;

    function update() {
      ticking = false;
      const w = wrapRef.current;
      const s = sceneRef.current;
      if (!w || !s) return;
      const rect = w.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // -1 (arch below viewport) → 0 (centred) → 1 (above viewport)
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

  const archRadius = '50% 50% 0 0 / 32% 32% 0 0';

  return (
    <div ref={wrapRef} className="relative mx-auto w-full max-w-[440px] sm:max-w-[480px]">
      <div
        className="relative aspect-[4/5] w-full overflow-hidden"
        style={{
          borderRadius: archRadius,
          boxShadow: '0 40px 80px -40px rgba(0,0,0,0.45), 0 2px 0 rgba(255,255,255,0.04)',
        }}
      >
        {/* Scene — parallaxed by scroll. Scaled up so drift never reveals edges. */}
        <div
          ref={sceneRef}
          className="absolute inset-0"
          style={{
            transform: 'scale(1.2) translateY(calc(var(--sp, 0) * 38px))',
            willChange: 'transform',
          }}
        >
          <Image
            src="/images/arch-hero-light.png"
            alt="A laptop showing a Coltura website design on a wooden desk inside a sunlit plaster archway, with a branded gecko mug alongside"
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

        {/* Atmosphere: daylight from the top, shadow at the base of the recess. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,250,240,0.16) 0%, rgba(0,0,0,0) 26%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.28) 100%)',
          }}
        />

        {/* Soffit + occlusion: the wall's thickness casting shadow inward. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            borderRadius: archRadius,
            boxShadow:
              'inset 0 34px 44px -14px rgba(0,0,0,0.62), inset 0 -22px 34px -20px rgba(0,0,0,0.4), inset 28px 0 40px -26px rgba(0,0,0,0.4), inset -28px 0 40px -26px rgba(0,0,0,0.4), inset 0 3px 2px -2px rgba(255,255,255,0.22)',
          }}
        />
      </div>
    </div>
  );
}
