'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, X, Check } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/whatsapp';

const BUSINESS_TYPES = ['Builder', 'Plumber', 'Electrician', 'Hair Salon', 'Other'];
const PROBLEMS = [
  'Not enough calls/leads',
  'Looks outdated',
  'Too slow',
  'Not sure / just want a check',
  'Other',
];

const TOTAL_STEPS = 4;

interface FormState {
  website: string;
  businessType: string;
  businessTypeOther: string;
  problem: string;
  problemOther: string;
  name: string;
  email: string;
  phone: string;
}

const INITIAL_STATE: FormState = {
  website: '',
  businessType: '',
  businessTypeOther: '',
  problem: '',
  problemOther: '',
  name: '',
  email: '',
  phone: '',
};

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 32 : -32, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -32 : 32, opacity: 0 }),
};

const CARD =
  'w-full text-left px-5 py-4 min-h-[56px] rounded-xl border border-line bg-bg hover:border-brand/50 hover:bg-brand/5 active:bg-brand/10 transition-colors text-sm sm:text-base font-semibold text-ink';
const INPUT =
  'w-full bg-bg border border-line rounded-lg px-4 py-3.5 text-ink text-base placeholder:text-muted/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus:border-brand/50 transition-colors';
const BTN_BRAND =
  'w-full min-h-14 inline-flex items-center justify-center rounded-lg bg-brand px-6 text-base font-bold text-on-brand shadow-[0_10px_24px_-8px_rgba(223,44,50,0.45)] transition-transform hover:scale-[1.01] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60';
const BTN_OUTLINE =
  'w-full min-h-14 inline-flex items-center justify-center rounded-lg border border-line px-6 text-base font-semibold text-ink transition-colors hover:border-ink/30';

