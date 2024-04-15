import { Counter } from '../counter/component';
import { Ingredients } from '../ingredients/component';

import styles from './styles.module.scss';

export const Dish = ({ dish, isAuthorized, amount, decrement, increment, className }) => {
  return (
    <div className={styles.dish}>
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
              className={className}
            />
          )}
        </div>
      </div>
      <Ingredients ingredients={dish?.ingredients} />
    </div>
  );
};
