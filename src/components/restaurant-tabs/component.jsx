import { RestaurantTabContainer } from '../restaurant-tab/container';
import styles from './styles.module.scss';

export const RestaurantTabs = ({
  onTabClick,
  activeRestaurantId,
  restaurantIds,
}) => {
  return (
    <nav className={styles.root}>
      {restaurantIds.map((restaurantId) => (
        <RestaurantTabContainer
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
