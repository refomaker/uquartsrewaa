import type { Metadata } from 'next';
import './globals.css';
import './visual-polish.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SiteHeader } from '@/components/SiteHeader';
export const metadata:Metadata={title:'رواء | Rewaa — UQU Arts',description:'الأرشيف الفني لمعرض رواء | The Rewaa student art exhibition archive by UQU Arts.'};
const initializePreferences = `try { document.documentElement.classList.toggle('dark', localStorage.getItem('rewaa-theme') === 'dark'); const lang = localStorage.getItem('rewaa-language') === 'en' ? 'en' : 'ar'; document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; } catch {}`;
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl" data-scroll-behavior="smooth" suppressHydrationWarning><body><script dangerouslySetInnerHTML={{__html:initializePreferences}}/><ThemeProvider><SiteHeader/>{children}</ThemeProvider></body></html>}
