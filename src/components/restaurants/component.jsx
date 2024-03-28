import { useState } from 'react';
import { restaurants } from '../../constants/mock';
import { Restaurant } from '../restaurant/component';
import { RestaurantTabs } from '../restaurant-tabs/component';
export const Restaurants = () => {
  const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(
    () => Number(localStorage.getItem('currentRestaurantIndex')) || 0
  );
  const rests = restaurants.filter(Boolean);
  const currentRestaurant = rests[currentRestaurantIndex];
  // if (!restaurants) {
  //   return null;
  // }

  return (
    <main>
      {/* Question: Why is CurrentRestaurantIIndex different from the index when displayed in the console, 
      although when the corresponding component is displayed, the index is the same as CurrentRestaurantIndex?
       */}

      <RestaurantTabs
        rests={rests}
        onTabClick={setCurrentRestaurantIndex}
        currentIndex={currentRestaurantIndex}
      />
      {currentRestaurant && <Restaurant restaurant={currentRestaurant} />}
    </main>
  );
};
