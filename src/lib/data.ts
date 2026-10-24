import type { Artwork } from './types';
import { demoArtworks } from './demo-artworks';
import { supabaseServer } from './supabase/server';

export async function getPublishedArtworks(): Promise<Artwork[]> {
  const db = supabaseServer();
  if (!db) return demoArtworks;

  const { data, error } = await db.from('artworks').select('*').eq('status', 'published').order('id');
  if (error) throw new Error(`Could not load published artwork: ${error.message}`);
  return data as Artwork[];
}

export async function getArtwork(id: string): Promise<Artwork | null> {
  const db = supabaseServer();
  if (!db) return demoArtworks.find((artwork) => artwork.id === id) ?? null;

  const { data, error } = await db.from('artworks').select('*').eq('id', id).eq('status', 'published').maybeSingle();
  if (error) throw new Error(`Could not load artwork: ${error.message}`);
  return data as Artwork | null;
}
