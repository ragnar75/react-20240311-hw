import { RestaurantTab } from './component';

export const RestaurantTabContainer = ({
  restaurantId,
  restaurantName,
  restaurantDescription,
  restaurantImage,
}) => {
  if (!restaurantId) {
    return null;
  }

  return (
    <RestaurantTab
      restaurantId={restaurantId}
      restaurantName={restaurantName}
      restaurantDescription={restaurantDescription}
      restaurantImage={restaurantImage}
    />
  );
};