export default function AuditFunnelModal({
  onClose,
  initialWebsite = '',
}: {
  onClose: () => void;
  initialWebsite?: string;
}) {
  // A website handed in from the UrlScanner skips step 1 — the visitor
  // already typed it once; asking again would burn the momentum.
  const [step, setStep] = useState(initialWebsite ? 2 : 1);
  const [direction, setDirection] = useState(1);
  const [showOtherBiz, setShowOtherBiz] = useState(false);
  const [showOtherProblem, setShowOtherProblem] = useState(false);
  const [data, setData] = useState<FormState>({ ...INITIAL_STATE, website: initialWebsite });
  const [websiteError, setWebsiteError] = useState('');
  const [contactError, setContactError] = useState('');
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [success, setSuccess] = useState(false);

  // Lock body scroll while open; close on Escape.
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  function goTo(nextStep: number, dir: number) {
    setDirection(dir);
    setStep(nextStep);
  }

  function handleBack() {
    if (step === 2 && showOtherBiz) {
      setDirection(-1);
      setShowOtherBiz(false);
      return;
    }
    if (step === 3 && showOtherProblem) {
      setDirection(-1);
      setShowOtherProblem(false);
      return;
    }
    goTo(Math.max(1, step - 1), -1);
  }

  function normaliseUrl(value: string) {
    const trimmed = value.trim();
    return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  }

  function handleWebsiteContinue() {
    const trimmed = data.website.trim();
    if (!trimmed) {
      setWebsiteError('Please enter your website');
      return;
    }
    try {
      const url = new URL(normaliseUrl(trimmed));
      if (!url.hostname.includes('.')) throw new Error('invalid');
    } catch {
      setWebsiteError('Please enter a valid website address');
      return;
    }
    setWebsiteError('');
    // Remember the website for the session: if they close the modal now, the
    // next trigger (or the exit-intent card) reopens straight at step 2.
    try {
      sessionStorage.setItem('coltura-lead-website', normaliseUrl(trimmed));
    } catch {}
    goTo(2, 1);
  }

  function selectBusinessType(option: string) {
    if (option === 'Other') {
      setData((d) => ({ ...d, businessType: 'Other' }));
      setShowOtherBiz(true);
      return;
    }
    setData((d) => ({ ...d, businessType: option, businessTypeOther: '' }));
    goTo(3, 1);
  }

  function continueOtherBiz() {
    if (!data.businessTypeOther.trim()) return;
    goTo(3, 1);
  }

  function selectProblem(option: string) {
    if (option === 'Other') {
      setData((d) => ({ ...d, problem: 'Other' }));
      setShowOtherProblem(true);
      return;
    }
    setData((d) => ({ ...d, problem: option, problemOther: '' }));
    goTo(4, 1);
  }

  function continueOtherProblem() {
    if (!data.problemOther.trim()) return;
    goTo(4, 1);
  }

  async function handleSubmit() {
    if (!data.name.trim()) {
      setContactError('Please enter your name');
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim());
    if (!emailOk) {
      setContactError('Please enter a valid email');
      return;
    }
    setContactError('');
    setSubmitError('');
    setSending(true);

    try {
      const res = await fetch('/api/audit-funnel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, website: normaliseUrl(data.website), company: '' }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Something went wrong');
      }
      setSuccess(true);
      // Session flags: stop the exit-intent card nagging someone who already
      // converted, and clear the remembered website.
      try {
        sessionStorage.setItem('coltura-funnel-done', '1');
        sessionStorage.removeItem('coltura-lead-website');
      } catch {}
      // Fire a lead-conversion event (ready for Google Ads / GA once loaded).
      const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', {
          event_category: 'lead',
          event_label: 'get-started-funnel',
          method: 'funnel',
          page_location: window.location.href,
        });
      }
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  }

  const showBack = !success && (step > 1 || showOtherBiz || showOtherProblem);
  const progressPct = success ? 100 : (step / TOTAL_STEPS) * 100;
  const stepKey = success
    ? 'success'
    : `${step}-${showOtherBiz ? 'ob' : ''}${showOtherProblem ? 'op' : ''}`;

  const firstName = data.name.trim().split(/\s+/)[0] || '';
  const displayWebsite = (() => {
    try {
      return new URL(normaliseUrl(data.website)).hostname.replace(/^www\./, '');
    } catch {
      return '';
    }
  })();

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Free audit request"
    >
      <div
        className="flex max-h-[94vh] w-full flex-col overflow-hidden rounded-t-2xl border border-line bg-card shadow-2xl sm:max-h-[90vh] sm:max-w-md sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Progress bar */}
        <div className="h-1 w-full bg-line">
          <div className="h-full bg-brand transition-all duration-300 ease-out" style={{ width: `${progressPct}%` }} />
        </div>

        {/* Header: back / step counter / close */}
        <div className="flex items-center justify-between px-4 pt-4">
          {showBack ? (
            <button
              type="button"
              onClick={handleBack}
              aria-label="Back"
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <ArrowLeft size={18} strokeWidth={2} />
            </button>
          ) : (
            <span className="h-9 w-9" />
          )}
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted">
            {success ? 'Done' : `Step ${step} of ${TOTAL_STEPS}`}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-6 pb-8 pt-2 sm:px-8">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={stepKey}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.22, ease: 'easeInOut' }}
            >
              {success && (
                <div className="relative py-6 text-center">
                  {/* one quiet burst of confetti — the peak-end moment */}
                  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                    {Array.from({ length: 20 }, (_, i) => (
                      <motion.span
                        key={i}
                        className="absolute left-1/2 top-16 h-2 w-1.5 rounded-[1px]"
                        style={{ background: i % 3 ? '#df2c32' : '#e0a53f' }}
                        initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                        animate={{
                          x: (i % 2 ? 1 : -1) * (24 + ((i * 13) % 130)),
                          y: 90 + ((i * 29) % 150),
                          opacity: 0,
                          rotate: (i % 2 ? 1 : -1) * (140 + ((i * 47) % 220)),
                        }}
                        transition={{ duration: 1.05 + (i % 5) * 0.13, ease: 'easeOut' }}
                      />
                    ))}
                  </div>
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-brand/25 bg-brand/10">
                    <Check size={28} strokeWidth={2.5} className="text-brand" />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-medium text-ink">
                    {firstName ? `You're all set, ${firstName}` : "You're all set"}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted">
                    We&apos;ll review{' '}
                    <span className="font-medium text-ink">{displayWebsite || 'your site'}</span> by hand
                    and send your free audit to <span className="font-medium text-ink">{data.email}</span>{' '}
                    within 48 hours.
                  </p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${BTN_BRAND} mb-3`}
                  >
                    Want it faster? Message us on WhatsApp
                  </a>
                  <button type="button" onClick={onClose} className={BTN_OUTLINE}>
                    Close
                  </button>
                </div>
              )}

              {!success && step === 1 && (
                <div>
                  <h3 className="mb-5 font-heading text-xl font-medium text-ink sm:text-2xl">What&apos;s your website?</h3>
                  <input
                    type="text"
                    inputMode="url"
                    autoFocus
                    value={data.website}
                    onChange={(e) => {
                      setData((d) => ({ ...d, website: e.target.value }));
                      if (websiteError) setWebsiteError('');
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && handleWebsiteContinue()}
                    placeholder="yourbusiness.co.uk"
                    className={INPUT}
                  />
                  {websiteError && <p className="mt-2 text-sm text-brand">{websiteError}</p>}
                  <button type="button" onClick={handleWebsiteContinue} className={`${BTN_BRAND} mt-5`}>
                    Continue
                  </button>
                  <p className="mt-5 text-center text-sm text-muted">
                    Prefer WhatsApp instead?{' '}
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-medium text-brand hover:underline">
                      Message us there →
                    </a>
                  </p>
                </div>
              )}

              {!success && step === 2 && !showOtherBiz && (
                <div>
                  <h3 className="mb-5 font-heading text-xl font-medium text-ink sm:text-2xl">What kind of business are you?</h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {BUSINESS_TYPES.map((option) => (
                      <button key={option} type="button" onClick={() => selectBusinessType(option)} className={CARD}>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {!success && step === 2 && showOtherBiz && (
                <div>
                  <h3 className="mb-5 font-heading text-xl font-medium text-ink sm:text-2xl">Please type your industry</h3>
                  <input
                    type="text"
                    autoFocus
                    value={data.businessTypeOther}
                    onChange={(e) => setData((d) => ({ ...d, businessTypeOther: e.target.value }))}
                    onKeyDown={(e) => e.key === 'Enter' && continueOtherBiz()}
                    placeholder="e.g. Landscaper"
                    className={INPUT}
                  />
                  <button type="button" onClick={continueOtherBiz} disabled={!data.businessTypeOther.trim()} className={`${BTN_BRAND} mt-5`}>
                    Continue
                  </button>
                </div>
              )}

              {!success && step === 3 && !showOtherProblem && (
                <div>
                  <h3 className="mb-5 font-heading text-xl font-medium text-ink sm:text-2xl">What&apos;s the biggest problem with your site right now?</h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {PROBLEMS.map((option) => (
                      <button key={option} type="button" onClick={() => selectProblem(option)} className={CARD}>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {!success && step === 3 && showOtherProblem && (
                <div>
                  <h3 className="mb-5 font-heading text-xl font-medium text-ink sm:text-2xl">Please describe the problem</h3>
                  <input
                    type="text"
                    autoFocus
                    value={data.problemOther}
                    onChange={(e) => setData((d) => ({ ...d, problemOther: e.target.value }))}
                    onKeyDown={(e) => e.key === 'Enter' && continueOtherProblem()}
                    placeholder="Tell us what's wrong"
                    className={INPUT}
                  />
                  <button type="button" onClick={continueOtherProblem} disabled={!data.problemOther.trim()} className={`${BTN_BRAND} mt-5`}>
                    Continue
                  </button>
                </div>
              )}

              {!success && step === 4 && (
                <div>
                  <h3 className="mb-5 font-heading text-xl font-medium text-ink sm:text-2xl">Where should we send your audit?</h3>
                  <div className="space-y-3">
                    <input
                      type="text"
                      autoFocus
                      value={data.name}
                      onChange={(e) => {
                        setData((d) => ({ ...d, name: e.target.value }));
                        if (contactError) setContactError('');
                      }}
                      placeholder="Your name"
                      className={INPUT}
                    />
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => {
                        setData((d) => ({ ...d, email: e.target.value }));
                        if (contactError) setContactError('');
                      }}
                      placeholder="Email address"
                      className={INPUT}
                    />
                    <input
                      type="tel"
                      value={data.phone}
                      onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
                      placeholder="Phone (optional)"
                      className={INPUT}
                    />
                  </div>
                  {(contactError || submitError) && <p className="mt-3 text-sm text-brand">{contactError || submitError}</p>}
                  <button type="button" onClick={handleSubmit} disabled={sending} className={`${BTN_BRAND} mt-5`}>
                    {sending ? 'Sending…' : 'Get My Free Audit'}
                  </button>
                  <p className="mt-4 text-center text-xs leading-relaxed text-muted">
                    No spam. Your details go to a human who will review your site.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {!success && (
          <div className="border-t border-line px-6 py-3 sm:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-muted">
              {['Free', 'Reviewed by a human', 'Back in 48 hours'].map((t) => (
                <span key={t} className="flex items-center gap-1">
                  <Check size={12} strokeWidth={2.5} className="text-brand" /> {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
