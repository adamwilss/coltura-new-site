import WhatsAppButton from './WhatsAppButton';
import SpotsLeft from './SpotsLeft';
import Reveal from './Reveal';

// Reusable closing call-to-action band for interior pages.
export default function CtaBand({
  title = 'Ready to turn your website into your best salesperson?',
  note = 'Get a free, no-obligation audit — clear, practical feedback on exactly what’s costing you enquiries.',
}: {
  title?: string;
  note?: string;
}) {
  return (
    <section className="bg-bg-secondary">
      <Reveal className="mx-auto max-w-3xl px-5 py-20 text-center sm:py-28">
        <h2 className="text-balance font-heading text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-tight text-ink">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">{note}</p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <WhatsAppButton label="Get My Free Audit" />
          <SpotsLeft className="text-center" />
        </div>
      </Reveal>
    </section>
  );
}
