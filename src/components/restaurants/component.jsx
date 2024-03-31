import { useState } from 'react';
import { restaurants } from '../../constants/mock';
import { Restaurant } from '../restaurant/component';
import { RestaurantTabs } from '../restaurant-tabs/component';
import { getStorageItem, setStorageItem } from '../../utils/storage';

export const Restaurants = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(
    () =>
      Number(
        getStorageItem(import.meta.env.VITE_ACTIVE_RESTAURANT_INDEX_STORAGE_KEY)
      ) || 0
  );
  const rests = restaurants.filter(Boolean);
  const activeRestaurant = rests[activeRestaurantIndex];
  // if (!restaurants) {
  //   return null;
  // }

  return (
    <main>
      <RestaurantTabs
        restaurants={rests}
        onTabClick={(index) => {
          setActiveRestaurantIndex(index);
          setStorageItem(
            import.meta.env.VITE_ACTIVE_RESTAURANT_INDEX_STORAGE_KEY,
            index
          );
        }}
        activeTabIndex={activeRestaurantIndex}
      />
      {activeRestaurant ? (
        <Restaurant restaurant={activeRestaurant} />
      ) : (
        <span>Select Restaurant</span>
      )}
    </main>
  );
};
