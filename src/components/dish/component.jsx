import { Ingredients } from '../ingredients/component';
import { Counter } from '../counter/component';
import { useCounter } from '../../hooks/use-counter';

export const Dish = ({ dish }) => {
  const { amount, decrement, increment } = useCounter();

  return (
    <div>
      <p>
        {dish.name}{' '}
        <Counter
          value={amount}
          decrement={decrement}
          increment={increment}
        />
      </p>
      <p>Price: {dish.price}</p>
      <Ingredients ingredients={dish.ingredients} />
    </div>
  );
};
