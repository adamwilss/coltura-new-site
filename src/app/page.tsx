import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ArchImage from '@/components/ArchImage';
import TrustPoints from '@/components/TrustPoints';
import Testimonial from '@/components/Testimonial';
import Statement from '@/components/Statement';
import Services from '@/components/Services';
import Showcase from '@/components/Showcase';
import WorkGallery from '@/components/WorkGallery';
import Process from '@/components/Process';
import GrowthOS from '@/components/GrowthOS';
import AuditExample from '@/components/AuditExample';
import Ownership from '@/components/Ownership';
import BrandNote from '@/components/BrandNote';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Nav />

      {/* Hero image is a distinct portal on the right that overhangs DOWN into
          the dark review band (desktop) — it sits on top (z-20) with its own
          shadow, so it intersects the review rather than merging into it. */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute right-0 top-0 z-20 hidden h-[760px] w-[47vw] max-w-[760px] lg:block">
          <ArchImage shapeClassName="hero-shape-desktop" />
        </div>
        <Hero />
        <Testimonial />
      </div>

      <TrustPoints />

      {/* Stacking panels: Statement pins (sticky) while Services rises up and
          covers it. The shared relative wrapper limits the sticky range to
          this pair, so Statement unpins once Services has covered it. */}
      <div className="relative">
        <Statement />
        <Services covering />
      </div>

      <Showcase />
      <WorkGallery />
      <Process />
      <GrowthOS />
      <AuditExample />
      <Ownership />
      <BrandNote />
      <Footer />
    </main>
  );
}
