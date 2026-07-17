'use client';

import { useRef, type ReactNode } from 'react';

/**
 * Wraps a CTA so it's gently "pulled" toward the cursor while hovered, then
 * springs back on leave. Pure rAF + transform (no GSAP), and it simply does
 * nothing under prefers-reduced-motion or on touch (no mousemove). The wrapper
 * is inline-block so it hugs the button.
 */
export default function MagneticButton({
  children,
  strength = 0.3,
  className = '',
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const move = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      el.style.transform = 'translate(0px, 0px)';
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      className={`inline-block transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
