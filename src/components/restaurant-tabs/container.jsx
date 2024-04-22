import { RestaurantTabs } from './component';
import { useGetRestaurantsQuery } from '../../redux/service/api';
import { RestaurantsSkeleton } from '../restaurants/skeleton';
import { Outlet } from 'react-router-dom';

export const RestaurantTabsContainer = () => {
  const { currentData: restaurants, isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return <RestaurantsSkeleton />;
  }

  if (!restaurants?.length) {
    return null;
  }

  return (
    <div>
      <RestaurantTabs restaurants={restaurants} />
      <Outlet />
    </div>
  );
};
