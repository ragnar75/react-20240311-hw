import { useState } from 'react';
import { Ingredients } from '../ingredients/component';

export const Dish = ({ dish }) => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>
        {dish.name}{' '}
        <button
          style={{ marginLeft: '30px' }}
          onClick={() => setCounter((counter) => counter + 1)}
          disabled={counter > 4}
        >
          +
        </button>
        <span style={{ margin: '0 5px' }}> {counter} </span>
        <button
          onClick={() => setCounter((counter) => counter - 1)}
          disabled={counter < 1}
        >
          -
        </button>
      </p>
      <p>Price: {dish.price}</p>
      <Ingredients ingredients={dish.ingredients} />
    </div>
  );
};
