'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import SectionLabel from './SectionLabel';

// Real Growth OS™ inclusions, from src/components/GrowthOS.tsx on the live
// site — grouped into 4 categories instead of one 13-item bullet wall.
const CATEGORIES = [
  {
    name: 'Website improvements',
    summary: 'New pages, content updates and conversion improvements.',
    items: ['Unlimited website improvements', 'Landing pages', 'Content updates', 'New service pages'],
  },
  {
    name: 'Search visibility',
    summary: 'Local SEO, technical SEO and Google Business optimisation.',
    items: ['Local SEO', 'Technical SEO', 'Google Business'],
  },
  {
    name: 'Paid acquisition',
    summary: 'Google Ads and Meta Ads management.',
    items: ['Google Ads management', 'Meta Ads management'],
  },
  {
    name: 'Testing & strategy',
    summary: 'Heatmaps, experiments, monthly reviews and priority support.',
    items: ['A/B testing', 'Heatmaps', 'Monthly strategy', 'Priority support'],
  },
];

export default function GrowthOS() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="rounded-2xl bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_40px_-24px_rgba(0,0,0,0.16)] sm:p-10">
          <SectionLabel index="V" label="Growth OS™" tone="brand" />
          <h2 className="mb-3 max-w-lg font-heading text-[clamp(1.5rem,2.8vw,2rem)] font-medium leading-snug text-ink">
            We don&apos;t just fix your site. We make it better every month.
          </h2>
          <p className="mb-1 text-xl font-semibold text-ink">From &pound;997/month</p>
          <p className="mb-8 text-base text-muted">
            Best suited to businesses already investing in lead generation and ready for ongoing
            improvement, not a one-off project.
          </p>

          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CATEGORIES.map((category) => (
              <div key={category.name} className="rounded-xl bg-bg-secondary p-5">
                <h3 className="mb-1 text-sm font-semibold text-ink">{category.name}</h3>
                <p className="mb-3 text-sm leading-relaxed text-muted">{category.summary}</p>
                {expanded && (
                  <ul className="space-y-1.5 border-t border-line pt-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mb-8 flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-brand"
          >
            {expanded ? 'Show less' : 'See everything included'}
            <ChevronDown size={15} strokeWidth={2} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>

          <div className="flex flex-col items-start gap-4 border-t border-line pt-6">
            <WhatsAppButton label="Ask About Growth OS" className="w-full sm:w-auto" />
            <p className="text-xs text-muted">
              Need a new website first? Builds start from &pound;495 — Growth OS picks up once
              you&apos;re live.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
