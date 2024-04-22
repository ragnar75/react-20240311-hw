import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchReviewsByRestaurantId } from './thunks/fetch-reviews-by-restaurant-id';

const reviewAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: 'review',
  initialState: reviewAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      fetchReviewsByRestaurantId.fulfilled,
      (state, { payload: reviews }) => reviewAdapter.upsertMany(state, reviews)
    ),
});
