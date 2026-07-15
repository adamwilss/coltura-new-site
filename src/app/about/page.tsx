import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import TrustPoints from '@/components/TrustPoints';
import Testimonial from '@/components/Testimonial';
import CtaBand from '@/components/CtaBand';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About — Coltura',
  description:
    'Coltura is a direct relationship with the person who does the work — websites and marketing built around results, not vanity.',
};

export default function AboutPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="About"
        title="One person who cares whether your phone rings."
        subtitle="Coltura isn’t a big agency. It’s a direct relationship with the person actually doing the work."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="space-y-6 text-lg leading-relaxed text-muted">
            <p>
              Most agencies sit a salesperson in front of you and put a junior behind the
              scenes. You never quite know who’s doing the work, and the results are
              somebody else’s problem.
            </p>
            <p>
              Coltura works differently. When you work with Coltura, you work with me —
              <span className="text-ink"> Adam</span> — from the first audit through to
              launch and every improvement after. No account managers, no hand-offs, no
              jargon.
            </p>
            <p>
              I care about one thing above everything else:{' '}
              <span className="text-ink">whether your website actually brings in work.</span>{' '}
              Not awards, not buzzwords — calls, enquiries and jobs. Every decision is made
              against that test.
            </p>
            <p>
              And it stays yours. Your website is built on your own hosting and domain, your
              ad accounts stay in your name, and you’re free to walk away whenever you like.
              The relationship continues because it’s working, not because you’re locked in.
            </p>
          </div>
        </div>
      </section>

      <TrustPoints />
      <Testimonial withImage />
      <CtaBand title="Let’s build something that works as hard as you do." />
      <Footer />
    </main>
  );
}
