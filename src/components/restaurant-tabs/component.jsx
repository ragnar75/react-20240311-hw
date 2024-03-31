import { Tab } from '../tab/component';

export const RestaurantTabs = ({ restaurants, onTabClick, activeTabIndex }) => {
  return (
    <nav>
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
