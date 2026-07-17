import Reveal from './Reveal';
import SectionLabel from './SectionLabel';

// Permanently dark band so the transparent gecko video reads right in both
// themes. Lives on the homepage (moved off /get-started, where it interrupted
// the audit journey — this is a build-service promise, not an audit one).
export default function BugPromise() {
  return (
    <section className="dark relative overflow-hidden bg-bg-secondary">
      <Reveal className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionLabel label="Bug Free Care" />
          <h2 className="mb-6 font-heading text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.05] tracking-tight text-ink">
            We eat website bugs <span className="text-brand">for breakfast.</span>
          </h2>
          <p className="mb-6 max-w-md text-lg leading-relaxed text-muted">
            Geckos eat bugs. We do too — broken buttons, dead forms, slow pages, all handled.
          </p>
          <p className="max-w-md font-heading text-lg font-medium leading-snug text-ink">
            Find a bug in the first 30 days? We fix it free.
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl">
          <video autoPlay muted loop playsInline poster="/videos/bug-eating-poster.png" className="h-auto w-full">
            <source src="/videos/bug-eating-transparent.webm" type="video/webm" />
            <source src="/videos/bug-eating.mp4" type="video/mp4" />
          </video>
        </div>
      </Reveal>
    </section>
  );
}
