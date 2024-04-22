import { RestaurantTabContainer } from '../restaurant-tab/container';
import styles from './styles.module.scss';

export const RestaurantTabs = ({ restaurants }) => {
  return (
    <nav className={styles.root}>
      {restaurants.map((restaurant) => (
        <RestaurantTabContainer
          key={restaurant.id}
          restaurantId={restaurant.id}
          restaurantName={restaurant.name}
          restaurantDescription={restaurant.description}
          restaurantImage={restaurant.img}
        />
      ))}
    </nav>
  );
};
