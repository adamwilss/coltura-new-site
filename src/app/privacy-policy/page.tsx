import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Coltura',
  description:
    'How Coltura Solutions collects, uses, and protects your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal data."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="mb-8 text-sm text-muted">
            Last updated: 16 July 2026
          </p>

          <div className="space-y-10 text-[15px] leading-relaxed text-muted">
            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">
                1. Who We Are
              </h2>
              <p className="mb-2">
                Coltura Solutions (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a web design and digital
                marketing agency based in the United Kingdom. We design strategic
                websites for local businesses.
              </p>
              <p>
                For the purposes of the UK General Data Protection Regulation (UK
                GDPR) and the Data Protection Act 2018, Coltura Solutions is the
                data controller of your personal data.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">
                2. What Data We Collect
              </h2>
              <p className="mb-3">
                When you use our website, contact us, or engage our services, we
                may collect the following types of personal data:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-ink">Contact information</strong> — name,
                  email address, phone number, and business name when you submit
                  a form, send a WhatsApp message, or call us.
                </li>
                <li>
                  <strong className="text-ink">Business information</strong> —
                  details about your business, website URL, and project
                  requirements that you voluntarily provide.
                </li>
                <li>
                  <strong className="text-ink">Usage data</strong> — anonymous
                  analytics such as pages visited, time spent on pages, referral
                  sources, and device type (collected via analytics tools).
                </li>
                <li>
                  <strong className="text-ink">Cookies</strong> — small text files
                  placed on your device to enable core site functionality and
                  measure performance. See Section 6 below.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">
                3. How We Use Your Data
              </h2>
              <p className="mb-3">
                We use your personal data for the following purposes:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  To respond to your enquiries and provide the services you
                  request.
                </li>
                <li>
                  To send you website audits, proposals, and project updates.
                </li>
                <li>
                  To process payments and manage our business relationship.
                </li>
                <li>
                  To improve our website, services, and customer experience.
                </li>
                <li>
                  To comply with legal obligations and resolve disputes.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">
                4. Legal Basis for Processing
              </h2>
              <p className="mb-3">
                Under UK GDPR, we process your data on the following legal bases:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-ink">Consent</strong> — where you have
                  given us clear consent to process your data for a specific
                  purpose (e.g. marketing emails).
                </li>
                <li>
                  <strong className="text-ink">Contract</strong> — where processing
                  is necessary for the performance of a contract with you (e.g.
                  delivering a website build).
                </li>
                <li>
                  <strong className="text-ink">Legitimate interests</strong> — where
                  processing is necessary for our legitimate business interests
                  (e.g. responding to enquiries, improving our website), provided
                  these do not override your rights.
                </li>
                <li>
                  <strong className="text-ink">Legal obligation</strong> — where we
                  need to process data to comply with the law.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">
                5. Data Sharing and Third Parties
              </h2>
              <p className="mb-3">
                We do not sell your personal data. We may share your data with:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-ink">Service providers</strong> — trusted
                  third-party providers who help us operate our business, such as
                  hosting providers, email services, analytics tools (e.g.
                  Google Analytics), and payment processors. These providers are
                  contractually bound to protect your data.
                </li>
                <li>
                  <strong className="text-ink">WhatsApp (Meta)</strong> — when you
                  contact us via WhatsApp, your message data is handled by Meta
                  in accordance with their privacy policy.
                </li>
                <li>
                  <strong className="text-ink">Legal authorities</strong> — where
                  required by law, court order, or regulatory request.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">
                6. Cookies
              </h2>
              <p className="mb-3">
                Our website uses the following types of cookies:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-ink">Essential cookies</strong> — required
                  for the website to function (e.g. theme preferences). These
                  cannot be turned off.
                </li>
                <li>
                  <strong className="text-ink">Analytics cookies</strong> — help us
                  understand how visitors use our site (e.g. Google Analytics).
                  These are optional and only set when you consent.
                </li>
              </ul>
              <p className="mt-3">
                You can manage your cookie preferences at any time using the
                cookie banner on our site, or by clearing cookies through your
                browser settings.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">
                7. Data Retention
              </h2>
              <p className="mb-2">
                We retain your personal data only for as long as necessary to
                fulfil the purposes for which it was collected:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-ink">Enquiry data</strong> — retained for
                  up to 12 months after your last communication, unless you
                  become a client.
                </li>
                <li>
                  <strong className="text-ink">Client data</strong> — retained for
                  the duration of our working relationship plus 6 years, in line
                  with UK tax and accounting requirements.
                </li>
                <li>
                  <strong className="text-ink">Analytics data</strong> — anonymised
                  after 26 months (Google Analytics default).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">
                8. Your Rights
              </h2>
              <p className="mb-3">
                Under UK data protection law, you have the right to:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-ink">Access</strong> — request a copy of
                  the personal data we hold about you.
                </li>
                <li>
                  <strong className="text-ink">Rectification</strong> — request
                  correction of inaccurate or incomplete data.
                </li>
                <li>
                  <strong className="text-ink">Erasure</strong> — request deletion
                  of your personal data (&ldquo;right to be forgotten&rdquo;).
                </li>
                <li>
                  <strong className="text-ink">Restriction</strong> — request that
                  we limit how we process your data.
                </li>
                <li>
                  <strong className="text-ink">Object</strong> — object to our
                  processing of your data based on legitimate interests.
                </li>
                <li>
                  <strong className="text-ink">Data portability</strong> — request
                  your data in a structured, machine-readable format.
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us using the details
                below. We will respond within one month.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">
                9. Data Security
              </h2>
              <p>
                We take appropriate technical and organisational measures to
                protect your personal data against unauthorised access, loss,
                misuse, or alteration. These measures include encryption, secure
                hosting, access controls, and regular security reviews. However,
                no method of transmission over the internet is 100% secure, and
                we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">
                10. International Transfers
              </h2>
              <p>
                Some of our service providers may be based outside the UK. Where
                personal data is transferred internationally, we ensure
                appropriate safeguards are in place, such as Standard
                Contractual Clauses (SCCs) or adequacy decisions, in compliance
                with UK GDPR.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">
                11. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated &ldquo;Last
                updated&rdquo; date. We encourage you to review this policy
                periodically.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-heading text-xl font-medium text-ink">
                12. Contact Us
              </h2>
              <p className="mb-2">
                If you have any questions about this Privacy Policy or wish to
                exercise your data rights, please contact us:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  <strong className="text-ink">Email:</strong>{' '}
                  <a href="mailto:hello@coltura.uk" className="text-brand underline transition-colors hover:text-brand/80">
                    hello@coltura.uk
                  </a>
                </li>
                <li>
                  <strong className="text-ink">Phone:</strong>{' '}
                  <a href="tel:+447958394808" className="text-brand underline transition-colors hover:text-brand/80">
                    07958 394 808
                  </a>
                </li>
                <li>
                  <strong className="text-ink">Data Controller:</strong> Coltura
                  Solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
