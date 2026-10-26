'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useSitePreferences, type Language, type Theme } from '@/components/ThemeProvider';

export function SiteHeader() {
  const { theme, toggleTheme, lang, setLang, setTheme } = useSitePreferences();
  const pathname = usePathname();
  const ar = lang === 'ar';
  const isHome = pathname === '/';

  useEffect(() => {
    try {
      const savedTheme = window.localStorage.getItem('rewaa-theme');
      const savedLanguage = window.localStorage.getItem('rewaa-language');
      if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme as Theme);
      if (savedLanguage === 'ar' || savedLanguage === 'en') setLang(savedLanguage as Language);
    } catch {
      // Existing in-memory preferences remain active if browser storage is unavailable.
    }
  }, [pathname, setLang, setTheme]);

  const languageButton = (
    <button className="text-button" type="button" onClick={() => setLang(ar ? 'en' : 'ar')}>
      {ar ? 'English' : 'العربية'}
    </button>
  );
  const themeButton = (
    <button
      className="theme-button"
      type="button"
      aria-label={ar ? (theme === 'dark' ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن') : (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode')}
      title={ar ? (theme === 'dark' ? 'الوضع الفاتح' : 'الوضع الداكن') : (theme === 'dark' ? 'Light mode' : 'Dark mode')}
      aria-pressed={theme === 'dark'}
      onClick={toggleTheme}
    >
      {theme === 'light' ? '☾' : '☼'}
    </button>
  );
  const separator = (key: string) => <span key={key} className="nav-separator" aria-hidden="true">║</span>;

  return (
    <header className="topbar">
      <Link
        href="https://uqu.edu.sa"
        target="_blank"
        rel="noopener noreferrer"
        className="brand"
        aria-label={ar ? 'زيارة موقع جامعة أم القرى (يفتح في تبويب جديد)' : 'Visit Umm Al-Qura University website (opens in a new tab)'}
      >
        <Image
          src={theme === 'dark' ? '/logos/university-horizontal-white.png' : '/logos/university-horizontal-light.png'}
          alt=""
          width={1532}
          height={640}
          className="brand-logo"
        />
      </Link>
      {isHome ? (
        <nav className="top-right primary-nav" aria-label={ar ? 'التنقل الرئيسي' : 'Main navigation'}>
          <Link className="club-label" href="/club">{ar ? 'عن النادي' : 'About the Club'}</Link>
          {separator('club-story')}
          <Link className="nav-link" href="/rewaa">{ar ? 'حكاية رواء' : 'Rewaa story'}</Link>
          {separator('story-language')}
          {languageButton}
          {separator('language-theme')}
          {themeButton}
        </nav>
      ) : (
        <nav className="top-right secondary-nav" aria-label={ar ? 'التنقل الثانوي' : 'Secondary navigation'}>
          <Link className="back-archive" href="/">
            <span aria-hidden="true">{ar ? '→' : '←'}</span>
            {ar ? 'العودة إلى الأرشيف' : 'Back to Archive'}
          </Link>
          {separator('back-language')}
          {languageButton}
          {separator('language-theme')}
          {themeButton}
        </nav>
      )}
    </header>
  );
}
