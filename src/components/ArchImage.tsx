'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef } from 'react';

/**
 * The hero aperture — designed to read as looking THROUGH a deep arched
 * opening carved into a stone wall, not a photo cropped to an arch shape.
 *
 * How the depth is built (back to front, all GPU-composited transforms):
 *  1. Wall panel — a raised plane a hair lighter than the page, with an
 *     outer drop shadow + inner rim light, so the arch reads as cut INTO
 *     something with mass, not floating on the page.
 *  2. The opening — arch-masked. Inside it:
 *       - the scene (theme-swapped photo), scaled up and PARALLAXED against
 *         the pointer, so far detail slides opposite to the cursor exactly
 *         as it would through a real opening — this is the core "look
 *         through" cue.
 *       - an atmospheric top-down light gradient + vignette (daylight
 *         falling into a recess).
 *       - a soffit/occlusion shadow ring: the thickness of the wall the
 *         opening is bored through, the near edge casting shadow inward.
 *  3. The whole wall tilts a few degrees toward the pointer (perspective),
 *     so the assembly behaves like a physical panel viewed slightly off-axis.
 *
 * Pointer parallax/tilt only runs for fine pointers (mouse) and is skipped
 * entirely under prefers-reduced-motion — the static state still reads as a
 * recessed arch thanks to the soffit, vignette and raised wall.
 *
 * NOTE (unchanged, still open): the laptop screen in both source photos
 * shows placeholder "client" logos (Huel / Savage x Fenty / Barry's /
 * Represent) that are NOT real Coltura clients — needs cropping/blurring or
 * regeneration before this ships.
 */
export default function ArchImage() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const wallRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const setVars = useCallback((rx: number, ry: number, px: number, py: number) => {
    const wall = wallRef.current;
    if (!wall) return;
    wall.style.setProperty('--rx', `${rx}deg`);
    wall.style.setProperty('--ry', `${ry}deg`);
    wall.style.setProperty('--px', `${px}px`);
    wall.style.setProperty('--py', `${py}px`);
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    function onMove(e: MouseEvent) {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 … 0.5
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        // Wall tilts toward the pointer; scene parallaxes the opposite way.
        setVars(-ny * 7, nx * 8, -nx * 24, -ny * 18);
      });
    }
    function onLeave() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setVars(0, 0, 0, 0);
    }

    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseleave', onLeave);
    return () => {
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseleave', onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [setVars]);

  const archRadius = '50% 50% 0 0 / 32% 32% 0 0';

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto w-full max-w-[440px] sm:max-w-[480px]"
      style={{ perspective: '1200px' }}
    >
      {/* Wall panel — raised plane the arch is carved into. Tilts toward pointer. */}
      <div
        ref={wallRef}
        className="relative transition-transform duration-300 ease-out"
        style={{
          // CSS vars default to 0 (rest state) until pointer handlers set them.
          transform: 'rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))',
          willChange: 'transform',
        }}
      >
        {/* The opening bored through the wall */}
        <div
          className="relative aspect-[4/5] w-full overflow-hidden"
          style={{
            borderRadius: archRadius,
            // Outer form of the recess: a soft drop shadow grounds the wall,
            // and a faint top rim-light gives the front edge of the opening
            // a lit lip. Kept subtle so it doesn't read as a floating card.
            boxShadow:
              '0 40px 80px -40px rgba(0,0,0,0.45), 0 2px 0 rgba(255,255,255,0.04)',
          }}
        >
          {/* Scene — light theme. Scaled up + parallaxed so its edges never
              enter the opening as the pointer moves. */}
          <Image
            src="/images/arch-hero-light.png"
            alt="A laptop showing a Coltura website design on a wooden desk inside a sunlit plaster archway, with a branded gecko mug alongside"
            fill
            priority
            sizes="(min-width: 1024px) 480px, 90vw"
            className="theme-fade absolute inset-0 object-cover opacity-100 dark:opacity-0"
            style={{
              transform: 'scale(1.16) translate(var(--px,0px), var(--py,0px))',
              transition: 'transform 350ms ease-out, opacity 250ms ease',
              willChange: 'transform',
            }}
          />
          {/* Scene — dark theme */}
          <Image
            src="/images/arch-hero-dark.png"
            alt="The same laptop and archway at dusk, lit by warm lamp light"
            fill
            sizes="(min-width: 1024px) 480px, 90vw"
            className="theme-fade absolute inset-0 object-cover opacity-0 dark:opacity-100"
            style={{
              transform: 'scale(1.16) translate(var(--px,0px), var(--py,0px))',
              transition: 'transform 350ms ease-out, opacity 250ms ease',
              willChange: 'transform',
            }}
          />

          {/* Atmosphere: daylight falling in from the top, gathering shadow
              at the base of the recess. */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,250,240,0.16) 0%, rgba(0,0,0,0) 26%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.28) 100%)',
            }}
          />

          {/* Soffit + occlusion: the wall's thickness. The near edge of the
              opening casts shadow inward on every side (stronger at the top,
              where the arch overhangs), which is what sells "bored through a
              solid wall" rather than "picture in an arch frame". */}
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
    </div>
  );
}
