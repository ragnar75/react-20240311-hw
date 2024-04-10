import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantDishIds } from '../../restaurant/selectors';
import { selectDishIds } from '../selectors';

export const fetchDishesByRestaurantId = createAsyncThunk(
  'dishes/fetchDishesByRestaurantId',
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
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
      const restaurantDishIds = selectRestaurantDishIds(state, restaurantId);
      const dishIds = selectDishIds(state);

      return restaurantDishIds.some((id) => !dishIds.includes(id));
    },
  }
);
