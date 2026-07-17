import { z } from 'zod';

// Accepts URLs with or without a protocol ("coltura.uk" as well as
// "https://coltura.uk") and normalises to a fully-qualified URL string.
function normaliseUrl(value: string): string {
  const trimmed = value.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

const urlField = z
  .string()
  .min(1, 'Please enter your website')
  .max(300, 'That URL looks too long')
  .transform(normaliseUrl)
  .refine((value) => {
    try {
      const url = new URL(value);
      // Require at least one dot in the hostname (e.g. "coltura.uk")
      return url.hostname.includes('.');
    } catch {
      return false;
    }
  }, 'Please enter a valid website address');

export const auditFunnelSchema = z
  .object({
    website: urlField,
    businessType: z.string().min(1, 'Please choose a business type').max(120),
    businessTypeOther: z.string().max(120).optional().or(z.literal('')),
    problem: z.string().min(1, 'Please choose an option').max(160),
    problemOther: z.string().max(160).optional().or(z.literal('')),
    name: z.string().min(1, 'Please enter your name').max(120),
    email: z.string().email('Please enter a valid email').max(254),
    phone: z.string().max(40).optional().or(z.literal('')),
    company: z.string().max(0).optional().or(z.literal('')), // honeypot
  })
  .refine(
    (data) => data.businessType !== 'Other' || (data.businessTypeOther?.trim().length ?? 0) > 0,
    { message: 'Please tell us your industry', path: ['businessTypeOther'] },
  )
  .refine(
    (data) => data.problem !== 'Other' || (data.problemOther?.trim().length ?? 0) > 0,
    { message: 'Please tell us the problem', path: ['problemOther'] },
  );

export type AuditFunnelInput = z.infer<typeof auditFunnelSchema>;
