import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchDishesByRestaurantId } from './thunks/fetch-dishes-by-restaurant-id';

const dishAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: 'dish',
  initialState: dishAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      fetchDishesByRestaurantId.fulfilled,
      (state, { payload: dishes }) => dishAdapter.upsertMany(state, dishes)
    ),
});
