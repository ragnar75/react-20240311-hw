import { useSelector } from 'react-redux';
import { RestaurantTabs } from './component';
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors';

export const RestaurantTabsContainer = (props) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  if (!restaurantIds?.length) {
    return null;
  }

  return (
    <RestaurantTabs
      {...props}
      restaurantIds={restaurantIds}
    />
  );
};
