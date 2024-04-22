import { useParams } from 'react-router-dom';
import { Menu } from './component';
import { useGetMenuByRestaurantIdQuery } from '../../redux/service/api';

export const MenuContainer = () => {
  const { restaurantId } = useParams();

  const { currentData: dishes, isLoading } =
    useGetMenuByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return <div>Loading Menu...</div>;
  }

  if (!dishes?.length) {
    return null;
  }

  return <Menu dishes={dishes} />;
};
