import { Metadata } from 'next';

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  
  title: {
    template:'%s | Ozkary Dashboard with ReactJS and NextJS',
    default: 'Dashboard'
  },
  description: 'Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
