// Real Coltura contact details, copied verbatim from the live site
// (C:\Users\Fen\.openclaw\workspace\coltura\src\lib\whatsapp.ts).
export const WHATSAPP_NUMBER = '447958394808';
export const PHONE_DISPLAY = '07958 394808';
export const WHATSAPP_TEXT =
  "Hi Coltura, I'd like my free Growth Audit. My website is: ";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT,
)}`;

// Scarcity — free audit spots per month. Genuine/managed on the live site,
// loosely tied to how far through the month it is (not a fake countdown).
export const MONTHLY_QUOTA = 5;

export function getSpotsLeft(now: Date): number {
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const progress = (now.getDate() - 1) / (daysInMonth - 1);
  const remaining = Math.round(MONTHLY_QUOTA - 1 - progress * (MONTHLY_QUOTA - 2));
  return Math.max(1, Math.min(MONTHLY_QUOTA - 1, remaining));
}
