import SectionLabel from './SectionLabel';
import ParallaxImage from './ParallaxImage';
import RevealGroup from './RevealGroup';

// A full-width product beauty shot with foreground/background parallax depth.
export default function Showcase() {
  return (
    <section className="bg-bg">
      <RevealGroup className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="scroll-reveal mb-10 max-w-2xl">
          <SectionLabel label="The Craft" />
          <h2 className="font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
            Built to look the part — and do the work.
          </h2>
        </div>
        <div className="scroll-reveal">
          <ParallaxImage
            src="/images/desk-wide.png"
            alt="A Coltura website shown on a widescreen monitor in a warm, considered workspace"
            ratio="aspect-[16/10] sm:aspect-[16/9]"
          />
        </div>
      </RevealGroup>
    </section>
  );
}
