'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

/**
 * A single-image portal that fills its parent and takes its silhouette from
 * `shapeClassName`. Foreground/background depth: the scene (background) is
 * scaled up and drifts on scroll behind a fixed soffit shadow (foreground), so
 * it reads as looking into a recess. No-ops under prefers-reduced-motion.
 */
export default function ScenePortal({
  src,
  alt,
  shapeClassName = 'hero-shape-desktop',
  sizes = '50vw',
  objectPosition = '50% 50%',
}: {
  src: string;
  alt: string;
  shapeClassName?: string;
  sizes?: string;
  objectPosition?: string;
}) {
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
        <div
          ref={sceneRef}
          className="absolute inset-0"
          style={{
            transform: 'scale(calc(1.22 - var(--sp, 0) * 0.06)) translateY(calc(var(--sp, 0) * 40px))',
            willChange: 'transform',
          }}
        >
          <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" style={{ objectPosition }} />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(115% 85% at 50% 34%, rgba(255,249,240,0.14) 0%, rgba(255,249,240,0) 55%)',
          }}
        />
        <div
          className={`pointer-events-none absolute inset-0 ${shapeClassName}`}
          style={{
            boxShadow:
              'inset 0 40px 50px -16px rgba(0,0,0,0.55), inset 0 -28px 42px -22px rgba(0,0,0,0.4), inset 26px 0 46px -28px rgba(0,0,0,0.42), inset -26px 0 46px -28px rgba(0,0,0,0.42)',
          }}
        />
      </div>
    </div>
  );
}
