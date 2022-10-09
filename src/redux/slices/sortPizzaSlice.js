import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortObj: {
    name: 'популярности',
    id: 'rating',
    order: 'desc',
  },
};

export const sortPizzaSlice = createSlice({
  name: 'sortPizza',
  initialState,
  reducers: {
    setSortObj(state, action) {
      state.sortObj = action.payload;
    },
  },
});

export const { setSortObj } = sortPizzaSlice.actions;
export default sortPizzaSlice.reducer;
