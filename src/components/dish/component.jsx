import { Ingredients } from '../ingredients/component';

export const Dish = ({ dish }) => {
  return (
    <div>
      <p>{dish.name}</p>
      <p>Price: {dish.price}</p>
      <Ingredients ingredients={dish.ingredients} />
    </div>
  );
};
