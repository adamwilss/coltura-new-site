'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Phone, MessageSquare, Star, FileText } from 'lucide-react';
import SectionLabel from './SectionLabel';
import MagneticButton from './MagneticButton';
import WhatsAppButton from './WhatsAppButton';

// Illustrative notifications — deliberately generic (no names, no invented
// customers). This is a picture of the job, not a claim about past results.
const TOASTS = [
  { icon: Phone, title: 'Incoming call', sub: 'Mobile · via your website' },
  { icon: FileText, title: 'New enquiry — website form', sub: '“Looking for a quote for a full rewire…”' },
  { icon: MessageSquare, title: 'WhatsApp message', sub: '“Saw your work online — are you free next week?”' },
  { icon: Star, title: 'New 5-star Google review', sub: 'Left from the link on your thank-you page' },
];

/**
 * The closer: everything above this section is craft; this is what the craft
 * is FOR. Giant statement on the left, a phone quietly filling up with the
 * good kind of noise on the right. Toasts stagger in on view; the phone icon
 * does a little ring-wiggle (CSS, disabled under reduced motion).
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

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
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

        {/* The phone */}
        <div className="relative mx-auto w-full max-w-[330px]">
          <div className="rounded-[2.6rem] border border-line bg-card p-3 shadow-[0_60px_110px_-45px_rgba(0,0,0,0.75)]">
            <div className="rounded-[2rem] bg-bg-secondary px-4 pb-8 pt-3">
              {/* notch + status row */}
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[11px] text-muted">09:41</span>
                <span className="h-5 w-20 rounded-full bg-ink/10" aria-hidden />
                <Phone size={13} strokeWidth={2} className="ring-wiggle text-brand" aria-hidden />
              </div>

              <div className="space-y-3">
                {TOASTS.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <motion.div
                      key={t.title}
                      className="flex items-start gap-3 rounded-xl border border-line bg-card p-3.5 shadow-[0_8px_20px_-10px_rgba(0,0,0,0.5)]"
                      initial={reduced ? false : { opacity: 0, y: 26, scale: 0.96 }}
                      whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.55, delay: 0.35 + i * 0.55, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true, amount: 0.4 }}
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <Icon size={14} strokeWidth={2} />
                      </span>
                      <span>
                        <span className="block text-[13px] font-semibold leading-snug text-ink">{t.title}</span>
                        <span className="mt-0.5 block text-xs leading-snug text-muted">{t.sub}</span>
                      </span>
                    </motion.div>
                  );
                })}
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
