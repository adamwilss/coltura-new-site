// A clean, single-line section eyebrow: one short brand hairline + a
// letter-spaced caps label. The earlier version prefixed a Roman numeral
// and a tapered double rule ("I" + two lines) which read as fussy and
// vibe-coded — removed per Adam's feedback. This is the restrained,
// editorial version.
export default function SectionLabel({
  label,
  tone = 'muted',
}: {
  label: string;
  tone?: 'muted' | 'brand';
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className={`h-px w-8 shrink-0 ${tone === 'brand' ? 'bg-brand' : 'bg-brand/55'}`} />
      <p
        className={`text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${
          tone === 'brand' ? 'text-brand' : 'text-muted'
        }`}
      >
        {label}
      </p>
    </div>
  );
}
