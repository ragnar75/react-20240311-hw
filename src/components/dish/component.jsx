import { Ingredients } from '../ingredients/component';
import { Counter } from '../counter/component';
import { useCounter } from '../../hooks/use-counter';
import styles from './styles.module.scss';
import { useContext } from 'react';
import { HeaderContext } from '../../contexts/header';

export const Dish = ({ dish }) => {
  const { amount, decrement, increment } = useCounter();
  const { status } = useContext(HeaderContext);

  return (
    <div>
      <p>
        {dish.name}
        {status === 'authorized' && (
          <Counter
            value={amount}
            decrement={decrement}
            increment={increment}
            className={styles.outer}
          />
        )}
      </p>
      <p>Price: {dish.price}</p>
      <Ingredients ingredients={dish.ingredients} />
    </div>
  );
};
