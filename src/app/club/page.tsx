'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSitePreferences } from '@/components/ThemeProvider';

export default function ClubPage() {
  const { lang, theme } = useSitePreferences();
  const dark = theme === 'dark';
  const ar = lang === 'ar';

  return (
    <main className={`site ${theme}`} dir={ar ? 'rtl' : 'ltr'} lang={lang}>
      <section className="about-page club-page">
        <h1
          className="club-title"
          aria-label={ar ? 'عن نادي التصاميم والفنون' : 'About the Designs & Arts Club'}
        >
          <span aria-hidden="true">{ar ? 'عن' : 'About'}</span>
          <Image
            src={dark ? '/logos/club-ar-title-white.png' : '/logos/club-ar-title-light.png'}
            alt={ar ? 'شعار نادي التصاميم والفنون' : 'Designs & Arts Club logo'}
            width={2172}
            height={724}
            className="club-title-logo"
          />
        </h1>
        <p className="club-description">
          {ar
            ? 'نادي التصاميم والفنون هو نادٍ إبداعي تابع لكلية التصاميم والفنون بجامعة أم القرى، يسعى إلى فتح مساحات لاكتشاف المواهب وصقل القدرات وتطوير الأفكار. نؤمن بأن الإبداع ليس حكرًا على الفنانين أو الرسامين أو المصممين، بل هو قدرة كامنة في كل شخص، تتجلى في طريقة تفكيره وأفكاره ورؤيته للعالم. ومن هذا المنطلق، نمنح كل فرد فرصة للتعبير عن أفكاره وتحويلها إلى أثر ملموس.'
            : 'The Designs & Arts Club is a creative club affiliated with the College of Design and Arts at Umm Al-Qura University. It seeks to open spaces where people can discover their talents, refine their abilities, and develop ideas. We believe creativity belongs not only to artists, painters, or designers, but is a capacity within everyone, reflected in the way they think, form ideas, and see the world. With this in mind, we give each person the opportunity to express their ideas and turn them into tangible impact.'}
        </p>

        <aside className="club-identity">
          <Image
            src={`/logos/club-${ar ? 'ar' : 'en'}-${dark ? 'white' : 'light'}.png`}
            alt={ar ? 'شعار نادي التصاميم والفنون' : 'Designs & Arts Club logo'}
            width={637}
            height={574}
            className="club-brand-logo"
          />
          <p>
            {ar
              ? 'ينظّم نادي التصاميم والفنون معرض رواء وأرشيفه الرقمي؛ ورواء هو هوية المعرض الفني والأرشيف.'
              : 'The Designs & Arts Club organizes the Rewaa exhibition and its digital archive. Rewaa is the identity of the art exhibition and archive.'}
          </p>
        </aside>
      </section>

      <footer className="footer">
        <span>{ar ? 'نادي التصاميم والفنون · جامعة أم القرى' : 'Designs & Arts Club · Umm Al-Qura University'}</span>
        <span>© UQU ARTS</span>
      </footer>
    </main>
  );
}
