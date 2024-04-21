import { useState } from 'react';
import { Restaurants } from './component';
import { RestaurantsSkeleton } from './skeleton';
import { REQUEST_STATUSES } from '../../redux/ui/request/constants';
import { getStorageItem, setStorageItem } from '../../utils/storage';
import { fetchRestaurants } from '../../redux/entities/restaurant/thunks/fetch-restaurants';
import { useRequest } from '../../hooks/use-request';
import { useLazyRequest } from '../../hooks/use-lazy-request';
import { Outlet } from 'react-router-dom';

const reloadRestaurantParams = { forceReload: true };

export const RestaurantsContainer = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(() =>
    getStorageItem(import.meta.env.VITE_ACTIVE_RESTAURANT_INDEX_STORAGE_KEY)
  );

  const requestStatus = useRequest(fetchRestaurants);
  const [refetchStatus, refetchRestaurants] = useLazyRequest(
    fetchRestaurants,
    reloadRestaurantParams
  );

  const onTabClick = (activeRestaurantId) => {
    setActiveRestaurantId(activeRestaurantId);
    setStorageItem(
      import.meta.env.VITE_ACTIVE_RESTAURANT_INDEX_STORAGE_KEY,
      activeRestaurantId
    );
  };

  if (
    requestStatus === REQUEST_STATUSES.pending ||
    refetchStatus === REQUEST_STATUSES.pending
  ) {
    return <RestaurantsSkeleton />;
  }

  return (
    <div>
      <Restaurants
        activeRestaurantId={activeRestaurantId}
        onTabClick={onTabClick}
        onRefresh={refetchRestaurants}
      />
      <Outlet />
    </div>
  );
};
