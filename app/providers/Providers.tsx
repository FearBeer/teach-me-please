'use client';
import { ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';

export default function Providers({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
