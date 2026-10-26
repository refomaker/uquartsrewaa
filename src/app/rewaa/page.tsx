'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useSitePreferences } from '@/components/ThemeProvider';
export default function About(){const{lang,theme}=useSitePreferences(),dark=theme==='dark',ar=lang==='ar';return <main className={`site ${theme}`} dir={ar?'rtl':'ltr'} lang={lang}><section className="about-page"><h1 className="about-title" aria-label={ar?'عن رواء':'About Rewaa'}><span aria-hidden="true">{ar?'عن':'About'}</span><Image src={dark?'/logos/rewaa-dark.png':'/logos/rewaa-light.png'} alt="" width={dark?1054:1073} height={dark?1008:986} className="about-title-logo"/></h1>{ar?<><p>رواء ملتقى إبداعي ينظّمه نادي التصاميم والفنون بجامعة أم القرى، ويجمع المواهب الفنية والندية الطلابية في مساحة تحتفي بالتعلّم والإنتاج الفني والتواصل المهني.</p><p>على مدى خمسة أيام، يخوض الزوار تجربة متنوعة تشمل المعرض الفني الرئيسي، وورش العمل، ومختبر الأفكار، والمعرض الحي، إلى جانب المسابقات الفنية والتجارب التفاعلية التي تعزّز التعاون وتبادل الخبرات، وتتيح للمبدعين عرض أعمالهم ومشاركة أفكارهم.</p><p>ولا تتوقف حكاية رواء بانتهاء الفعالية؛ إذ يمتد أثر التجربة عبر أرشيف رقمي يوثّق الأعمال الفنية ويحفظها لتبقى متاحة للاكتشاف والعودة إليها.</p></>:<><p>Rewaa is a creative gathering organized by the Designs & Arts Club at Umm Al-Qura University. It brings together artistic talents and student clubs in a space that celebrates learning, artistic production, and professional exchange.</p><p>Over five days, visitors enjoy a varied experience that includes the main art exhibition, workshops, the Ideas Lab, live exhibitions, as well as art competitions and interactive experiences that encourage collaboration and the exchange of expertise, while giving creatives a place to present their work and share their ideas.</p><p>Rewaa’s story does not end when the event is over. Its impact continues through a digital archive that documents and preserves artworks, keeping them available to discover and revisit.</p></>}<div className="club-card"><Image src={`/logos/club-${ar?'ar':'en'}-${dark?'white':'light'}.png`} alt={ar?'شعار نادي التصاميم والفنون':'Designs & Arts Club logo'} width={637} height={574} className="club-brand-logo"/><div><b>{ar?'نادي التصاميم والفنون':'Designs & Arts Club'}</b><span>DESIGNS & ARTS CLUB · UMM AL-QURA UNIVERSITY</span></div></div><Link href="/" className="hero-cta">{ar?'استكشف الأرشيف':'Explore the archive'} <span><svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg></span></Link></section></main>}
