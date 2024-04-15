import { useDispatch, useSelector } from 'react-redux';
import { Dish } from './component';
import { useCurrentUser } from '../../contexts/user';
import { selectDishById } from '../../redux/entities/dish/selectors';
import { decrementDish, incrementDish } from '../../redux/ui/cart';
import { selectCartDishAmount } from '../../redux/ui/cart/selectors';

export const DishContainer = ({ dishId, ...props }) => {
  const { user } = useCurrentUser();

  const dish = useSelector((state) => selectDishById(state, dishId));
  const amount = useSelector((state) => selectCartDishAmount(state, dishId));

  const dispatch = useDispatch();

  const decrement = () => dispatch(decrementDish(dishId));
  const increment = () => dispatch(incrementDish(dishId));

  if (!dish) {
    return null;
  }

  return (
    <Dish
      {...props}
      dish={dish}
      isAuthorized={!!user}
      amount={amount}
      decrement={decrement}
      increment={increment}
    />
  );
};
