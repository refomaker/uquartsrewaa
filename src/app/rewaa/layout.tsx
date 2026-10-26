import type { Metadata } from 'next';
import { TITLE_TEMPLATE, shareMetadata } from '@/lib/site-metadata';

const title = 'حكاية رواء';
const description = 'حكاية معرض رواء وأرشيفه الرقمي | The story of the Rewaa exhibition and its digital archive.';

// Keep the root template: a plain-string title here would reset it for /rewaa/art/[id].
export const metadata: Metadata = {
  title: { default: title, template: TITLE_TEMPLATE },
  description,
  ...shareMetadata(`${title} | معرض رواء`, description),
};

export default function RewaaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
