import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TrustPoints from '@/components/TrustPoints';
import Testimonial from '@/components/Testimonial';
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
      <Services />
      <WorkGallery />
      <Process />
      <GrowthOS />
      <AuditExample />
      <Ownership />
      <Footer />
    </main>
  );
}
