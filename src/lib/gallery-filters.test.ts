import { describe, expect, it } from 'vitest';
import { demoArtworks } from './demo-artworks';
import { filterArtworks } from './gallery-filters';
import { getArtwork, getPublishedArtworks } from './data';

describe('archive track filtering', () => {
  it('shows all nine sample artworks when all tracks are selected', () => {
    expect(filterArtworks(demoArtworks, '', 'all')).toHaveLength(9);
  });

  it.each([
    ['nature-environment', 3],
    ['nostalgia-memory', 3],
    ['heritage', 3],
  ] as const)('shows only the three artworks assigned to %s', (track, expectedCount) => {
    const results = filterArtworks(demoArtworks, '', track);
    expect(results).toHaveLength(expectedCount);
    expect(results.every((artwork) => artwork.track === track)).toBe(true);
  });

  it('combines keyword search with the selected track', () => {
    expect(filterArtworks(demoArtworks, 'طبيعة', 'nature-environment').map((artwork) => artwork.id))
      .toEqual(['DEMO-0001', 'DEMO-0009']);
    expect(filterArtworks(demoArtworks, 'بيئة', 'nature-environment').map((artwork) => artwork.id))
      .toEqual(['DEMO-0003']);
    expect(filterArtworks(demoArtworks, 'نخيل', 'nature-environment')).toHaveLength(0);
  });

  it('keeps every sample accessible through the archive and artwork lookup', async () => {
    const published = await getPublishedArtworks();
    expect(published).toHaveLength(9);
    expect(new Set(published.map((artwork) => artwork.id)).size).toBe(9);

    for (const artwork of demoArtworks) {
      expect(await getArtwork(artwork.id)).toMatchObject({
        id: artwork.id,
        track: artwork.track,
        image_url: artwork.image_url,
      });
    }
  });

  it('uses a distinct permitted Unsplash image for each demo artwork', () => {
    const imageUrls = demoArtworks.map((artwork) => artwork.image_url);
    expect(new Set(imageUrls).size).toBe(9);
    expect(imageUrls.every((imageUrl) => new URL(imageUrl).hostname === 'images.unsplash.com')).toBe(true);
  });
});
