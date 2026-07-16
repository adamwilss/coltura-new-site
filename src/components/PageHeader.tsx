import Image from 'next/image';
import SectionLabel from './SectionLabel';

// Shared header for interior pages. Generous top padding clears the sticky nav.
// Features a prominent gecko mark alongside the page content.
export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-24 h-[520px] w-[520px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgb(var(--brand) / 0.06) 0%, transparent 68%)' }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-36">
        <div className="mb-8 flex items-center gap-4">
          <Image
            src="/images/gecko-mark.png"
            alt=""
            width={160}
            height={160}
            className="h-16 w-16 rounded-2xl object-contain dark:hidden sm:h-20 sm:w-20"
            priority
          />
          <Image
            src="/images/gecko-mark-light.png"
            alt=""
            width={160}
            height={160}
            className="hidden h-16 w-16 rounded-2xl object-contain dark:block sm:h-20 sm:w-20"
            priority
          />
          <SectionLabel label={eyebrow} />
        </div>
        <h1 className="max-w-3xl text-balance font-heading text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
