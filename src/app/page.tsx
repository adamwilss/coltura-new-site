import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TrustPoints from '@/components/TrustPoints';
import Testimonial from '@/components/Testimonial';
import Statement from '@/components/Statement';
import Services from '@/components/Services';
import WorkGallery from '@/components/WorkGallery';
import Process from '@/components/Process';
import GrowthOS from '@/components/GrowthOS';
import AuditExample from '@/components/AuditExample';
import Ownership from '@/components/Ownership';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <TrustPoints />
      <Testimonial />

      {/* Stacking panels: Statement pins (sticky) while Services rises up and
          covers it. The shared relative wrapper limits the sticky range to
          this pair, so Statement unpins once Services has covered it. */}
      <div className="relative">
        <Statement />
        <Services />
      </div>

      <WorkGallery />
      <Process />
      <GrowthOS />
      <AuditExample />
      <Ownership />
      <Footer />
    </main>
  );
}
