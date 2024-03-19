import { useEffect, useState } from 'react';
import { ThemeContext, Themes } from '../contexts/ThemeContext';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  function getTheme() {
    let theme = Themes.light.toString();
    if (typeof window !== 'undefined') {
      theme = window?.localStorage?.getItem('theme') || Themes.light;
    }
    return theme === Themes.light ? Themes.light : Themes.dark;
  }

  const [theme, setTheme] = useState(getTheme);

  function setCurrentTheme() {
    theme === Themes.light ? setTheme(Themes.dark) : setTheme(Themes.light);
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
