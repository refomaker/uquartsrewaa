import { getPublishedArtworks } from '@/lib/data';
import { Gallery } from '@/components/Gallery';
export const dynamic='force-dynamic';
export default async function Home(){return <Gallery artworks={await getPublishedArtworks()}/>}
