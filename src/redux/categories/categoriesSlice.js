import { createSlice } from '@reduxjs/toolkit';

const states = { list: ['fiction', 'non fiction'], selection: 'all' };

const categoriesReducer = createSlice({
  name: 'categories',
  initialState: states,
  reducers: {
    select: (state, { payload }) => {
      state.selection = payload;
    },
  },
});

export const { select } = categoriesReducer.actions;

export default categoriesReducer.reducer;
