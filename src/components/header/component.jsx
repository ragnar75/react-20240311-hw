import { useCurrentTheme } from '../../contexts/theme';
import { AuthActions } from '../auth-buttons/component';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const { toggleTheme } = useCurrentTheme();

  return (
    <header className={styles.root}>
      <div>
        <NavLink to={'/'}>Home</NavLink>
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
