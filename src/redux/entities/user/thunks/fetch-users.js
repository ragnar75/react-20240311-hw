import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectUserIds } from '../selectors';

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async (_, { rejectWithValue }) => {
    const response = await fetch('http://localhost:3001/api/users');
    const result = await response.json();

    if (result.length === 0) {
      return rejectWithValue('no data');
    }

    return result;
  },
  {
    condition: (_, { getState }) => !selectUserIds(getState())?.length,
  }
);
