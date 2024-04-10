export const selectCartModule = (state) => state.cart;

export const selectCartProductIds = (state) =>
  Object.keys(selectCartModule(state));

export const selectCartProductAmount = (state, productId) =>
  selectCartModule(state)[productId] || 0;
