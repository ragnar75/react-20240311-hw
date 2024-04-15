import { DishContainer } from '../dish/container';

export const Menu = ({ dishIds }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {dishIds.map((dishId) => (
          <li key={dishId}>
            <DishContainer dishId={dishId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
