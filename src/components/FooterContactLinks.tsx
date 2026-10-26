export function FooterContactLinks({ lang = 'ar' }: { lang?: 'ar' | 'en' }) {
  const ar = lang === 'ar';

  return (
    <nav className="footer-contact-links" aria-label={ar ? 'روابط التواصل مع النادي' : 'Club contact links'}>
      <a
        href="https://x.com/uquarts"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ar ? 'حساب النادي الرسمي على إكس (يفتح في تبويب جديد)' : "Visit the club's official X account (opens in a new tab)"}
        title={ar ? 'حساب النادي الرسمي على إكس' : "Club's official X account"}
      >
        <svg className="footer-contact-icon footer-contact-icon-x" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M18.9 1.5h3.7l-8.1 9.2 9.5 12.5h-7.4l-5.8-7.6-6.7 7.6H.5l8.6-9.8L0 1.5h7.6l5.2 6.9 6.1-6.9Zm-1.3 19.5h2L6.5 3.6H4.3l13.3 17.4Z" />
        </svg>
      </a>
      <span className="footer-contact-divider" aria-hidden="true" />
      <a
        href="mailto:designart@uqu.edu.sa"
        aria-label={ar ? 'مراسلة النادي عبر البريد الإلكتروني' : 'Email the club'}
        title={ar ? 'البريد الإلكتروني' : 'Email'}
      >
        <svg className="footer-contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="2.5" y="4" width="19" height="16" rx="1" />
          <path d="m3.5 5.5 8.5 6.8 8.5-6.8" />
        </svg>
      </a>
    </nav>
  );
}
