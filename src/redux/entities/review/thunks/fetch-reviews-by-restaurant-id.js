import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantReviewIds } from '../../restaurant/selectors';
import { selectReviewIds } from '../selectors';

export const fetchReviewsByRestaurantId = createAsyncThunk(
  'reviews/fetchReviewsByRestaurantId',
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );

    
    return await response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantReviewIds = selectRestaurantReviewIds(state, restaurantId);
      const reviewIds = selectReviewIds(state);

      return restaurantReviewIds.some((id) => !reviewIds.includes(id));
    },
  }
);
