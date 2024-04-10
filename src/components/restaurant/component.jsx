import { useSelector } from 'react-redux';
import { Dishes } from '../dishes/component';
import { Reviews } from '../reviews/component';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';

import styles from './styles.module.scss';
import classNames from 'classnames';

export const Restaurant = ({ restaurantId, className }) => {
  // const restaurant = useSelector(
  //   (state) => state.restaurant.entities[restaurantId]
  // );

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return (
    <div className={classNames(className, styles.restaurantContainer )}>
      <h2>{restaurant?.name}</h2>
      <img
        src={restaurant?.img}
        alt={restaurant?.description}
      />
      <Dishes restaurantId={restaurantId} />
      <Reviews restaurantId={restaurantId} />
    </div>
  );
};
