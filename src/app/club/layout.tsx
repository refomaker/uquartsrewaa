import type { Metadata } from 'next';
import { shareMetadata } from '@/lib/site-metadata';

const title = 'عن النادي';
const description = 'نادي التصاميم والفنون بجامعة أم القرى | About the Designs & Arts Club at Umm Al-Qura University.';

export const metadata: Metadata = {
  title,
  description,
  ...shareMetadata(`${title} | معرض رواء`, description),
};

export default function ClubLayout({ children }: { children: React.ReactNode }) {
  return children;
}
