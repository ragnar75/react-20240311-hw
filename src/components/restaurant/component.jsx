import { Dishes } from '../dishes/component';
import { Reviews } from '../reviews/component';

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Dishes dishes={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
