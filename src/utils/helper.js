export const convertArrayToObject = (arr) => {
  return arr.reduce((acc, current) => {
    acc[current.id] = current;
    return acc;
  }, {});
};
