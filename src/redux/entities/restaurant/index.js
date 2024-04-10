import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
// import { normalizedRestaurants } from '../../../constants/normalized-mock';
// import { convertArrayToObject } from '../../../utils/helper';
import { fetchRestaurants } from './thunks/fetch-restaurants';

const restaurantAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: restaurantAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      fetchRestaurants.fulfilled,
      // (state, { payload: restaurants }) => {
      //   state.entities = restaurants.reduce((acc, current) => {
      //     acc[current.id] = current;
      //     return acc;
      //   }, {});
      //   state.ids = restaurants.map(({ id }) => id);
      // }
      (state, { payload: restaurants }) => restaurantAdapter.setAll(state, restaurants)
    ),
});
