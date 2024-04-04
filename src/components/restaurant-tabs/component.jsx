import { Tab } from '../tab/component';
import styles from './styles.module.scss';

export const RestaurantTabs = ({ restaurants, onTabClick, activeTabIndex }) => {
  return (
    <nav className={styles.root}>
      {!!restaurants?.length &&
        restaurants.map((restaurant, index) => (
          <Tab
            key={restaurant.id}
            title={restaurant.name}
            isActive={index === activeTabIndex}
            onClick={() => {
              onTabClick(index);
            }}
          />
        ))}
    </nav>
  );
};
