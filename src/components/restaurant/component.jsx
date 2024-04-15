import classNames from 'classnames';
import { MenuContainer } from '../menu/container';
import { ReviewsContainer } from '../reviews/container';

import styles from './styles.module.scss';

export const Restaurant = ({ restaurant, className }) => {
  return (
    <div className={classNames(className, styles.restaurantContainer)}>
      <h2>{restaurant?.name}</h2>
      <img
        src={restaurant?.img}
        alt={restaurant?.description}
      />
      <MenuContainer restaurantId={restaurant?.id} />
      <ReviewsContainer restaurantId={restaurant?.id} />
    </div>
  );
};
