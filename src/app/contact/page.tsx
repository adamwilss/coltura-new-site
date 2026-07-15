import type { Metadata } from 'next';
import { Phone } from 'lucide-react';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import SpotsLeft from '@/components/SpotsLeft';
import Footer from '@/components/Footer';
import { PHONE_DISPLAY } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contact — Coltura',
  description:
    'Get a free, no-obligation website audit. Message on WhatsApp or request a callback — clear, practical feedback with no pressure.',
};

export default function ContactPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk about your website."
        subtitle="Tell me what you’re after and I’ll come back with clear, practical feedback — no obligation, no hard sell."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-4xl px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Free audit / WhatsApp */}
            <div className="rounded-2xl bg-card p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_18px_40px_-24px_rgba(0,0,0,0.18)] sm:p-9">
              <h2 className="mb-2 font-heading text-xl font-medium text-ink">Get your free audit</h2>
              <p className="mb-6 text-base leading-relaxed text-muted">
                The quickest way to start. Send a message and I’ll review your site and reply
                with a clear, practical action plan.
              </p>
              <WhatsAppButton label="Message on WhatsApp" className="w-full" />
              <div className="mt-5">
                <SpotsLeft />
              </div>
            </div>

            {/* Call / callback */}
            <div className="rounded-2xl border border-line bg-bg p-7 sm:p-9">
              <h2 className="mb-2 font-heading text-xl font-medium text-ink">Prefer to talk?</h2>
              <p className="mb-6 text-base leading-relaxed text-muted">
                Happy to have a straightforward conversation about what you need — no scripts,
                no pressure.
              </p>
              <a
                href="tel:+447958394808"
                className="inline-flex min-h-14 items-center gap-2.5 rounded-lg border border-line px-6 text-base font-semibold text-ink transition-colors hover:border-ink/30"
              >
                <Phone size={17} strokeWidth={1.75} className="text-brand" />
                {PHONE_DISPLAY}
              </a>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Lines can be busy on site — if I miss you, leave a message or drop a WhatsApp
                and I’ll get back to you the same day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
