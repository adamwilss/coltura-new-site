'use client';

import { motion, useReducedMotion } from 'framer-motion';

// Deterministic scatter: which 53 of the 100 visitors give up. Fixed pattern
// (no Math.random — SSR-safe and stable between renders); the multiplier
// walk spreads the losses convincingly across the grid.
const LOST = new Set(Array.from({ length: 53 }, (_, i) => (i * 37 + 11) % 100));

/**
 * "53% of mobile visitors abandon a slow site" as people, not a percentage:
 * a hundred dots, and more than half of them leave while you watch. The
 * number is Google's; the dots just make you feel it.
 */
export default function LeakGrid() {
  const reduced = useReducedMotion();

  return (
    <div>
      <div className="grid w-fit grid-cols-10 gap-[7px]" aria-hidden>
        {Array.from({ length: 100 }, (_, i) => {
          const lost = LOST.has(i);
          return (
            <motion.span
              key={i}
              className="h-[13px] w-[13px] rounded-full"
              style={{ background: lost ? 'rgb(var(--brand))' : 'rgb(var(--ink))' }}
              initial={reduced ? { opacity: lost ? 0.12 : 0.85 } : { opacity: 0.85, scale: 1 }}
              whileInView={
                reduced
                  ? undefined
                  : lost
                    ? { opacity: 0.12, scale: 0.6 }
                    : { opacity: 0.85, scale: 1 }
              }
              transition={{ duration: 0.45, delay: 0.6 + (i % 10) * 0.06 + Math.floor(i / 10) * 0.08, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.6 }}
            />
          );
        })}
      </div>
      <p className="mt-5 max-w-[17rem] text-sm leading-relaxed text-muted">
        <span className="font-semibold text-brand">53 of these 100 people</span> gave up because the
        site took over 3 seconds to load.{' '}
        <span className="text-muted/60">Source: Google</span>
      </p>
    </div>
  );
}
