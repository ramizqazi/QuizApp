import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  items: [],
};

export const slice = createSlice({
  name: 'Home',
  initialState: INITIAL_STATE,
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export default slice.reducer;
