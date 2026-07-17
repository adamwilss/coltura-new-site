'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Counts a number up from `from` → `to` the first time it scrolls into view.
 * IntersectionObserver triggers it; a rAF loop with an ease-out tween runs it —
 * matching the repo's hand-rolled motion convention (no animation libraries).
 *
 * SSR / no-JS renders the FINAL value, so the correct figure is always shown
 * even if JS never runs. Under prefers-reduced-motion it stays on the final
 * value (no tween).
 */
export default function Counter({
  to,
  from = 0,
  duration = 1600,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}: {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);
  const [value, setValue] = useState(to); // final value = correct SSR/no-JS output

  const format = (n: number) =>
    `${prefix}${n.toLocaleString('en-GB', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let start: number | null = null;
        const tick = (t: number) => {
          if (start === null) start = t;
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          setValue(from + (to - from) * eased);
          if (p < 1) rafRef.current = requestAnimationFrame(tick);
        };
        setValue(from);
        rafRef.current = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {format(value)}
    </span>
  );
}
