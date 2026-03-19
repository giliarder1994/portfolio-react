import { useCallback } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const navLinks = [
  { href: '#ficha', icon: 'fa-solid fa-house', title: 'Ficha' },
  { href: '#sobre-mim', icon: 'fa-solid fa-user', title: 'Sobre mim' },
  { href: '#skills', icon: 'fa-solid fa-brain', title: 'Skills' },
  { href: '#formacao', icon: 'fa-solid fa-graduation-cap', title: 'Formação' },
  { href: '#projetos', icon: 'fa-solid fa-trowel-bricks', title: 'Projetos' },
];

export default function Header({ isDark, onToggleTheme }: HeaderProps) {
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerHeight = document.querySelector('header')?.offsetHeight ?? 0;
      const targetPosition = (target as HTMLElement).offsetTop - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  }, []);

  return (
    <header className={styles.header}>
      <nav id="menu">
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <i className={link.icon} title={link.title}></i>
              </a>
            </li>
          ))}
          <li>
            <a href="#" className={styles.navLink} onClick={(e) => { e.preventDefault(); onToggleTheme(); }}>
              <i className={isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} title="Tema"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
