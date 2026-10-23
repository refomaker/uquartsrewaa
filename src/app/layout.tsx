import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'رواء | Rewaa — UQU Arts',description:'الأرشيف الفني لمعرض رواء | The Rewaa student art exhibition archive by UQU Arts.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl" suppressHydrationWarning><body>{children}</body></html>}
