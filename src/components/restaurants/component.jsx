import { useState } from 'react';
import { Restaurant } from '../restaurant/component';
import { RestaurantTabs } from '../restaurant-tabs/component';
import { getStorageItem, setStorageItem } from '../../utils/storage';

import styles from './styles.module.scss';

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(() =>
    getStorageItem(import.meta.env.VITE_ACTIVE_RESTAURANT_INDEX_STORAGE_KEY)
  );

  return (
    <main>
      <RestaurantTabs
        activeRestaurantId={activeRestaurantId}
        onTabClick={(activeRestaurantId) => {
          setActiveRestaurantId(activeRestaurantId);
          setStorageItem(
            import.meta.env.VITE_ACTIVE_RESTAURANT_INDEX_STORAGE_KEY,
            activeRestaurantId
          );
        }}
      />

      {activeRestaurantId ? (
        <Restaurant
          restaurantId={activeRestaurantId}
          className={styles.container}
        />
      ) : (
        <div className={styles.alert}>
          <h3>Select Restaurant...</h3>
        </div>
      )}
    </main>
  );
};
