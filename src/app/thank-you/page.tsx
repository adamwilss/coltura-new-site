import Link from 'next/link';
import type { Metadata } from 'next';
import { Check, ArrowLeft } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SpotsLeft from '@/components/SpotsLeft';
import { WHATSAPP_LINK, PHONE_DISPLAY } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Thank you — your audit request is in | Coltura',
  description: 'Your free growth audit request has been received. A real person will review your site and reply within 48 hours.',
  robots: 'noindex, nofollow',
};

export default function ThankYouPage() {
  return (
    <main className="relative">
      <Nav />

      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-bg px-5 py-24 sm:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, rgb(var(--brand) / 0.06) 0%, transparent 60%)' }}
        />
        <div className="relative mx-auto max-w-xl text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-brand/25 bg-brand/10">
            <Check size={30} strokeWidth={2.5} className="text-brand" />
          </div>
          <h1 className="text-balance font-heading text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.015em] text-ink">
            Your audit request is in.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted">
            Thanks — a real person is now reviewing your site by hand. You’ll get a clear, branded
            audit back <span className="font-medium text-ink">within 48 hours</span>. No jargon, no
            obligation.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg bg-brand px-8 text-sm font-bold text-on-brand shadow-[0_10px_24px_-8px_rgba(223,44,50,0.45)] transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
            >
              Want it faster? Message us on WhatsApp
            </a>
            <a
              href="tel:+447958394808"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg border border-line px-8 text-sm font-semibold text-ink transition-colors hover:border-ink/30 sm:w-auto"
            >
              Or call {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-8">
            <SpotsLeft className="text-center" />
          </div>

          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={15} strokeWidth={1.75} />
            Back to home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
