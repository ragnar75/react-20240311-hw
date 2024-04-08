import classNames from 'classnames';
import { Button } from '../button/component';
import styles from './styles.module.scss';


export const Counter = ({
  value,
  decrement,
  increment,
  min = 0,
  max = 5,
  className,
}) => {
  return (
    <span className={classNames(styles.root, className)}>
      <Button
        onClick={decrement}
        disabled={value <= min}
      >
        -
      </Button>
      <span> {value} </span>
      <Button
        onClick={increment}
        disabled={value >= max}
      >
        +
      </Button>
    </span>
  );
};
