import { useSelector } from 'react-redux';
import { Restaurant } from './component';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';

export const RestaurantContainer = ({ restaurantId, className }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return (
    <Restaurant
      restaurant={restaurant}
      className={className}
    />
  );
};
