// A deliberately labelled space for real photography that doesn't exist
// yet — not a broken-image icon, not stock photography standing in for the
// real thing. An intriguing site is built around real images; this marks
// exactly where they go and what they're waiting on, so it reads as a
// considered layout with reserved space rather than an empty template.
const NOISE_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function ImagePlaceholder({
  label,
  sublabel = 'Photography pending',
  ratio = 'aspect-[4/3]',
  shape = 'rect',
}: {
  label: string;
  sublabel?: string;
  ratio?: string;
  shape?: 'rect' | 'circle';
}) {
  return (
    <div
      className={`relative ${ratio} w-full overflow-hidden border border-dashed border-line ${
        shape === 'circle' ? 'rounded-full' : 'rounded-lg'
      }`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(155deg, rgb(var(--bg-secondary)) 0%, rgb(var(--card)) 55%, rgb(var(--bg-secondary)) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: NOISE_URL }}
      />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-1.5 p-4 text-center">
        <span className="font-heading text-sm italic leading-snug text-muted">{label}</span>
        {shape === 'rect' && (
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.14em] text-muted/60">
            {sublabel}
          </span>
        )}
      </div>
    </div>
  );
}
