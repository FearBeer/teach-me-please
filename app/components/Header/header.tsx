import styles from './header.module.scss';
import Logo from '../Logo/logo';
import Navigation from '../Navigation/navigation';
import ThemeChanger from '../ThemeChanger/themeChanger';

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
