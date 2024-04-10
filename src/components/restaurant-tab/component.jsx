import { useSelector } from 'react-redux';
import { Button } from '../button/component';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';

export const RestaurantTab = ({ restaurantId, isActive, onClick }) => {
  // const restaurant = useSelector(
  //   (state) => state.restaurant.entities[restaurantId]
  // );

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return (
    <Button
      onClick={onClick}
      disabled={isActive}
    >
      {restaurant?.name}
    </Button>
  );
};
