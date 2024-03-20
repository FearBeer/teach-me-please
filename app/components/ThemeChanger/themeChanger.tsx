'use client';
import { useContext, useEffect, useState } from 'react';
import styles from './themeChanger.module.scss';

import { ThemeContext, Themes } from '@/app/contexts/ThemeContext';

export default function ThemeChanger() {
  const theme = useContext(ThemeContext);
  const [isChecked, setIsChecked] = useState(false);

  function changeTheme() {
    theme?.setCurrentTheme();
  }

  useEffect(() => {
    if (theme?.theme === 'dark') {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [theme?.theme]);

  return (
    <div className={`${styles.wrapper}`}>
      <label className={styles.label} htmlFor='theme'>
        {theme?.theme === 'dark' ? 'dark' : 'light'}
      </label>
      <input
        type='checkbox'
        id='theme'
        onChange={changeTheme}
        checked={isChecked}
      />
    </div>
  );
}
