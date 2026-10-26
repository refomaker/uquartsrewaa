import type { Metadata } from 'next';
// @ts-ignore: CSS side-effect imports are handled by Next.js and its bundler.
import './globals.css';
// @ts-ignore: CSS side-effect imports are handled by Next.js and its bundler.
import './visual-polish.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL, TITLE_TEMPLATE, shareMetadata } from '@/lib/site-metadata';
export const metadata:Metadata={metadataBase:new URL(SITE_URL),title:{default:SITE_TITLE,template:TITLE_TEMPLATE},description:SITE_DESCRIPTION,...shareMetadata(SITE_TITLE,SITE_DESCRIPTION)};
const initializePreferences = `try { document.documentElement.classList.toggle('dark', localStorage.getItem('rewaa-theme') === 'dark'); const lang = localStorage.getItem('rewaa-language') === 'en' ? 'en' : 'ar'; document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; } catch {}`;
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl" data-scroll-behavior="smooth" suppressHydrationWarning><body><script dangerouslySetInnerHTML={{__html:initializePreferences}}/><ThemeProvider><SiteHeader/>{children}<SiteFooter/></ThemeProvider></body></html>}
