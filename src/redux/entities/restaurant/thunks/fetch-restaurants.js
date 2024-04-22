import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantIds } from '../selectors';

export const fetchRestaurants = createAsyncThunk(
  'restaurant/fetchRestaurants',
  async () => {
    const response = await fetch('http://localhost:3001/api/restaurants');

    return response.json();
  },
  {
    condition: ({ forceReload = false } = {}, { getState }) =>
      forceReload || !selectRestaurantIds(getState())?.length,
  }
);
