import { useSelector } from 'react-redux';
import { useRequest } from '../../hooks/use-request';
import { Menu } from './component';
import { REQUEST_STATUSES } from '../../redux/ui/request/constants';
import { selectRestaurantDishIds } from '../../redux/entities/restaurant/selectors';
import { fetchDishesByRestaurantId } from '../../redux/entities/dish/thunks/fetch-dishes-by-restaurant-id';

export const MenuContainer = ({ restaurantId }) => {
  const requestStatus = useRequest(fetchDishesByRestaurantId, restaurantId);

  const dishIds =
    useSelector((state) => selectRestaurantDishIds(state, restaurantId)) || [];

  if (requestStatus === REQUEST_STATUSES.pending) {
    return <div>Loading Menu...</div>;
  }

  if (!dishIds?.length) {
    return null;
  }

  return <Menu dishIds={dishIds} />;
};
