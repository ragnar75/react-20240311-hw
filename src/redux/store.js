import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { restaurantSlice } from './entities/restaurant';
import { dishSlice } from './entities/dish/index';
import { userSlice } from './entities/user';
import { reviewSlice } from './entities/review';
import { cartSlice } from './ui/cart';
import { requestSlice } from './ui/request';
import { apiService } from './service/api';

export const store = configureStore({
  reducer: combineSlices(
    restaurantSlice,
    dishSlice,
    userSlice,
    reviewSlice,
    cartSlice,
    requestSlice,
    apiService
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});

console.log(store.getState());
