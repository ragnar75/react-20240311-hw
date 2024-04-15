import { RestaurantTabsContainer } from '../restaurant-tabs/container';
import { RestaurantContainer } from '../restaurant/container';
import { Button } from '../button/component';

import styles from './styles.module.scss';

export const Restaurants = ({ activeRestaurantId, onTabClick, onRefresh }) => {
  return (
    <main>
      <RestaurantTabsContainer
        activeRestaurantId={activeRestaurantId}
        onTabClick={onTabClick}
      />
      <Button onClick={onRefresh}>Refresh</Button>
      

      {activeRestaurantId ? (
        <RestaurantContainer
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
