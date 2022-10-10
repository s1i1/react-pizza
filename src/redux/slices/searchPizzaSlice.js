import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
};

export const searchPizzaSlice = createSlice({
  name: 'searchPizza',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchPizzaSlice.actions;
export default searchPizzaSlice.reducer;
