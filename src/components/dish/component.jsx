import { useSelector } from 'react-redux';
import { Counter } from '../counter/component';
import { Ingredients } from '../ingredients/component';
import { useCounter } from '../../hooks/use-counter';
import { useCurrentUser } from '../../contexts/user';

import styles from './styles.module.scss';

export const Dish = ({ dishId }) => {
  const dish = useSelector((state) => state.dish.entities[dishId]);

  const { amount, decrement, increment } = useCounter();
  const { user } = useCurrentUser();

  const isAuthorized = !!user;

  if (!dish) {
    return null;
  }

  return (
    <div className={styles.dishContainer}>
      <div className={styles.dishTitle}>
        <div className={styles.dishSubTitle}>
          <p>{dish?.name}</p>
          <p>Price: {dish?.price}</p>
        </div>
        <div>
          {isAuthorized && (
            <Counter
              value={amount}
              decrement={decrement}
              increment={increment}
              // className={styles.outer}
            />
          )}
        </div>
      </div>
      <Ingredients ingredients={dish?.ingredients} />
    </div>
  );
};
