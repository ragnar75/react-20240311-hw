import { Tab } from '../tab/component';

export const RestaurantTabs = ({ rests, onTabClick, currentIndex }) => {
  return (
    <nav>
      {!!rests?.length &&
        rests.map((restaurant, index) => (
          // Question: Why is CurrentRestaurantIIndex(currentIndex) different from the index when displayed in the console,
          // although when the corresponding component is displayed, the index is the same as CurrentRestaurantIndex?
          <Tab
            key={restaurant.id}
            title={restaurant.name}
            isActive={index === currentIndex}
            onClick={() => {
              onTabClick(index);
              localStorage.setItem("currentRestaurantIndex", index);
              console.log(index, currentIndex);
            }}
          />
        ))}
    </nav>
  );
};
