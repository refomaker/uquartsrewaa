'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Artwork } from '@/lib/types';
import { useSitePreferences } from '@/components/ThemeProvider';
import { FooterContactLinks } from '@/components/FooterContactLinks';

const categoryLabelsAr: Record<string, string> = {
  Painting: 'رسم',
  'Mixed media': 'وسائط متعددة',
  Photography: 'تصوير فوتوغرافي',
  Illustration: 'رسم توضيحي',
  Drawing: 'رسم',
  'Textile art': 'فن النسيج',
};

const mediumLabelsAr: Record<string, string> = {
  'Oil on canvas': 'ألوان زيتية على قماش',
  'Acrylic and collage': 'أكريليك وكولاج',
  'Digital photography': 'تصوير رقمي',
  'Watercolor on paper': 'ألوان مائية على ورق',
  'Ink on paper': 'حبر على ورق',
  'Acrylic on canvas': 'أكريليك على قماش',
  'Print and collage': 'طباعة وكولاج',
  'Woven fibers': 'ألياف منسوجة',
};

export function ArtworkDetail({ artwork: a, related }: { artwork: Artwork; related: Artwork[] }) {
  const { lang, theme } = useSitePreferences();
  const ar = lang === 'ar';
  const secondaryLang = ar ? 'en' : 'ar';
  const category = ar ? categoryLabelsAr[a.category] ?? a.category : a.category;
  const categoryLang = ar && categoryLabelsAr[a.category] ? 'ar' : 'en';
  const medium = ar ? mediumLabelsAr[a.medium] ?? a.medium : a.medium;
  const mediumLang = ar && mediumLabelsAr[a.medium] ? 'ar' : 'en';

  return (
    <main className={`site ${theme}`} dir={ar ? 'rtl' : 'ltr'} lang={lang}>
      <article className="detail">
        <div className="detail-image">
          <Image
            src={a.image_url}
            alt={ar ? `صورة العمل الفني: ${a.title_ar}` : `Artwork: ${a.title_en}`}
            fill
            priority
            sizes="(max-width: 800px) 100vw, 70vw"
          />
        </div>
        <div className="detail-info">
          <span className="eyebrow"><span lang="en" dir="ltr">{a.id}</span> · <span lang={categoryLang} dir={categoryLang === 'ar' ? 'rtl' : 'ltr'}>{category}</span></span>
          <h1 lang={lang} dir={ar ? 'rtl' : 'ltr'}>{ar ? a.title_ar : a.title_en}</h1>
          <p className="detail-en" lang={secondaryLang} dir={ar ? 'ltr' : 'rtl'}>
            {ar ? a.title_en : a.title_ar}
          </p>
          <p className="detail-artist">
            <span lang={lang} dir={ar ? 'rtl' : 'ltr'}>{ar ? a.artist_ar : a.artist_en}</span>
            <span aria-hidden="true">·</span>
            <span className="detail-secondary" lang={secondaryLang} dir={ar ? 'ltr' : 'rtl'}>
              {ar ? a.artist_en : a.artist_ar}
            </span>
          </p>
          <div className="detail-description">
            <p lang={lang} dir={ar ? 'rtl' : 'ltr'}>{ar ? a.description_ar : a.description_en}</p>
            <p className="detail-secondary" lang={secondaryLang} dir={ar ? 'ltr' : 'rtl'}>
              {ar ? a.description_en : a.description_ar}
            </p>
          </div>
          <dl className="facts">
            <div>
              <dt>{ar ? 'الخامة' : 'Medium'}</dt>
              <dd lang={mediumLang} dir={mediumLang === 'ar' ? 'rtl' : 'ltr'}>{medium}</dd>
            </div>
            {a.year && <div><dt>{ar ? 'السنة' : 'Year'}</dt><dd>{a.year}</dd></div>}
            {a.dimensions && <div><dt>{ar ? 'الأبعاد' : 'Dimensions'}</dt><dd lang="en" dir="ltr">{a.dimensions}</dd></div>}
          </dl>
        </div>
      </article>
      {related.length > 0 && (
        <section className="related">
          <h2>{ar ? 'أعمال أخرى' : 'Related works'} <span lang="en" dir="ltr">MORE FROM THE ARCHIVE</span></h2>
          <div className="related-grid">
            {related.map((x) => (
              <Link className="art-card related-card" href={`/rewaa/art/${x.id}`} key={x.id}>
                <div className="art-image">
                  <Image
                    src={x.thumbnail_url || x.image_url}
                    alt={ar ? x.title_ar : x.title_en}
                    width={1200}
                    height={900}
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                  <span className="art-id" lang="en" dir="ltr">{x.id}</span>
                  <span className="art-arrow" aria-hidden="true"><svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg></span>
                </div>
                <div className="art-meta">
                  <span className="art-category">
                    <span lang={ar && categoryLabelsAr[x.category] ? 'ar' : 'en'} dir={ar && categoryLabelsAr[x.category] ? 'rtl' : 'ltr'}>
                      {ar ? categoryLabelsAr[x.category] ?? x.category : x.category}
                    </span>
                    {' · '}
                    <span lang={ar && mediumLabelsAr[x.medium] ? 'ar' : 'en'} dir={ar && mediumLabelsAr[x.medium] ? 'rtl' : 'ltr'}>
                      {ar ? mediumLabelsAr[x.medium] ?? x.medium : x.medium}
                    </span>
                  </span>
                  <h3>{ar ? x.title_ar : x.title_en}</h3>
                  <p lang={ar ? 'ar' : 'en'} dir={ar ? 'rtl' : 'ltr'}>{ar ? 'الفنان' : 'Artist'} / {ar ? x.artist_ar : x.artist_en}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
      <footer className="footer footer-contact-row">
        <FooterContactLinks lang={lang} />
        <span>{ar ? '© 2026 جميع حقوق الموقع محفوظة لإدارة نادي التصاميم والفنون.' : '© 2026 All website rights reserved to the Designs & Arts Club administration.'}</span>
      </footer>
    </main>
  );
}
