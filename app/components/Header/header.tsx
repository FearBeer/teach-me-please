import styles from './header.module.scss';
import Logo from '../Logo/logo';
import Navigation from '../Navigation/navigation';
import ThemeChanger from '../ThemeChanger/themeChanger';

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <div>
        <ThemeChanger></ThemeChanger>
        <p>Login/Logout in the header</p>
      </div>
    </header>
  );
}

export default Header;
