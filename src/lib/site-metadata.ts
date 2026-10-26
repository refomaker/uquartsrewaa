import type { Metadata } from 'next';

export const SITE_URL = process.env.PRODUCTION_SITE_URL || 'https://www.uquarts.com';
export const SITE_NAME = 'معرض رواء | Rewaa';
export const SITE_TITLE = 'نادي التصاميم والفنون - معرض رواء';
export const SITE_DESCRIPTION = 'الأرشيف الفني لمعرض رواء | The Rewaa student art exhibition archive by UQU Arts.';
export const TITLE_TEMPLATE = '%s | معرض رواء';

type ShareImage = { url: string; alt: string };

// Child segments replace openGraph/twitter wholesale, so every page builds them here.
// Without `image`, the share image comes from src/app/opengraph-image.png and twitter-image.png.
// Pages whose own openGraph is set by generateMetadata don't inherit those files, so they must pass one.
export function shareMetadata(title: string, description: string, { type = 'website', image }: { type?: 'website' | 'article'; image?: ShareImage } = {}): Pick<Metadata, 'openGraph' | 'twitter'> {
  return {
    openGraph: { type, title, description, siteName: SITE_NAME, locale: 'ar_SA', alternateLocale: ['en_US'], ...(image && { images: [image] }) },
    twitter: { card: 'summary_large_image', site: '@uquarts', title, description, ...(image && { images: [image] }) },
  };
}
