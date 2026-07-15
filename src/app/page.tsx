import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ArchImage from '@/components/ArchImage';
import TrustPoints from '@/components/TrustPoints';
import Testimonial from '@/components/Testimonial';
import Statement from '@/components/Statement';
import Services from '@/components/Services';
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

      {/* Hero + review share ONE portal image on the right (desktop): it spans
          both and darkens as it descends, so it melts into the dark review band
          — connecting the two. */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[5] hidden w-[50vw] max-w-[800px] lg:block">
          <ArchImage shapeClassName="hero-shape-desktop" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, transparent 48%, rgba(27,24,21,0.35) 64%, rgba(27,24,21,0.96) 100%)',
            }}
          />
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
