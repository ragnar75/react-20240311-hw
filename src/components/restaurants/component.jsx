import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Restaurant } from '../restaurant/component';
import { RestaurantTabs } from '../restaurant-tabs/component';
import { getStorageItem, setStorageItem } from '../../utils/storage';
import { fetchRestaurants } from '../../redux/entities/restaurant/thunks/fetch-restaurants';

import styles from './styles.module.scss';

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(() =>
    getStorageItem(import.meta.env.VITE_ACTIVE_RESTAURANT_INDEX_STORAGE_KEY)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

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
          className={styles.restaurantContainer}
        />
      ) : (
        <div className={styles.alert}>
          <h3>Select Restaurant...</h3>
        </div>
      )}
    </main>
  );
};
