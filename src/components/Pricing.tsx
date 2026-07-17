import { Check, Star } from 'lucide-react';
import SectionLabel from './SectionLabel';
import RevealGroup from './RevealGroup';
import WhatsAppButton from './WhatsAppButton';
import type { CSSProperties } from 'react';

// One-off website builds.
const WEBSITES = [
  {
    name: 'Landing Page',
    price: '£500',
    unit: 'one-off',
    desc: 'A single, focused page built to convert. One offer, one clear goal.',
    features: ['Built to convert', 'Mobile-first', 'Fast & SEO-ready'],
    flagship: false,
  },
  {
    name: '8-Page Website',
    price: '£1,000',
    unit: 'one-off',
    desc: 'A complete small-business site — up to eight pages — built to bring in enquiries.',
    features: ['Up to 8 pages', 'Full on-page SEO', 'Contact & enquiry forms'],
    flagship: false,
  },
  {
    name: 'Flagship Website',
    price: '£1,500',
    unit: 'one-off',
    desc: 'Unlimited pages and a full SEO foundation. Our best work, end to end.',
    features: ['Unlimited pages', 'Full SEO foundation', 'Unlocks reduced ad rates'],
    flagship: true,
  },
];

// Ongoing changes & care — pick one.
const CARE = [
  {
    name: 'Pay As You Go',
    price: '£75',
    unit: 'per set of changes',
    desc: 'Send us a form listing everything you want changed. Every change on it gets made — no hourly billing, no surprises.',
    features: ['Submit a change form', 'Everything on it done', 'No monthly commitment'],
  },
  {
    name: 'Unlimited Care',
    price: '£149',
    unit: 'per month',
    desc: 'Unlimited changes and new pages, whenever you want. The site keeps growing with your business.',
    features: [
      'Unlimited changes & new pages',
      'Monthly competitor audit',
      'Monthly SEO report',
      'Priority support',
    ],
    highlight: true,
  },
];

