'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SectionLabel from './SectionLabel';

// Each bug chip crawls in from an edge, sits for a beat, then gets pulled
// into the gecko and vanishes — eaten. Positions are % offsets around the
// video; from/eat are the travel vectors (in → rest → devoured).
const BUGS = [
  { label: '<button> does nothing', top: '4%', left: '-6%', from: { x: -140, y: -30 }, eat: { x: 150, y: 120 } },
  { label: '404 — /contact', top: '12%', right: '-8%', from: { x: 150, y: -40 }, eat: { x: -140, y: 110 } },
  { label: 'form submits nowhere', top: '46%', left: '-12%', from: { x: -160, y: 20 }, eat: { x: 190, y: 10 } },
  { label: '3.8s load time', top: '78%', right: '-6%', from: { x: 140, y: 60 }, eat: { x: -150, y: -80 } },
  { label: 'text overlaps on mobile', top: '88%', left: '2%', from: { x: -120, y: 90 }, eat: { x: 130, y: -90 } },
];

/**
 * Bug Free Care, performed: UI defects crawl onto the screen and the gecko
 * eats them one by one. Permanently dark so the transparent gecko video
 * reads right in both themes. Under reduced motion the chips simply don't
 * appear — the copy carries the promise.
 */
export default function BugPromise() {
  const reduced = useReducedMotion();

  return (
    <section className="dark relative overflow-hidden bg-bg-secondary">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionLabel label="Bug Free Care" />
          <h2 className="mb-6 font-heading text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.05] tracking-tight text-ink">
            We eat website bugs <span className="text-brand">for breakfast.</span>
          </h2>
          <p className="mb-6 max-w-md text-lg leading-relaxed text-muted">
            Geckos eat bugs. We do too — broken buttons, dead forms, slow pages, all handled.
          </p>
          <p className="max-w-md font-heading text-lg font-medium leading-snug text-ink">
            Find a bug in the first 30 days? We fix it free.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative overflow-hidden rounded-2xl">
            <video autoPlay muted loop playsInline poster="/videos/bug-eating-poster.png" className="h-auto w-full">
              <source src="/videos/bug-eating-transparent.webm" type="video/webm" />
              <source src="/videos/bug-eating.mp4" type="video/mp4" />
            </video>
          </div>

          {/* The prey */}
          {!reduced &&
            BUGS.map((bug, i) => (
              <motion.div
                key={bug.label}
                aria-hidden
                className="absolute z-10 whitespace-nowrap rounded-lg border border-line bg-card px-3 py-1.5 font-mono text-[11px] text-muted shadow-[0_10px_24px_-10px_rgba(0,0,0,0.6)]"
                style={{ top: bug.top, left: bug.left, right: bug.right }}
                initial={{ opacity: 0, x: bug.from.x, y: bug.from.y, rotate: i % 2 ? 6 : -6 }}
                whileInView={{
                  opacity: [0, 1, 1, 1, 0],
                  x: [bug.from.x, 0, 0, bug.eat.x * 0.25, bug.eat.x],
                  y: [bug.from.y, 0, 0, bug.eat.y * 0.25, bug.eat.y],
                  scale: [1, 1, 1, 0.9, 0.1],
                  rotate: [i % 2 ? 6 : -6, 0, 0, i % 2 ? -10 : 10, 0],
                }}
                transition={{
                  duration: 2.6,
                  times: [0, 0.22, 0.55, 0.75, 1],
                  delay: 0.5 + i * 0.75,
                  ease: 'easeInOut',
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <span className="mr-1.5 text-brand">✕</span>
                {bug.label}
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
