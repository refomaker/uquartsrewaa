import type { Artwork, ExhibitionTrack } from './types';

export function filterArtworks(artworks: Artwork[], query: string, track: ExhibitionTrack | 'all'): Artwork[] {
  const normalizedQuery = query.trim().toLocaleLowerCase();

  return artworks.filter((artwork) => {
    const searchableText = [
      artwork.title_ar,
      artwork.title_en,
      artwork.artist_ar,
      artwork.artist_en,
      ...artwork.keywords_ar,
      ...artwork.keywords_en,
      artwork.medium,
    ].join(' ').toLocaleLowerCase();

    return (!normalizedQuery || searchableText.includes(normalizedQuery))
      && (track === 'all' || artwork.track === track);
  });
}
