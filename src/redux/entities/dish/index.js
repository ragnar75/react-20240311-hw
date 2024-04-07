import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../constants/normalized-mock';
import { convertArrayToObject } from '../../../utils/helper';

export const dishSlice = createSlice({
  name: 'dish',
  initialState: {
    entities: convertArrayToObject(normalizedDishes),
    ids: normalizedDishes.map(({ id }) => id),
  },
  reducers: {},
});
