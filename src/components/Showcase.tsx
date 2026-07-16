import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';
import ScenePortal from './ScenePortal';
import ParallaxImage from './ParallaxImage';
import Reveal from './Reveal';

// Mirrors the hero: a bleeding portal image — but on the LEFT this time — with
// copy beside it on the right. Not a standalone banner. Foreground/background
// depth comes from ScenePortal's scroll parallax.
export default function Showcase() {
  return (
    <section className="relative overflow-hidden bg-bg lg:h-[560px]">
      {/* Desktop: image bleeds off the LEFT edge. */}
      <div className="absolute inset-y-0 left-0 hidden w-[46vw] max-w-[660px] lg:block">
        <ScenePortal
          src="/images/desk-wide.png"
          alt="A Coltura website shown on a widescreen monitor in a warm, considered workspace"
          shapeClassName="hero-shape-desktop-left"
          sizes="46vw"
          objectPosition="45% 50%"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-5 py-16 sm:px-8 sm:py-24 lg:h-full lg:flex-row lg:items-center lg:justify-end lg:py-0">
        <Reveal variant="right" className="lg:max-w-[46%]">
          <SectionLabel label="The Craft" />
          <h2 className="mb-5 font-heading text-[clamp(1.7rem,3.4vw,2.6rem)] font-medium leading-tight text-ink">
            Built to look the part — and do the work.
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-muted">
            Every Coltura site is designed to feel genuinely premium and built to convert —
            fast, clear, and shaped around turning visitors into real enquiries.
          </p>
          <a
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:text-brand"
          >
            See recent work
            <ArrowUpRight size={15} strokeWidth={2} />
          </a>
        </Reveal>

        {/* Mobile: contained image beneath the copy. */}
        <div className="mt-10 lg:hidden">
          <ParallaxImage
            src="/images/desk-wide.png"
            alt="A Coltura website shown on a widescreen monitor"
            ratio="aspect-[16/11]"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
