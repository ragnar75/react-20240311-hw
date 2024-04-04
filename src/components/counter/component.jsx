import classNames from 'classnames';
import styles from './styles.module.scss';
import { useContext } from 'react';
import { HeaderContext } from '../../contexts/header';

export const Counter = ({
  value,
  decrement,
  increment,
  min = 0,
  max = 5,
  className,
}) => {
  const { theme } = useContext(HeaderContext);

  return (
    <span className={classNames(styles.root, className)}>
      <button
        onClick={decrement}
        disabled={value <= min}
        className={theme === 'default' ? styles.primary : styles.secondary}
      >
        -
      </button>
      <span> {value} </span>
      <button
        onClick={increment}
        disabled={value >= max}
        className={theme === 'default' ? styles.primary : styles.secondary}
      >
        +
      </button>
    </span>
  );
};
