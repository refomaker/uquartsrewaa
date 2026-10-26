import type { Metadata } from 'next';
import { NotFoundContent } from '@/components/NotFoundContent';

export const metadata: Metadata = {
  title: 'الصفحة غير متاحة · Not found',
};

export default function NotFound() {
  return <NotFoundContent />;
}
