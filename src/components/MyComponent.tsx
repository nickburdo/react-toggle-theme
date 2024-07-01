import { useTheme } from '../context/theme.context';
import styles from './MyComponent.module.css';

export default function MyComponent() {
  const { theme } = useTheme();

  return (
    <main
      className={`${theme === 'light' ? styles.light : styles.dark} ${
        styles.main
      }`}
    >
      <article className={styles.article}>
        <h1>My Component</h1>

        <p>Loren ipsum dolor amet</p>
      </article>
    </main>
  );
}
