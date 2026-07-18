import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { auditFunnelSchema } from '@/lib/validation';

export const runtime = 'nodejs';

/*
 * Lead delivery — three channels, tried in parallel, success if ANY lands:
 *
 *  1. FormSubmit.co server-side relay (EMAIL, PRIMARY): zero configuration —
 *     no env vars, no API key, no SMTP password to rot. The pattern is lifted
 *     from the Solar in Sport /api/contact route where it's proven in
 *     production. Two non-obvious requirements, learned the hard way there:
 *       - the Referer header MUST be set explicitly (server-side fetch sends
 *         none by default and FormSubmit rejects the request without it);
 *       - the recipient address must already be activated on FormSubmit.
 *         fen@coltura.uk is — the live coltura.uk contact form posts to it.
 *  2. Telegram (INSTANT PING): only if TELEGRAM_BOT_TOKEN is set in the env.
 *  3. Resend (EMAIL, OPTIONAL EXTRA): only if RESEND_API_KEY is set.
 *
 * The old behaviour 500'd whenever Telegram wasn't configured; now a lead is
 * only ever rejected if every channel fails.
 */
const FORMSUBMIT_TO = process.env.AUDIT_NOTIFICATION_EMAIL || 'fen@coltura.uk';
const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.AUDIT_FROM_EMAIL || 'Coltura Audits <audits@coltura.uk>';
const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const telegramChatId = process.env.TELEGRAM_CHAT_ID || '8709178984';

interface Lead {
  website: string;
  businessType: string;
  problem: string;
  name: string;
  email: string;
  phone?: string;
}

async function sendFormSubmitEmail(lead: Lead): Promise<boolean> {
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(FORMSUBMIT_TO)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // FormSubmit rejects requests with no Referer; server-side fetch
        // sends none by default. This single header is what makes it work.
        Referer: 'https://coltura.uk/get-started',
        Origin: 'https://coltura.uk',
      },
      signal: AbortSignal.timeout(15000),
      body: JSON.stringify({
        name: lead.name,
        email: lead.email,
        phone: lead.phone || '',
        website: lead.website,
        business_type: lead.businessType,
        biggest_problem: lead.problem,
        _subject: `Free audit request — ${lead.website} (${lead.name})`,
        _replyto: lead.email,
        _captcha: 'false',
        _template: 'table',
      }),
    });
    const body = await res.json().catch(() => null);
    if (!res.ok || !body || String(body.success) !== 'true') {
      console.error(`FormSubmit rejected (status ${res.status}):`, body ? JSON.stringify(body) : 'no JSON body');
      return false;
    }
    return true;
  } catch (err) {
    console.error('FormSubmit send exception:', err);
    return false;
  }
}

async function sendTelegramNotification(text: string): Promise<boolean> {
  if (!telegramBotToken) return false;
  try {
    const res = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: telegramChatId, text, disable_web_page_preview: true }),
      signal: AbortSignal.timeout(10000),
    });
    const json = await res.json();
    if (!json.ok) {
      console.error('Telegram send error:', json.description);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Telegram send exception:', err);
    return false;
  }
}

async function sendResendEmail(lead: Lead, text: string): Promise<boolean> {
  if (!resendApiKey) return false;
  try {
    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [FORMSUBMIT_TO],
      replyTo: lead.email,
      subject: `New Growth Audit request from ${lead.name}`,
      text,
    });
    if (error) {
      console.error('Resend error:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Resend exception:', err);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = auditFunnelSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.issues[0]?.message || 'Invalid form data';
      return NextResponse.json({ ok: false, error: firstError }, { status: 400 });
    }

    const data = result.data;

    // Honeypot check — silently succeed
    if (data.company && data.company.length > 0) {
      return NextResponse.json({ ok: true });
    }

    const lead: Lead = {
      website: data.website,
      businessType: data.businessType === 'Other' ? data.businessTypeOther || 'Other' : data.businessType,
      problem: data.problem === 'Other' ? data.problemOther || 'Other' : data.problem,
      name: data.name,
      email: data.email,
      phone: data.phone,
    };

    const messageText = [
      `New Free Audit funnel request`,
      ``,
      `Website: ${lead.website}`,
      `Business type: ${lead.businessType}`,
      `Biggest problem: ${lead.problem}`,
      ``,
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      lead.phone ? `Phone: ${lead.phone}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    // All channels race in parallel; one landing is enough.
    const [emailOk, telegramOk, resendOk] = await Promise.all([
      sendFormSubmitEmail(lead),
      sendTelegramNotification(messageText),
      sendResendEmail(lead, messageText),
    ]);

    console.log(
      `[audit-funnel] ${lead.website} <${lead.email}> — formsubmit:${emailOk} telegram:${telegramOk} resend:${resendOk}`,
    );

    if (!emailOk && !telegramOk && !resendOk) {
      return NextResponse.json(
        { ok: false, error: 'We couldn’t send your request just now. Please try again, or message us on WhatsApp.' },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Audit funnel route error:', err);
    return NextResponse.json(
      { ok: false, error: 'Something went wrong. Please try again later.' },
      { status: 500 },
    );
  }
}
