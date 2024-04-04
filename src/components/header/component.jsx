import styles from './styles.module.scss';

export const Header = ({ children }) => {
  return <header className={styles.root}>{children}</header>;
};
