import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../constants/normalized-mock';
import { convertArrayToObject } from '../../../utils/helper';

export const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    entities: convertArrayToObject(normalizedReviews),
    ids: normalizedReviews.map(({ id }) => id),
  },
  reducers: {},
});
