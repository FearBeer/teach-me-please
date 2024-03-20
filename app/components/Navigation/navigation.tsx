import styles from './navigation.module.scss';
import NavLink from '../NavLink/navLink';

export default function Navigation() {
  const links = [
    { href: '/', name: 'home' },
    { href: '/about', name: 'about' },
    { href: '/contacts', name: 'contacts' },
    { href: '/login', name: 'login' },
  ];

  return (
    <nav className={styles.nav}>
      {links.map((link) => {
        return <NavLink key={link.name} link={link} />;
      })}
    </nav>
  );
}
