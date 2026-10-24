import { redirect } from 'next/navigation';
import { withSearchParams, type RouteSearchParams } from '@/lib/redirect-query';

export default async function AboutCompatibilityPage({ searchParams }: { searchParams: RouteSearchParams }) {
  redirect(await withSearchParams('/rewaa', searchParams));
}
