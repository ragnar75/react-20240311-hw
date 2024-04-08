import { useSelector } from 'react-redux';
import { Dishes } from '../dishes/component';
import { Reviews } from '../reviews/component';

export const Restaurant = ({ restaurantId, className }) => {
  const restaurant = useSelector(
    (state) => state.restaurant.entities[restaurantId]
  );

  if (!restaurant) {
    return null;
  }

  return (
    <div className={className}>
      <h2>{restaurant?.name}</h2>
      <Dishes dishIds={restaurant?.menu} />
      <Reviews reviewIds={restaurant?.reviews} />
    </div>
  );
};
