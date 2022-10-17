import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchValue: string;
}

const initialState: SearchState = {
  searchValue: '',
};

export const searchPizzaSlice = createSlice({
  name: 'searchPizza',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchPizzaSlice.actions;
export default searchPizzaSlice.reducer;
