import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantReviewIds } from '../../restaurant/selectors';
import { selectReviewIds } from '../selectors';

export const fetchReviewsByRestaurantId = createAsyncThunk(
  'reviews/fetchReviewsByRestaurantId',
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    if (result.length === 0) {
      return rejectWithValue('no data');
    }

    return await result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantReviewIds = selectRestaurantReviewIds(
        state,
        restaurantId
      );
      const reviewIds = selectReviewIds(state);

      return restaurantReviewIds.some((id) => !reviewIds.includes(id));
    },
  }
);
