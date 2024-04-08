import { useCurrentTheme } from '../../contexts/theme';
import { AuthActions } from '../auth-buttons/component';
import styles from './styles.module.scss';

export const Header = () => {
  const { toggleTheme } = useCurrentTheme();

  return (
    <header className={styles.root}>
      <div>
        <button
          className={styles.btnHeader}
          onClick={toggleTheme}
        >
          Theme Toggle
        </button>
      </div>
      <div>
        <AuthActions />
      </div>
    </header>
  );
};
