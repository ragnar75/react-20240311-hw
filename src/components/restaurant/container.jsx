import { useParams } from 'react-router-dom';
import { Restaurant } from './component';
import { useGetRestaurantsQuery } from '../../redux/service/api';

export const RestaurantContainer = () => {
  const { restaurantId } = useParams();

  const { currentData: restaurant, isLoading } = useGetRestaurantsQuery(
    undefined,
    {
      selectFromResult: (result) => ({
        ...result,
        currentData: result.currentData?.find(({ id }) => id === restaurantId),
      }),
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!restaurant) {
    return null;
  }



  const { id, name } = restaurant;

  return (
    <Restaurant
      id={id}
      name={name}
      // className={className}
    />
  );
};
