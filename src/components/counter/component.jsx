export const Counter = ({ value, decrement, increment, min = 0, max = 5 }) => {
  return (
    <span>
      <button
        style={{ marginLeft: '30px' }}
        onClick={decrement}
        disabled={value <= min}
      >
        -
      </button>
      <span style={{ margin: '0 5px' }}> {value} </span>
      <button
        onClick={increment}
        disabled={value >= max}
      >
        +
      </button>
    </span>
  );
};
