'use client';

import { useSitePreferences } from '@/components/ThemeProvider';
import { FooterContactLinks } from '@/components/FooterContactLinks';

export function SiteFooter() {
  const { lang, theme } = useSitePreferences();
  const ar = lang === 'ar';

  return (
    <footer className={`footer footer-contact-row ${theme}`} lang={lang} dir={ar ? 'rtl' : 'ltr'}>
      <FooterContactLinks lang={lang} />
      <span>
        {ar
          ? '© 2026 جميع حقوق الموقع محفوظة لإدارة نادي التصاميم والفنون.'
          : '© 2026 All website rights reserved to the Designs & Arts Club administration.'}
      </span>
    </footer>
  );
}
