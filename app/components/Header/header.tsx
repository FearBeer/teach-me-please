import { ReactNode } from 'react';
import styles from './header.module.scss';

function Header({ children }: { children: ReactNode }) {
  return <header className={styles.header}>{children}</header>;
}

export default Header;
