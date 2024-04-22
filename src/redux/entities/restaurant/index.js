import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchRestaurants } from './thunks/fetch-restaurants';

const restaurantAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: restaurantAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      fetchRestaurants.fulfilled,
      (state, { payload: restaurants }) =>
        restaurantAdapter.setAll(state, restaurants)
    ),
});
