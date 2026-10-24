import { redirect } from 'next/navigation';
import { withSearchParams, type RouteSearchParams } from '@/lib/redirect-query';

export default async function ArtworkCompatibilityPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: RouteSearchParams;
}) {
  const { id } = await params;
  redirect(await withSearchParams('/rewaa/art/' + encodeURIComponent(id), searchParams));
}
