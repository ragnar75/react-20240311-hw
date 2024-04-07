import { Dish } from '../dish/component';

export const Dishes = ({ dishIds }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {!!dishIds?.length &&
          dishIds.filter(Boolean).map((dishId) => (
            <li key={dishId}>
              <Dish dishId={dishId} />
            </li>
          ))}
      </ul>
    </div>
  );
};
