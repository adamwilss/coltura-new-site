// A running Roman-numeral index (I, II, III…) ahead of every section
// eyebrow — the same "reads as one considered document" device Adam
// already approved on the live site, now given a classical inscription
// feel: a numeral plus a tapered double rule, like the moulding line under
// lettering cut into a stone entablature.
export default function SectionLabel({
  index,
  label,
  tone = 'muted',
}: {
  index: string;
  label: string;
  tone?: 'muted' | 'brand';
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="font-heading text-sm italic text-brand/70">{index}</span>
      <span className="flex w-8 flex-col gap-[3px]">
        <span className="h-px w-full bg-brand/60" />
        <span className="h-px w-5 bg-brand/30" />
      </span>
      <p
        className={`text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${
          tone === 'brand' ? 'text-brand' : 'text-muted'
        }`}
      >
        {label}
      </p>
    </div>
  );
}