// Advertising management (monthly).
const ADS = [
  {
    name: 'Google Ads',
    price: '£500',
    flagshipPrice: '£400',
    desc: 'We run and optimise your Google Search campaigns.',
    points: [
      'We guarantee more clicks to your website',
      'Built to drive calls and enquiries',
      'Transparent monthly reporting',
    ],
    guarantee: true,
  },
  {
    name: 'Meta Ads',
    price: '£250',
    flagshipPrice: '£200',
    desc: 'We plan, run and optimise your Facebook & Instagram campaigns.',
    points: [
      'Promote your own creative — or we make it',
      'Optional AI content (Higgsfield video or carousel) at extra cost',
      'No performance guarantee — Meta results depend on your creative and social presence',
    ],
    guarantee: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-bg">
      <RevealGroup className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="scroll-reveal mb-12 max-w-2xl">
          <SectionLabel label="Pricing" tone="brand" />
          <h2 className="mb-4 font-heading text-[clamp(1.8rem,3.6vw,2.75rem)] font-medium leading-tight text-ink">
            Simple, honest pricing.
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            Own your website outright, then keep it growing however suits you. Everything below is
            transparent — no lock-in, no surprises.
          </p>
        </div>

        {/* Websites */}
        <div className="scroll-reveal mb-4 flex items-baseline justify-between">
          <h3 className="font-heading text-lg font-medium text-ink">Websites</h3>
          <span className="text-xs text-muted">One-off build · you own it outright</span>
        </div>
        <div className="mb-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {WEBSITES.map((tier, i) => (
            <div
              key={tier.name}
              className={`scroll-reveal relative flex flex-col rounded-2xl border bg-card p-7 ${
                tier.flagship
                  ? 'border-brand/40 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_50px_-24px_rgba(223,44,50,0.28)]'
                  : 'border-line shadow-[0_1px_2px_rgba(0,0,0,0.04),0_14px_34px_-20px_rgba(0,0,0,0.14)]'
              }`}
              style={{ '--sr-delay': `${i * 80}ms` } as CSSProperties}
            >
              {tier.flagship && (
                <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1 text-[0.6rem] font-bold uppercase tracking-wide text-on-brand">
                  <Star size={11} strokeWidth={0} fill="currentColor" /> Flagship
                </span>
              )}
              <h4 className="font-heading text-lg font-medium text-ink">{tier.name}</h4>
              <div className="mb-3 mt-2 flex items-baseline gap-2">
                <span className="font-heading text-3xl font-semibold text-ink">{tier.price}</span>
                <span className="text-xs text-muted">{tier.unit}</span>
              </div>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{tier.desc}</p>
              <ul className="space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink">
                    <Check size={15} strokeWidth={2.25} className="mt-0.5 shrink-0 text-brand" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Changes & care */}
        <div className="scroll-reveal mb-4 flex items-baseline justify-between">
          <h3 className="font-heading text-lg font-medium text-ink">Changes &amp; Care</h3>
          <span className="text-xs text-muted">Choose whichever suits you</span>
        </div>
        <div className="mb-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {CARE.map((plan, i) => (
            <div
              key={plan.name}
              className={`scroll-reveal flex flex-col rounded-2xl border bg-card p-7 ${
                plan.highlight ? 'border-brand/40' : 'border-line'
              } shadow-[0_1px_2px_rgba(0,0,0,0.04),0_14px_34px_-20px_rgba(0,0,0,0.14)]`}
              style={{ '--sr-delay': `${i * 80}ms` } as CSSProperties}
            >
              <div className="flex items-baseline justify-between">
                <h4 className="font-heading text-lg font-medium text-ink">{plan.name}</h4>
                {plan.highlight && (
                  <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wide text-brand">
                    Most popular
                  </span>
                )}
              </div>
              <div className="mb-3 mt-2 flex items-baseline gap-2">
                <span className="font-heading text-3xl font-semibold text-ink">{plan.price}</span>
                <span className="text-xs text-muted">{plan.unit}</span>
              </div>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{plan.desc}</p>
              <ul className="space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink">
                    <Check size={15} strokeWidth={2.25} className="mt-0.5 shrink-0 text-brand" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Ads management */}
        <div className="scroll-reveal mb-4 flex items-baseline justify-between">
          <h3 className="font-heading text-lg font-medium text-ink">Ads Management</h3>
          <span className="text-xs text-muted">Monthly · reduced with a Flagship website</span>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {ADS.map((ad, i) => (
            <div
              key={ad.name}
              className="scroll-reveal flex flex-col rounded-2xl border border-line bg-card p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_14px_34px_-20px_rgba(0,0,0,0.14)]"
              style={{ '--sr-delay': `${i * 80}ms` } as CSSProperties}
            >
              <div className="flex items-baseline justify-between">
                <h4 className="font-heading text-lg font-medium text-ink">{ad.name}</h4>
                {ad.guarantee && (
                  <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wide text-brand">
                    Guaranteed clicks
                  </span>
                )}
              </div>
              <div className="mb-1 mt-2 flex items-baseline gap-2">
                <span className="font-heading text-3xl font-semibold text-ink">{ad.price}</span>
                <span className="text-xs text-muted">/ month</span>
              </div>
              <p className="mb-5 text-xs text-muted">
                or <span className="font-medium text-ink">{ad.flagshipPrice}/mo</span> with a Flagship website
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted">{ad.desc}</p>
              <ul className="space-y-2">
                {ad.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-ink">
                    <Check size={15} strokeWidth={2.25} className="mt-0.5 shrink-0 text-brand" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="scroll-reveal mt-12 flex flex-col items-start gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Not sure what you need? Tell us about your business and we&apos;ll put together a plan
            that makes sense — no pressure.
          </p>
          <WhatsAppButton label="Talk Pricing on WhatsApp" className="w-full shrink-0 sm:w-auto" />
        </div>
      </RevealGroup>
    </section>
  );
}
