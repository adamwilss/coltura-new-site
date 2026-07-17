'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import MagneticButton from './MagneticButton';

// Where submissions are emailed. Ported from the live Coltura site: the form
// POSTs JSON to FormSubmit.co, which relays it to this inbox. No backend needed.
// NOTE: FormSubmit requires a one-time activation — the first real submission
// triggers a confirmation email to this address that must be clicked once.
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/fen@coltura.uk';

const GOAL_OPTIONS = [
  { value: 'more-enquiries', label: 'More enquiries' },
  { value: 'more-phone-calls', label: 'More phone calls' },
  { value: 'more-bookings', label: 'More bookings' },
  { value: 'better-visibility', label: 'Better local visibility' },
  { value: 'more-professional', label: 'A more professional-looking website' },
  { value: 'not-sure', label: 'Not sure yet' },
];

const INPUT =
  'w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-brand/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40';

export default function AuditForm({ id }: { id?: string }) {
  const [form, setForm] = useState({
    name: '',
    business: '',
    website: '',
    email: '',
    phone: '',
    goal: '',
  });
  const [honey, setHoney] = useState(''); // spam honeypot — humans never fill this
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honey) {
      // Bot filled the hidden field — pretend success, send nothing.
      window.location.href = '/thank-you';
      return;
    }
    setSending(true);
    setError('');

    const payload = {
      name: form.name,
      business: form.business,
      website: form.website,
      email: form.email,
      phone: form.phone,
      goal: GOAL_OPTIONS.find((g) => g.value === form.goal)?.label || form.goal,
      source: 'get-started',
      _subject: `New Growth Audit request from ${form.name}`,
      _replyto: form.email,
      _template: 'table',
      _captcha: false,
    };

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      const json = await res.json();
      if (json.success !== 'true' && json.success !== true) {
        throw new Error('FormSubmit did not confirm delivery');
      }

      // Fire a lead conversion event (no-op until analytics is wired up).
      const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', {
          event_category: 'lead',
          event_label: 'get-started-form',
          method: 'form',
          page_location: window.location.href,
        });
      }

      window.location.href = '/thank-you';
    } catch {
      setError('Something went wrong sending your details. Please email fen@coltura.uk directly and we’ll review your site manually.');
      setSending(false);
    }
  };

  return (
    <div
      id={id}
      className="rounded-2xl border border-line bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_28px_60px_-30px_rgba(0,0,0,0.28)] sm:p-8"
    >
      <div className="mb-6">
        <h2 className="font-heading text-xl font-medium text-ink sm:text-2xl">
          Get your free growth audit
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          Tell us where to send it. A real person reviews your site by hand and emails you clear,
          practical feedback within 48 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Honeypot — visually hidden, off-screen; only bots fill it */}
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="af-name" className="mb-1.5 block text-sm font-medium text-ink">
              Your name <span className="text-brand">*</span>
            </label>
            <input id="af-name" required value={form.name} onChange={set('name')} className={INPUT} placeholder="John Smith" />
          </div>
          <div>
            <label htmlFor="af-business" className="mb-1.5 block text-sm font-medium text-ink">
              Business name <span className="text-brand">*</span>
            </label>
            <input id="af-business" required value={form.business} onChange={set('business')} className={INPUT} placeholder="Your Business Ltd" />
          </div>
        </div>

        <div>
          <label htmlFor="af-website" className="mb-1.5 block text-sm font-medium text-ink">
            Website URL <span className="text-brand">*</span>
          </label>
          <input id="af-website" type="url" required value={form.website} onChange={set('website')} className={INPUT} placeholder="yourbusiness.co.uk" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="af-email" className="mb-1.5 block text-sm font-medium text-ink">
              Email address <span className="text-brand">*</span>
            </label>
            <input id="af-email" type="email" required value={form.email} onChange={set('email')} className={INPUT} placeholder="you@business.com" />
          </div>
          <div>
            <label htmlFor="af-phone" className="mb-1.5 block text-sm font-medium text-ink">
              Phone <span className="text-muted">(optional)</span>
            </label>
            <input id="af-phone" type="tel" value={form.phone} onChange={set('phone')} className={INPUT} placeholder="Best number to reach you" />
          </div>
        </div>

        <div>
          <label htmlFor="af-goal" className="mb-1.5 block text-sm font-medium text-ink">
            What do you want more of? <span className="text-brand">*</span>
          </label>
          <select id="af-goal" required value={form.goal} onChange={set('goal')} className={`${INPUT} appearance-none`}>
            <option value="" disabled>Select one…</option>
            {GOAL_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        {error && <p className="text-sm leading-relaxed text-brand">{error}</p>}

        <MagneticButton strength={0.2} className="block w-full">
          <button
            type="submit"
            disabled={sending}
            className="flex min-h-14 w-full items-center justify-center gap-2.5 rounded-lg bg-brand px-8 text-sm font-bold tracking-[0.01em] text-on-brand shadow-[0_10px_24px_-8px_rgba(223,44,50,0.45)] transition-transform hover:scale-[1.01] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={17} strokeWidth={2} />
            {sending ? 'Sending…' : 'Send me my free audit'}
          </button>
        </MagneticButton>

        <p className="text-center text-[11px] leading-relaxed text-muted">
          No spam. No obligation. Your details go straight to a human who reviews your site and
          replies within 48 hours.
        </p>
      </form>
    </div>
  );
}
