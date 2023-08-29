import { createSlice } from '@reduxjs/toolkit';

const states = { list: [], status: 'Under Construction' };

const categoriesReducer = createSlice({
  name: 'categories',
  initialState: states,
  reducers: {
    check: (state) => state.status,
  },
});

export const { check } = categoriesReducer.actions;

export default categoriesReducer.reducer;
