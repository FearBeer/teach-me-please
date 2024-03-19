import { createContext } from 'react';

export enum Themes {
  dark = 'dark',
  light = 'light',
}

interface ThemeContext {
  theme: Themes;
  setCurrentTheme: () => void;
}

export const ThemeContext = createContext<ThemeContext | null>(null);
