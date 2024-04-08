import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../constants/normalized-mock';
import { convertArrayToObject } from '../../../utils/helper';

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    // entities: normalizedRestaurants.reduce((acc, restaurant) => {
    //   acc[restaurant.id] = restaurant;
    //   return acc;
    // }, {}),
    entities: convertArrayToObject(normalizedRestaurants),
    ids: normalizedRestaurants.map(({ id }) => id),
  },
  reducers: {},
});
