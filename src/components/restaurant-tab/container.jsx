import { useSelector } from 'react-redux';
import { Tab } from '../tab/component';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';

export const RestaurantTabContainer = ({ restaurantId, isActive, onClick }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return (
    <Tab
      title={restaurant?.name}
      onClick={onClick}
      disabled={isActive}
    />
  );
};
