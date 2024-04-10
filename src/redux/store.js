import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { restaurantSlice } from './entities/restaurant';
import { dishSlice } from './entities/dish/index';
import { userSlice } from './entities/user';
import { reviewSlice } from './entities/review';
import { cartSlice } from './ui/cart';

export const store = configureStore({
  reducer: combineSlices(
    restaurantSlice,
    dishSlice,
    userSlice,
    reviewSlice,
    cartSlice
  ),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

console.log(store.getState());
