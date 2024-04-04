import { useContext } from 'react';
import { HeaderContext } from '../../contexts/header';
import styles from './styles.module.scss';

export const Tab = ({ title, isActive, onClick }) => {
  const { theme } = useContext(HeaderContext);

  return (
    <button
      onClick={onClick}
      disabled={isActive}
      className={theme==='default' ? styles.primary : styles.secondary}
    >
      {title}
    </button>
  );
};
