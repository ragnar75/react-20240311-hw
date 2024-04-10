import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDishesByRestaurantId = createAsyncThunk(
  'dishes/fetchDishesByRestaurantId',
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    return await response.json();
  }
);
