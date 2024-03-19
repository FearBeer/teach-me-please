import type { Metadata } from 'next';
import './globals.scss';
import Header from './components/Header/header';
import Image from 'next/image';
import logo from '../public/images/logo.svg';
import Navigation from './components/Navigation/navigation';
import ThemeChanger from './components/ThemeChanger/themeChanger';
import Providers from './providers/Providers';

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
          <Header>
            <Image
              src={logo}
              style={{
                width: '100px',
                height: '100%',
                justifySelf: 'center',
              }}
              alt='logo'
              priority={true}
            />
            <Navigation />
            <div>
              <ThemeChanger></ThemeChanger>
              <p>Login/Logout in the header</p>
            </div>
          </Header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
