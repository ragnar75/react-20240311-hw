import { useCurrentUser } from '../../contexts/user';
import styles from './styles.module.scss';

export const AuthActions = () => {
  const { user, login, logout } = useCurrentUser();

  const isAuthorized = !!user;

  return (
    <div>
      {isAuthorized && <span className={styles.authHeader}>{user}</span>}
      <button
        className={styles.btnHeader}
        onClick={() => (isAuthorized ? logout() : login('John Doe'))}
      >
        {isAuthorized ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};
