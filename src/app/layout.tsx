import type { Metadata } from 'next';
import Script from 'next/script';
import { Newsreader, Fraunces } from 'next/font/google';
import ThemeInit from '@/components/ThemeInit';
import MicroMoments from '@/components/MicroMoments';
import CookieConsent from '@/components/CookieConsent';
import GAdsConversionTracking from '@/components/GAdsConversionTracking';
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
        <meta name="google-site-verification" content="uxymrK7EQaWon1eONCpqYmLUCVISnKqGXPbx56NrmVM" />
        <ThemeInit />
        {/* Google Analytics GA4 + Google Ads — same properties as the live
            site (G-2T6SRJF838 / AW-18203149085), but consent-aware: Consent
            Mode v2 defaults everything to denied, and CookieConsent upgrades
            it when the visitor accepts. A previously-saved acceptance is
            replayed before config so returning visitors are tracked from the
            first page view. */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2T6SRJF838" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
            try {
              if (localStorage.getItem('coltura-cookie-consent') === 'accepted') {
                gtag('consent', 'update', {
                  ad_storage: 'granted',
                  analytics_storage: 'granted',
                  ad_user_data: 'granted',
                  ad_personalization: 'granted'
                });
              }
            } catch (e) {}
            gtag('config', 'G-2T6SRJF838');
            gtag('config', 'AW-18203149085');
          `}
        </Script>
      </head>
      <body className="bg-bg font-sans text-ink antialiased">
        <MicroMoments />
        {children}
        <CookieConsent />
        <GAdsConversionTracking />
      </body>
    </html>
  );
}
