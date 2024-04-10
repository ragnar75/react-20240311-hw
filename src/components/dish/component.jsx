import { useDispatch, useSelector } from 'react-redux';
import { Counter } from '../counter/component';
import { Ingredients } from '../ingredients/component';
// import { useCounter } from '../../hooks/use-counter';
import { useCurrentUser } from '../../contexts/user';
import { selectDishById } from '../../redux/entities/dish/selectors';
import { selectCartProductAmount } from '../../redux/ui/cart/selectors';
import { incrementProduct, decrementProduct } from '../../redux/ui/cart';

import styles from './styles.module.scss';

export const Dish = ({ dishId }) => {
  const { user } = useCurrentUser();
  const isAuthorized = !!user;

  const dispatch = useDispatch();

  // const dish = useSelector((state) => state.dish.entities[dishId]);

  // const { amount, decrement, increment } = useCounter();

  // const { decrement, increment } = useCounter();

  const dish = useSelector((state) => selectDishById(state, dishId));
  const amount = useSelector((state) => selectCartProductAmount(state, dishId));

  const decrement = () => dispatch(decrementProduct(dishId));
  const increment = () => dispatch(incrementProduct(dishId));

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
