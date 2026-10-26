import Link from 'next/link';

export function FooterContactLinks({ lang = 'ar' }: { lang?: 'ar' | 'en' }) {
  const ar = lang === 'ar';

  return (
    <nav className="footer-contact-links" aria-label={ar ? 'روابط التواصل مع النادي' : 'Club contact links'}>
      <Link href="/club" lang={lang}>
        {ar ? 'عن النادي' : 'About the Club'}
      </Link>
      <span className="footer-contact-divider" aria-hidden="true" />
      <a
        href="https://x.com/uquarts"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ar ? 'حساب النادي على إكس ‎@uquarts (يفتح في تبويب جديد)' : "The club's X account @uquarts (opens in a new tab)"}
      >
        <svg className="footer-contact-icon footer-contact-icon-x" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M18.9 1.5h3.7l-8.1 9.2 9.5 12.5h-7.4l-5.8-7.6-6.7 7.6H.5l8.6-9.8L0 1.5h7.6l5.2 6.9 6.1-6.9Zm-1.3 19.5h2L6.5 3.6H4.3l13.3 17.4Z" />
        </svg>
        <span dir="ltr">@uquarts</span>
      </a>
      <span className="footer-contact-divider" aria-hidden="true" />
      <a
        href="mailto:designart@uqu.edu.sa"
        aria-label={ar ? 'راسلنا عبر البريد الإلكتروني designart@uqu.edu.sa' : 'Email us at designart@uqu.edu.sa'}
      >
        <svg className="footer-contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="2.5" y="4" width="19" height="16" rx="1" />
          <path d="m3.5 5.5 8.5 6.8 8.5-6.8" />
        </svg>
        <span lang={lang}>{ar ? 'راسلنا' : 'Email us'}</span>
      </a>
    </nav>
  );
}
