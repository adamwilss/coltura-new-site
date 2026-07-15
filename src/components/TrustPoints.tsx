import { Check } from 'lucide-react';

// Compact trust strip right after the hero — only claims already confirmed
// elsewhere on the live site (mobile-first build, direct relationship with
// Adam, real £99/mo ongoing care plan). Deliberately no invented stats or
// review scores.
const POINTS = [
  'Mobile-first, built to convert',
  'You work directly with Adam — no account managers',
  'Ongoing support available after launch',
];

export default function TrustPoints() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
        <ul className="flex flex-col flex-wrap gap-x-8 gap-y-3 sm:flex-row sm:items-center sm:justify-center">
          {POINTS.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm text-muted">
              <Check size={15} strokeWidth={2} className="shrink-0 text-brand" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
