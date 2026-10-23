import type { Artwork } from './types';
import { supabaseServer } from './supabase/server';

// Clearly marked demo records. They are never shown as actual student submissions.
const demo: Artwork[] = [
 {id:'DEMO-0001',title_ar:'نموذج — ضوء الصباح',title_en:'Sample — Morning Light',artist_ar:'اسم فنان تجريبي',artist_en:'Sample artist',description_ar:'هذا عمل نموذجي لتوضيح تصميم الأرشيف، وليس مشاركة طلابية حقيقية.',description_en:'This is a sample record to demonstrate the archive. It is not a real student submission.',image_url:'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=85',thumbnail_url:null,category:'Painting',medium:'Oil on canvas',year:2025,dimensions:null,keywords_ar:['نموذج','ضوء'],keywords_en:['sample','light'],status:'published',created_at:'2025-01-01T00:00:00Z',updated_at:'2025-01-01T00:00:00Z'},
 {id:'DEMO-0002',title_ar:'نموذج — أثر المكان',title_en:'Sample — Sense of Place',artist_ar:'اسم فنان تجريبي',artist_en:'Sample artist',description_ar:'سجل تجريبي للتصميم فقط. ليس عملاً فنياً مقدماً من طالب.',description_en:'A design sample only, not artwork submitted by a student.',image_url:'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=85',thumbnail_url:null,category:'Mixed media',medium:'Acrylic and collage',year:2024,dimensions:null,keywords_ar:['نموذج'],keywords_en:['sample'],status:'published',created_at:'2025-01-01T00:00:00Z',updated_at:'2025-01-01T00:00:00Z'}
];
export async function getPublishedArtworks(): Promise<Artwork[]> {
 const db = supabaseServer(); if (!db) return demo;
 const {data,error}=await db.from('artworks').select('*').eq('status','published').order('id');
 if(error) throw new Error(`Could not load published artwork: ${error.message}`);
 return data as Artwork[];
}
export async function getArtwork(id:string):Promise<Artwork|null>{
 const db=supabaseServer(); if(!db)return demo.find(a=>a.id===id)??null;
 const {data,error}=await db.from('artworks').select('*').eq('id',id).eq('status','published').maybeSingle();
 if(error)throw new Error(`Could not load artwork: ${error.message}`);return data as Artwork|null;
}
