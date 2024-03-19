'use client';
import { useContext, useState } from 'react';
import styles from './themeChanger.module.scss';

import { ThemeContext, Themes } from '@/app/contexts/ThemeContext';

export default function ThemeChanger() {
  // const [theme, setTheme] = useState('light');
  const theme = useContext(ThemeContext);
  function changeTheme() {
    theme?.setCurrentTheme();
  }
  return (
    <div className={`${styles.wrapper}`}>
      <label className={styles.label} htmlFor='theme'>
        Theme
      </label>
      <input type='checkbox' id='theme' onChange={changeTheme} />
    </div>
  );
}
