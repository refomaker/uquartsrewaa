'use client';

import Link from 'next/link';
import { useSitePreferences } from '@/components/ThemeProvider';

export default function NotFound() {
  const { lang, theme } = useSitePreferences();
  const ar = lang === 'ar';

  return (
    <main className={`site ${theme}`} dir={ar ? 'rtl' : 'ltr'} lang={lang}>
      <section className="not-found">
        <span className="eyebrow">404 · UQU ARTS ARCHIVE</span>
        <h1>{ar ? 'هذا العمل غير متاح' : 'This artwork is unavailable'}<span className="gold-dot">.</span></h1>
        <p>{ar ? 'قد يكون الرابط غير صحيح أو لم يعد العمل منشوراً.' : 'The link may be invalid or the artwork may no longer be published.'}</p>
        <Link href="/" className="hero-cta">{ar ? 'العودة إلى الأرشيف' : 'Back to archive'} <span>↗</span></Link>
      </section>
    </main>
  );
}
