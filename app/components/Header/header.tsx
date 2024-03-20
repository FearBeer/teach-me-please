import styles from './header.module.scss';
import Logo from '../Logo/logo';
import Navigation from '../Navigation/navigation';
import dynamic from 'next/dynamic';

const ThemeChanger = dynamic(() => import('../ThemeChanger/themeChanger'), {
  ssr: false,
});

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <ThemeChanger />
    </header>
  );
}

export default Header;
