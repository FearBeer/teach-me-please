import type { Metadata } from 'next';
import './globals.scss';
import Header from './components/Header/header';
import Image from 'next/image';
import logo from '../public/images/logo.svg';

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
        <Header>
          <Image
            src={logo}
            style={{
              width: '100px',
              height: '100%',
            }}
            alt='logo'
            priority={true}
          />
          <p>Navigation in the header</p>
          <div>
            <p>Change theme in the header</p>
            <p>Login/Logout in the header</p>
          </div>
        </Header>
        {children}
      </body>
    </html>
  );
}
