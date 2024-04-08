import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { restaurantSlice } from './entities/restaurant';
import { dishSlice } from './entities/dish/index';
import { userSlice } from './entities/user';
import { reviewSlice } from './entities/review';

export const store = configureStore({
  reducer: combineSlices(restaurantSlice, dishSlice, userSlice, reviewSlice),
});

console.log(store.getState());
