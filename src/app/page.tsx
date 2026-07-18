import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ArchImage from '@/components/ArchImage';
import TrustPoints from '@/components/TrustPoints';
import Testimonial from '@/components/Testimonial';
import Statement from '@/components/Statement';
import Services from '@/components/Services';
import WorkHorizontal from '@/components/WorkHorizontal';
import Process from '@/components/Process';
import PhoneRings from '@/components/PhoneRings';
import PricingTeaser from '@/components/PricingTeaser';
import AuditExample from '@/components/AuditExample';
import BugPromise from '@/components/BugPromise';
import BrandNote from '@/components/BrandNote';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';

/**
 * The homepage is structured as a performance, not a brochure — each act is
 * a demonstration of the craft it's selling:
 *   1. The Renovation (inside Hero): the page fixes itself on arrival.
 *   2. Statement → Services: the pinned line the next panel rises over.
 *   3. WorkHorizontal: four real sites travel past while the section pins.
 *   4. PhoneRings: the closer — what all of it is actually for.
 *   5. BugPromise: the gecko eats UI defects, then promises to keep doing so.
 */
export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
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

      <WorkHorizontal />
      <Process />
      <PhoneRings />
      <PricingTeaser />
      <AuditExample />
      {/* Ownership section held back from launch: its domain/hosting/ads-account
          claims still carry the "confirm before shipping" flag and Adam hasn't
          signed the exact terms off. Re-add <Ownership /> here once he has. */}
      <BugPromise />
      <BrandNote />
      <Footer />
    </main>
  );
}
