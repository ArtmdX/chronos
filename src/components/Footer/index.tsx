import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda com funciona a técnica pomodoro</a>
      <a href=''>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - feito com 💚
      </a>
    </footer>
  );
}
