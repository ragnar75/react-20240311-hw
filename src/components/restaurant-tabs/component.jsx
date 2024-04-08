import { useSelector } from 'react-redux';
import { RestaurantTab } from '../restaurant-tab/component';
import styles from './styles.module.scss';

export const RestaurantTabs = ({ onTabClick, activeRestaurantId }) => {
  const restaurantIds = useSelector((state) => state.restaurant.ids);

  return (
    <nav className={styles.root}>
      {!!restaurantIds?.length &&
        restaurantIds?.map((restaurantId) => (
          <RestaurantTab
            key={restaurantId}
            restaurantId={restaurantId}
            isActive={restaurantId === activeRestaurantId}
            onClick={() => {
              onTabClick(restaurantId);
            }}
          />
        ))}
    </nav>
  );
};
