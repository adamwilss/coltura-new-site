import { Phone } from 'lucide-react';
import ArchImage from './ArchImage';
import WhatsAppButton from './WhatsAppButton';
import SpotsLeft from './SpotsLeft';
import SectionLabel from './SectionLabel';

// Three grouped capabilities (was 6 separate bullets, which cluttered mobile
// before the primary CTA). Full six-service detail lives in <Services />.
const CAPABILITIES = ['Websites & landing pages', 'SEO & local visibility', 'Google & Meta advertising'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      {/* Atmosphere layer — a warm radial glow gathered behind the arch and
          a soft wash of light from the top, so the hero reads as a lit space
          with depth rather than one flat colour field. Purely decorative. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -right-32 -top-10 h-[560px] w-[560px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgb(var(--brand) / 0.07) 0%, transparent 68%)' }}
        />
        <div
          className="absolute inset-x-0 top-0 h-72"
          style={{ background: 'linear-gradient(180deg, rgb(var(--card) / 0.7) 0%, transparent 100%)' }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{ background: 'linear-gradient(0deg, rgb(var(--bg-secondary) / 0.6) 0%, transparent 100%)' }}
        />
      </div>

      {/*
        No `order-*` utilities here on purpose: Copy is first in the DOM, so
        it renders first on mobile (message before image) and lands in the
        left grid column on desktop — both from natural source order.
      */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-10 pt-14 sm:px-8 sm:pb-14 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-28">
        {/* Copy */}
        <div>
          <div className="reveal-1">
            <SectionLabel label="Customer Acquisition Systems" />
          </div>

          <h1 className="reveal-2 mb-4 max-w-[13ch] text-balance font-heading text-[clamp(2.5rem,6vw,3.5rem)] font-medium leading-[1.06] tracking-[-0.015em] text-ink">
            Stop paying for clicks that never become{' '}
            <span className="text-brand">customers.</span>
          </h1>

          <p className="reveal-3 mb-6 max-w-[640px] text-lg leading-relaxed text-muted sm:text-xl">
            A website should do more than look good. It should bring in calls and jobs
            — real enquiries from people ready to buy.
          </p>

          <div className="reveal-3 mb-6 flex flex-wrap gap-x-5 gap-y-2">
            {CAPABILITIES.map((capability) => (
              <span key={capability} className="flex items-center gap-1.5 text-sm text-muted">
                <span className="h-1 w-1 rounded-full bg-brand" />
                {capability}
              </span>
            ))}
          </div>

          <div className="reveal-4 mb-3 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton label="Get My Free Audit" className="w-full sm:w-auto" />
            <a
              href="#services"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-lg border border-line px-8 text-sm font-semibold text-ink transition-colors hover:border-ink/30 sm:w-auto"
            >
              How It Works
            </a>
          </div>

          <p className="reveal-4 mb-5 text-xs text-muted">No obligation. Clear, practical feedback.</p>

          <div className="reveal-5 flex flex-col items-start gap-2.5">
            <a
              href="tel:+447958394808"
              className="inline-flex items-center gap-2 text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
            >
              <Phone size={14} strokeWidth={1.75} />
              Prefer to speak first? Request a callback
            </a>
            <SpotsLeft />
          </div>
        </div>

        {/* Arch-framed image */}
        <div className="reveal-6">
          <ArchImage />
        </div>
      </div>
    </section>
  );
}
