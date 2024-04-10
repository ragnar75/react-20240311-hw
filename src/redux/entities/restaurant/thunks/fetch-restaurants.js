import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantIds } from '../selectors';

export const fetchRestaurants = createAsyncThunk(
  'restaurant/fetchRestaurants',
  async (_, { rejectWithValue }) => {
    const response = await fetch('http://localhost:3001/api/restaurants');
    const result = await response.json();

    if (result.length === 0) {
      return rejectWithValue('no data');
    }

    return result;
  },
  {
    condition: (_, { getState }) => !selectRestaurantIds(getState())?.length,
  }
);
