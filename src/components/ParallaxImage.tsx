'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

/**
 * An image with a foreground/background sense of depth: the photo (background)
 * is scaled up and drifts vertically as the frame scrolls through the viewport,
 * while the frame itself + an inset vignette read as a fixed foreground. The
 * scene sliding behind the fixed opening is what gives the 3D, looking-in feel.
 * No-ops under prefers-reduced-motion.
 */
export default function ParallaxImage({
  src,
  alt,
  ratio = 'aspect-[16/10]',
  className = '',
  sizes = '(min-width: 1024px) 1000px, 100vw',
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  sizes?: string;
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
      s.style.setProperty('--p', p.toFixed(4));
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
    <div
      ref={wrapRef}
      className={`relative ${ratio} w-full overflow-hidden rounded-2xl shadow-[0_50px_90px_-45px_rgba(0,0,0,0.5)] ${className}`}
    >
      <div
        ref={sceneRef}
        className="absolute inset-0"
        style={{
          transform: 'scale(1.16) translateY(calc(var(--p, 0) * 46px))',
          willChange: 'transform',
        }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
      {/* Fixed foreground: inset vignette + a lit top edge, so the scene reads
          as recessed behind the frame. */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          boxShadow:
            'inset 0 2px 1px rgba(255,255,255,0.14), inset 0 -60px 80px -50px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(0,0,0,0.06)',
        }}
      />
    </div>
  );
}
