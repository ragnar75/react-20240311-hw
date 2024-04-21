import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

export const RestaurantTab = ({
  restaurantId,
  restaurantName,
  restaurantImage,
  restaurantDescription,
}) => {
  return (
    <NavLink
      to={`/restaurants/${restaurantId}`}
      style={({ isActive }) => {
        return isActive ? { backgroundColor: 'orangered', color: 'white' } : {};
      }}
      className={styles.tabLink}
    >
      <img
        src={restaurantImage}
        alt={restaurantDescription}
      />
      <h3>{restaurantName}</h3>
    </NavLink>
  );
};
