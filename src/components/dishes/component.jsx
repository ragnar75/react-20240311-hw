import { Dish } from '../dish/component';

export const Dishes = ({ dishes }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {!!dishes?.length &&
          dishes
            .filter((dish) => dish !== null && dish !== undefined)
            .map((dish) => (
              // added key with unique ids to prevent errors in the console
              <li key={dish.id}>
                <Dish dish={dish} />
              </li>
            ))}
      </ul>
    </div>
  );
};
