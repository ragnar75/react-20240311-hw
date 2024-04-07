import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../constants/normalized-mock';
import { convertArrayToObject } from '../../../utils/helper';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    entities: convertArrayToObject(normalizedUsers),
    ids: normalizedUsers.map(({ id }) => id),
  },
  reducers: {},
});
