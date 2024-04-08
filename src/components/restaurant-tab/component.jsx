import { useSelector } from 'react-redux';
import { Button } from '../button/component';

export const RestaurantTab = ({ restaurantId, isActive, onClick }) => {
  const restaurant = useSelector(
    (state) => state.restaurant.entities[restaurantId]
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
