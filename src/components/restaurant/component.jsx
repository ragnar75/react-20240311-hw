import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';

import styles from './styles.module.scss';

export const Restaurant = ({ id, name, className }) => {
  return (
    <div className={classNames(className, styles.restaurantContainer)}>
      <div className={styles.contentContainer}>
        <h2>{name}</h2>
        <div className={styles.linkContainer}>
          <NavLink
            to={`../${id}/menu`}
            style={({ isActive }) => {
              return isActive
                ? { backgroundColor: 'orangered', color: 'white' }
                : {};
            }}
          >
            <h3>Menu</h3>
          </NavLink>
          <NavLink
            to={`../${id}/reviews`}
            style={({ isActive }) => {
              return isActive
                ? { backgroundColor: 'orangered', color: 'white' }
                : {};
            }}
          >
            <h3>Reviews</h3>
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
