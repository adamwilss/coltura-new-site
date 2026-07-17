'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Phone, MessageSquare, Star, FileText, Wifi, Signal, BatteryFull } from 'lucide-react';
import SectionLabel from './SectionLabel';
import MagneticButton from './MagneticButton';
import WhatsAppButton from './WhatsAppButton';

// Illustrative notifications — deliberately generic (no names, no invented
// customers). This is a picture of the job, not a claim about past results.
const TOASTS = [
  { icon: Phone, app: 'Phone', title: 'Incoming call', sub: 'Mobile · via your website' },
  { icon: FileText, app: 'Email', title: 'New enquiry — website form', sub: '“Looking for a quote for a full rewire…”' },
  { icon: MessageSquare, app: 'WhatsApp', title: 'New message', sub: '“Saw your work online — free next week?”' },
  { icon: Star, app: 'Google', title: 'New 5-star review', sub: 'Left from your thank-you page' },
];

/**
 * The closer: everything above this section is craft; this is what the craft
 * is FOR. Giant statement on the left, a lock screen quietly filling up with
 * the good kind of noise on the right — real phone proportions (9:19.5),
 * dynamic-island notch, wallpaper glow, home indicator. Toasts stagger in on
 * view; the phone icon ring-wiggles (CSS, off under reduced motion).
 */
export default function PhoneRings() {
  const reduced = useReducedMotion();

  return (
    <section className="dark relative overflow-hidden bg-bg">
      {/* faint brand glow behind the phone */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[90vmin] w-[90vmin] -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgb(var(--brand) / 0.09) 0%, transparent 62%)' }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div>
          <SectionLabel label="The Point Of All This" />
          <h2 className="mb-7 font-heading text-[clamp(2.4rem,5.6vw,4.2rem)] font-medium leading-[1.02] tracking-[-0.02em] text-ink">
            All of it exists to do one thing — <span className="text-brand">make your phone ring.</span>
          </h2>
          <p className="mb-9 max-w-xl text-lg leading-relaxed text-muted">
            Not to win design awards. Not to impress other designers. To make the person who
            needs what you do — tonight, in your town — choose your number over the next tab.
          </p>
          <MagneticButton strength={0.15} className="inline-block">
            <WhatsAppButton label="Get My Free Audit" />
          </MagneticButton>
        </div>

        {/* The phone — real proportions, lock-screen anatomy */}
        <div className="relative mx-auto w-[280px] max-w-full">
          {/* side buttons */}
          <span aria-hidden className="absolute -left-[2px] top-[110px] h-8 w-[3px] rounded-l-md bg-ink/25" />
          <span aria-hidden className="absolute -left-[2px] top-[150px] h-12 w-[3px] rounded-l-md bg-ink/25" />
          <span aria-hidden className="absolute -right-[2px] top-[130px] h-16 w-[3px] rounded-r-md bg-ink/25" />

          <div className="aspect-[9/19.5] w-full rounded-[3rem] border border-ink/20 bg-[#0c0b0a] p-[9px] shadow-[0_60px_110px_-45px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)]">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[2.45rem]">
              {/* wallpaper */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(120% 90% at 80% -10%, rgb(var(--brand) / 0.28) 0%, transparent 55%), radial-gradient(130% 100% at 10% 110%, rgb(var(--brand) / 0.14) 0%, transparent 60%), linear-gradient(180deg, #201d1a 0%, #14120f 100%)',
                }}
              />

              {/* status bar + dynamic island */}
              <div className="relative flex items-center justify-between px-7 pt-3">
                <span className="w-8" />
                <span className="h-[26px] w-[92px] rounded-full bg-black" aria-hidden />
                <span className="flex items-center gap-1 text-white/80" aria-hidden>
                  <Signal size={11} strokeWidth={2.5} />
                  <Wifi size={11} strokeWidth={2.5} />
                  <BatteryFull size={13} strokeWidth={2} />
                </span>
              </div>

              {/* lock-screen clock */}
              <div className="relative mt-6 text-center">
                <p className="text-[13px] font-medium text-white/70">Thursday 17 July</p>
                <p className="font-heading text-[64px] font-medium leading-none tracking-tight text-white/95">09:41</p>
              </div>

              {/* notifications */}
              <div className="relative mt-auto space-y-2.5 px-3.5 pb-7">
                {TOASTS.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <motion.div
                      key={t.title}
                      className="flex items-start gap-2.5 rounded-2xl bg-white/[0.13] p-3 backdrop-blur-md"
                      initial={reduced ? false : { opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.55, delay: 0.4 + i * 0.55, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true, amount: 0.4 }}
                    >
                      <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-brand text-white ${i === 0 ? 'ring-wiggle' : ''}`}>
                        <Icon size={15} strokeWidth={2.2} />
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-baseline justify-between gap-2">
                          <span className="truncate text-[12.5px] font-semibold leading-snug text-white/95">{t.title}</span>
                          <span className="shrink-0 text-[10px] text-white/50">now</span>
                        </span>
                        <span className="mt-0.5 block truncate text-[11.5px] leading-snug text-white/65">{t.sub}</span>
                      </span>
                    </motion.div>
                  );
                })}

                {/* home indicator */}
                <div className="!mt-4 flex justify-center">
                  <span className="h-[4px] w-28 rounded-full bg-white/40" aria-hidden />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-[11px] text-muted/70">
            Illustrative, obviously. But this is the job.
          </p>
        </div>
      </div>
    </section>
  );
}
