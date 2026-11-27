import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adrian Jay — GoHighLevel & Creative Specialist',
  description: 'GoHighLevel funnels, landing pages, survey experiences, digital creative, video editing, and AI-assisted content.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
