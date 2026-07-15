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
      {/*
        No `order-*` utilities here on purpose: Copy is first in the DOM, so
        it renders first on mobile (message before image) and lands in the
        left grid column on desktop — both from natural source order.
      */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-10 pt-14 sm:px-8 sm:pb-14 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-28">
        {/* Copy */}
        <div>
          <SectionLabel index="I" label="Customer Acquisition Systems" />

          <h1 className="mb-4 max-w-[560px] font-heading text-[clamp(2.625rem,7.5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.01em] text-ink">
            Stop paying for clicks
            <br />
            that never become
            <br />
            <span className="text-brand">customers.</span>
          </h1>

          <p className="mb-6 max-w-[640px] text-lg leading-relaxed text-muted sm:text-xl">
            A website should do more than look good. It should bring in calls and jobs
            — real enquiries from people ready to buy.
          </p>

          <div className="mb-6 flex flex-wrap gap-x-5 gap-y-2">
            {CAPABILITIES.map((capability) => (
              <span key={capability} className="flex items-center gap-1.5 text-sm text-muted">
                <span className="h-1 w-1 rounded-full bg-brand" />
                {capability}
              </span>
            ))}
          </div>

          <div className="mb-3 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton label="Get My Free Audit" className="w-full sm:w-auto" />
            <a
              href="#services"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-lg border border-line px-8 text-sm font-semibold text-ink transition-colors hover:border-ink/30 sm:w-auto"
            >
              How It Works
            </a>
          </div>

          <p className="mb-5 text-xs text-muted">No obligation. Clear, practical feedback.</p>

          <div className="flex flex-col items-start gap-2.5">
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
        <div>
          <ArchImage />
        </div>
      </div>
    </section>
  );
}
