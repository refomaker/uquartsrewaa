export type Artwork = {
  id: string; title_ar: string; title_en: string; artist_ar: string; artist_en: string;
  description_ar: string; description_en: string; image_url: string; thumbnail_url: string | null;
  category: string; medium: string; year: number | null; dimensions: string | null;
  keywords_ar: string[]; keywords_en: string[]; status: 'draft'|'published'|'archived';
  created_at: string; updated_at: string;
};
