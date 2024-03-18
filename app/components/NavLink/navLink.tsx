'use client';
import Link from 'next/link';
import styles from './navLink.module.scss';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  name: string;
};

export default function NavLink({ link }: { link: NavLinkProps }) {
  const pathName = usePathname();

  const style =
    pathName === link.href
      ? `${styles.navLink} ${styles.active}`
      : styles.navLink;

  return (
    <Link className={style} href={link.href}>
      {link.name}
    </Link>
  );
}
