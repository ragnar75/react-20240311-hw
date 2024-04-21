import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export const Menu = ({ dishes }) => {
  return (
    <div className={styles.menuContainer}>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <Link to={`/dish/${dish.id}`}>
              <div>
                <strong>{dish.name}</strong>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
