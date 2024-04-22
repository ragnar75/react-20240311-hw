import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Dish } from './component';
import { useCurrentUser } from '../../contexts/user';
import { decrementDish, incrementDish } from '../../redux/ui/cart';
import { selectCartDishAmount } from '../../redux/ui/cart/selectors';
import { useGetDishByDishIdQuery } from '../../redux/service/api';

export const DishContainer = () => {
  const { user } = useCurrentUser();
  const { dishId } = useParams();
  const { currentData: dish, isLoading } = useGetDishByDishIdQuery(dishId);

  const amount = useSelector((state) => selectCartDishAmount(state, dishId));

  const dispatch = useDispatch();

  const decrement = () => dispatch(decrementDish(dishId));
  const increment = () => dispatch(incrementDish(dishId));

  if (isLoading) {
    return <div>Loading Dish...</div>;
  }

  if (!dish) {
    return null;
  }

  return (
    <Dish
      dish={dish}
      isAuthorized={!!user}
      amount={amount}
      decrement={decrement}
      increment={increment}
    />
  );
};
