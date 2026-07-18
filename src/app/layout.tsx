import type { Metadata } from 'next';
import { Newsreader, Fraunces } from 'next/font/google';
import ThemeInit from '@/components/ThemeInit';
import MicroMoments from '@/components/MicroMoments';
import CookieConsent from '@/components/CookieConsent';
import './globals.css';

// Body copy runs in this optical-size serif rather than a UI sans — Inter/
// system-ui reads as generic app chrome, and a full serif system (Newsreader
// for text, Fraunces for display) is what actually sells "editorial, ancient
// document, ultra premium" rather than "React dashboard."
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Coltura — Websites that bring in calls, not just clicks.',
  description:
    'We design strategic websites that turn interest into real enquiries — and consistently win local business.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        <ThemeInit />
      </head>
      <body className="bg-bg font-sans text-ink antialiased">
        <MicroMoments />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
