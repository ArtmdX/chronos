import { RouterLink } from '../RouterLink';
import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href={'/about'}>
        Entenda com funciona a técnica pomodoro
      </RouterLink>
      <a href=''>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - feito com 💚
      </a>
    </footer>
  );
}
