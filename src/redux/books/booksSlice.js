import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const states = {
  list: [
    {
      id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookReducer = createSlice({
  name: 'books',
  initialState: states,
  reducers: {
    add: (state, action) => {
      const book = {
        id: v4(), title: action.payload.title, author: action.payload.author,
      };
      state.list.push(book);
    },
    remove: (state, action) => {
      state.list = state.list.filter((book) => book.id !== action.payload);
    },
  },
});

export const { add, remove } = bookReducer.actions;

export default bookReducer.reducer;
