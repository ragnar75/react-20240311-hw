import { useCallback, useState } from 'react';

export const useCounter = (defaultValue = 0, step = 1) => {
  const [amount, setAmount] = useState(defaultValue);
  const decrement = useCallback(
    () => setAmount((currentValue) => currentValue - step),
    [step]
  );
  const increment = useCallback(
    () => setAmount((currentValue) => currentValue + step),
    [step]
  );
  return { amount, decrement, increment };
};
