import { useTheme } from '../context/theme.context';
import styles from './Toolbar.module.css';

function Toolbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme === 'light' ? styles.light : styles.dark}>
      <header className={styles.header}>
        <h3>My App</h3>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </header>
    </div>
  );
}

export default Toolbar;
