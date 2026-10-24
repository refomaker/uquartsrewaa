import type { Artwork } from './types';

const demoDescriptionAr = 'عمل تجريبي لاختبار عرض الأرشيف والمسارات، وليس مشاركة فنية حقيقية.';
const demoDescriptionEn = 'A sample record for testing the archive and its tracks, not a real artwork submission.';
const demoDate = '2025-01-01T00:00:00Z';

// Local-only sample records. They are used when no Supabase connection is configured.
export const demoArtworks: Artwork[] = [
  {
    id: 'DEMO-0001', title_ar: 'نموذج — ضوء الصباح', title_en: 'Sample — Morning Light',
    artist_ar: 'اسم فنان تجريبي', artist_en: 'Sample artist', description_ar: demoDescriptionAr, description_en: demoDescriptionEn,
    image_url: 'https://images.unsplash.com/photo-1698420204264-27e3944d3c0f?auto=format&fit=crop&w=1200&q=85', thumbnail_url: null, category: 'Painting', medium: 'Oil on canvas', year: 2025, dimensions: null,
    keywords_ar: ['نموذج', 'ضوء', 'طبيعة'], keywords_en: ['sample', 'light', 'nature'], track: 'nature-environment',
    status: 'published', created_at: demoDate, updated_at: demoDate,
  },
  {
    id: 'DEMO-0002', title_ar: 'نموذج — أثر المكان', title_en: 'Sample — Sense of Place',
    artist_ar: 'اسم فنان تجريبي', artist_en: 'Sample artist', description_ar: demoDescriptionAr, description_en: demoDescriptionEn,
    image_url: 'https://images.unsplash.com/photo-1727047842068-878467d4d703?auto=format&fit=crop&w=1200&q=85', thumbnail_url: null, category: 'Mixed media', medium: 'Acrylic and collage', year: 2024, dimensions: null,
    keywords_ar: ['نموذج', 'ذاكرة'], keywords_en: ['sample', 'memory'], track: 'nostalgia-memory',
    status: 'published', created_at: demoDate, updated_at: demoDate,
  },
  {
    id: 'DEMO-0003', title_ar: 'نموذج — تنفّس أخضر', title_en: 'Sample — Green Breath',
    artist_ar: 'اسم فنان تجريبي', artist_en: 'Sample artist', description_ar: demoDescriptionAr, description_en: demoDescriptionEn,
    image_url: 'https://images.unsplash.com/photo-1629590726291-37b8dd5d7c6e?auto=format&fit=crop&w=1200&q=85', thumbnail_url: null, category: 'Photography', medium: 'Digital photography', year: 2025, dimensions: null,
    keywords_ar: ['نموذج', 'بيئة'], keywords_en: ['sample', 'environment'], track: 'nature-environment',
    status: 'published', created_at: demoDate, updated_at: demoDate,
  },
  {
    id: 'DEMO-0004', title_ar: 'نموذج — رسالة قديمة', title_en: 'Sample — An Old Letter',
    artist_ar: 'اسم فنان تجريبي', artist_en: 'Sample artist', description_ar: demoDescriptionAr, description_en: demoDescriptionEn,
    image_url: 'https://images.unsplash.com/photo-1561812938-f6e60cbf95e3?auto=format&fit=crop&w=1200&q=85', thumbnail_url: null, category: 'Illustration', medium: 'Watercolor on paper', year: 2024, dimensions: null,
    keywords_ar: ['نموذج', 'حنين'], keywords_en: ['sample', 'nostalgia'], track: 'nostalgia-memory',
    status: 'published', created_at: demoDate, updated_at: demoDate,
  },
  {
    id: 'DEMO-0005', title_ar: 'نموذج — نقش من الذاكرة', title_en: 'Sample — A Pattern Remembered',
    artist_ar: 'اسم فنان تجريبي', artist_en: 'Sample artist', description_ar: demoDescriptionAr, description_en: demoDescriptionEn,
    image_url: 'https://images.unsplash.com/photo-1528569937393-ee892b976859?auto=format&fit=crop&w=1200&q=85', thumbnail_url: null, category: 'Drawing', medium: 'Ink on paper', year: 2025, dimensions: null,
    keywords_ar: ['نموذج', 'ذكرى'], keywords_en: ['sample', 'memory'], track: 'nostalgia-memory',
    status: 'published', created_at: demoDate, updated_at: demoDate,
  },
  {
    id: 'DEMO-0006', title_ar: 'نموذج — ظل النخلة', title_en: 'Sample — Palm Tree Shade',
    artist_ar: 'اسم فنان تجريبي', artist_en: 'Sample artist', description_ar: demoDescriptionAr, description_en: demoDescriptionEn,
    image_url: 'https://images.unsplash.com/photo-1736940152870-e22732c35574?auto=format&fit=crop&w=1200&q=85', thumbnail_url: null, category: 'Painting', medium: 'Acrylic on canvas', year: 2025, dimensions: null,
    keywords_ar: ['نموذج', 'نخيل', 'تراث'], keywords_en: ['sample', 'palm', 'heritage'], track: 'heritage',
    status: 'published', created_at: demoDate, updated_at: demoDate,
  },
  {
    id: 'DEMO-0007', title_ar: 'نموذج — باب الحكاية', title_en: 'Sample — The Story Door',
    artist_ar: 'اسم فنان تجريبي', artist_en: 'Sample artist', description_ar: demoDescriptionAr, description_en: demoDescriptionEn,
    image_url: 'https://images.unsplash.com/photo-1741888019564-3e9d8fe95efb?auto=format&fit=crop&w=1200&q=85', thumbnail_url: null, category: 'Mixed media', medium: 'Print and collage', year: 2024, dimensions: null,
    keywords_ar: ['نموذج', 'تراث', 'عمارة'], keywords_en: ['sample', 'heritage', 'architecture'], track: 'heritage',
    status: 'published', created_at: demoDate, updated_at: demoDate,
  },
  {
    id: 'DEMO-0008', title_ar: 'نموذج — نسيج الحكاية', title_en: 'Sample — Woven Story',
    artist_ar: 'اسم فنان تجريبي', artist_en: 'Sample artist', description_ar: demoDescriptionAr, description_en: demoDescriptionEn,
    image_url: 'https://images.unsplash.com/photo-1767476106248-88c28b90b370?auto=format&fit=crop&w=1200&q=85', thumbnail_url: null, category: 'Textile art', medium: 'Woven fibers', year: 2025, dimensions: null,
    keywords_ar: ['نموذج', 'نسيج', 'تراث'], keywords_en: ['sample', 'weaving', 'heritage'], track: 'heritage',
    status: 'published', created_at: demoDate, updated_at: demoDate,
  },
  {
    id: 'DEMO-0009', title_ar: 'نموذج — فسحة بين الأغصان', title_en: 'Sample — A Clearing Among Branches',
    artist_ar: 'اسم فنان تجريبي', artist_en: 'Sample artist', description_ar: demoDescriptionAr, description_en: demoDescriptionEn,
    image_url: 'https://images.unsplash.com/photo-1721404828003-3082928d2e99?auto=format&fit=crop&w=1200&q=85', thumbnail_url: null, category: 'Photography', medium: 'Digital photography', year: 2025, dimensions: null,
    keywords_ar: ['نموذج', 'طبيعة', 'أغصان'], keywords_en: ['sample', 'nature', 'branches'], track: 'nature-environment',
    status: 'published', created_at: demoDate, updated_at: demoDate,
  },
];
