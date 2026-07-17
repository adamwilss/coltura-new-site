import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { auditFunnelSchema } from '@/lib/validation';

export const runtime = 'nodejs';

const resendApiKey = process.env.RESEND_API_KEY;
// Where lead notifications are emailed (backup channel).
const notificationEmail = process.env.AUDIT_NOTIFICATION_EMAIL || 'fen@coltura.uk';
const fromEmail = process.env.AUDIT_FROM_EMAIL || 'Coltura Audits <audits@coltura.uk>';

// Primary notification channel: pings Adam's Telegram directly instead of
// relying on email (email deliverability for lead forms has been unreliable).
// Only TELEGRAM_BOT_TOKEN needs setting in Vercel (grab it from the Telegram
// bridge .env); TELEGRAM_CHAT_ID defaults to Adam's chat.
const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const telegramChatId = process.env.TELEGRAM_CHAT_ID || '8709178984';

async function sendTelegramNotification(text: string): Promise<boolean> {
  if (!telegramBotToken) {
    console.error('TELEGRAM_BOT_TOKEN is not set');
    return false;
  }
  try {
    const res = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: telegramChatId, text, disable_web_page_preview: true }),
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

    const businessType = data.businessType === 'Other' ? data.businessTypeOther : data.businessType;
    const problem = data.problem === 'Other' ? data.problemOther : data.problem;

    const messageText = [
      `New Free Audit funnel request`,
      ``,
      `Website: ${data.website}`,
      `Business type: ${businessType}`,
      `Biggest problem: ${problem}`,
      ``,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    const telegramOk = await sendTelegramNotification(messageText);

    // Email is a best-effort secondary copy — don't fail the request if it's
    // not configured or errors out; Telegram is the primary channel.
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const { error } = await resend.emails.send({
        from: fromEmail,
        to: [notificationEmail],
        replyTo: data.email,
        subject: `New Growth Audit request from ${data.name}`,
        text: messageText,
      });
      if (error) {
        console.error('Resend error (non-fatal, Telegram is primary):', error);
      }
    }

    if (!telegramOk && !resendApiKey) {
      return NextResponse.json(
        { ok: false, error: 'Notification service is not configured. Please try again later.' },
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
