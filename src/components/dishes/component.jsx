import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dish } from '../dish/component';
import { selectRestaurantDishIds } from '../../redux/entities/restaurant/selectors';
import { fetchDishesByRestaurantId } from '../../redux/entities/dish/thunks/fetch-dishes-by-restaurant-id';

export const Dishes = ({ restaurantId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishesByRestaurantId(restaurantId));
  }, [restaurantId]);

  const dishIds =
    useSelector((state) => selectRestaurantDishIds(state, restaurantId)) || [];
  
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {!!dishIds?.length &&
          dishIds.filter(Boolean).map((dishId) => (
            <li key={dishId}>
              <Dish dishId={dishId} />
            </li>
          ))}
      </ul>
    </div>
  );
};
