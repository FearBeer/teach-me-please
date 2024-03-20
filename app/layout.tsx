import type { Metadata } from 'next';
import './globals.scss';
import Header from './components/Header/header';
import Providers from './providers/Providers';
import dynamic from 'next/dynamic';

// const Header = dynamic(() => import('./components/Header/header'), {
//   ssr: false,
// });

export const metadata: Metadata = {
  title: 'Научи меня, пожалуйста',
  description: 'Платформа для образования | Учись играючи',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
