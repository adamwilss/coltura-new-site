import { Phone } from 'lucide-react';
import ArchImage from './ArchImage';
import WhatsAppButton from './WhatsAppButton';
import SpotsLeft from './SpotsLeft';
import SectionLabel from './SectionLabel';

const CAPABILITIES = ['Websites & landing pages', 'SEO & local visibility', 'Google & Meta ads'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg lg:min-h-[660px]">
      {/* Soft wash of light from the top — subtle atmosphere behind the copy. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72"
        style={{ background: 'linear-gradient(180deg, rgb(var(--card) / 0.7) 0%, transparent 100%)' }}
      />

      {/* On desktop the portal image lives in a shared wrapper (see page.tsx)
          so it can span the hero AND the review band beneath, connecting them.
          Here we only render the contained mobile version. */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-12 pt-14 sm:px-8 sm:pt-20 lg:flex lg:min-h-[620px] lg:items-center lg:py-24">
        {/* Copy */}
        <div className="lg:max-w-[48%]">
          <div className="reveal-1">
            <SectionLabel label="Customer Acquisition Systems" />
          </div>

          <h1 className="reveal-2 mb-5 text-balance font-heading text-[clamp(2.25rem,5.2vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
            Websites that bring in calls,{' '}
            <span className="text-brand">not just clicks.</span>
          </h1>

          <p className="reveal-3 mb-6 max-w-[34rem] text-lg leading-relaxed text-muted">
            We design strategic websites that turn interest into real enquiries — and
            consistently win local business.
          </p>

          <div className="reveal-3 mb-7 flex flex-wrap gap-x-5 gap-y-2">
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

          <div className="reveal-5 mt-5 flex flex-col items-start gap-2.5">
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

        {/* Mobile: the portal image sits contained beneath the copy. */}
        <div className="reveal-6 relative mx-auto mt-12 aspect-[4/5] w-full max-w-[440px] lg:hidden">
          <ArchImage shapeClassName="hero-shape-mobile" />
        </div>
      </div>
    </section>
  );
}
