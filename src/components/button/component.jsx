import { useCurrentTheme } from '../../contexts/theme';

import styles from './styles.module.scss';

export const Button = ({ children, onClick, disabled }) => {
  const { theme } = useCurrentTheme();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={theme === 'default' ? styles.primary : styles.secondary}
    >
      {children}
    </button>
  );
};
