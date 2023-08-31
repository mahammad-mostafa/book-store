import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 } from 'uuid';

const states = {
  list: [],
  updated: true,
  loading: false,
  error: undefined,
};

axios.defaults.baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OzVBqnExNMneqSrRACVA/books/';

export const bookGet = createAsyncThunk('books/get', async (_, { rejectWithValue }) => {
  try {
    return (await axios.get()).data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const bookPost = createAsyncThunk('books/post', async (book, { rejectWithValue }) => {
  try {
    const result = (await axios.post('', { item_id: v4(), ...book })).data;
    if (result !== 'Created') {
      return rejectWithValue(result);
    }
    return result;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const bookDelete = createAsyncThunk('books/delete', async (id, { rejectWithValue }) => {
  try {
    const result = (await axios.delete(id, { item_id: id })).data;
    if (result !== 'The book was deleted successfully!') {
      return rejectWithValue(result);
    }
    return result;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const bookReducer = createSlice({
  name: 'books',
  initialState: states,
  extraReducers: (builder) => {
    builder.addCase(bookGet.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.updated = false;
      state.list = Object.keys(payload).map((key) => ({ id: key, ...payload[key][0] }));
    });
    builder.addMatcher(({ type }) => type.endsWith('pending'), (state) => {
      state.loading = true;
    });
    builder.addMatcher(({ type }) => !type.includes('get') && type.endsWith('fulfilled'), (state) => {
      state.updated = true;
    });
    builder.addMatcher(({ type }) => type.endsWith('rejected'), (state, { error }) => {
      if (error.name !== 'AbortError') {
        state.loading = false;
        state.error = error.name;
      }
    });
  },
});

export default bookReducer.reducer;
