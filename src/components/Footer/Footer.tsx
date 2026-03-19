import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <small>
        Copyright &copy; 2026{' '}
        <a href="https://github.com/giliarder1994" target="_blank" rel="noreferrer">
          Giliarde da Silva Rodrigues
        </a>
      </small>
    </footer>
  );
}
