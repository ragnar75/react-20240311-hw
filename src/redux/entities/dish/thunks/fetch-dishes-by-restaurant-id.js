import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantDishIds } from '../../restaurant/selectors';
import { selectDishIds } from '../selectors';

export const fetchDishesByRestaurantId = createAsyncThunk(
  'dishes/fetchDishesByRestaurantId',
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    return response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantDishIds = selectRestaurantDishIds(state, restaurantId);
      const dishIds = selectDishIds(state);

      return restaurantDishIds.some((dishId) => !dishIds.includes(dishId));
    },
  }
);
