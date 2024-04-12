import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
// import { normalizedUsers } from '../../../constants/normalized-mock';
// import { convertArrayToObject } from '../../../utils/helper';
import { fetchUsers } from './thunks/fetch-users';

const userAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: 'user',
  initialState: userAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchUsers.fulfilled, (state, { payload: users }) =>
      userAdapter.upsertMany(state, users)
    ),
});
