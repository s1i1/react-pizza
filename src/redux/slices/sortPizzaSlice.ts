import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SortItem = {
  name: string;
  id: string;
  order: string;
};

export interface SortState {
  sortObj: SortItem;
}

const initialState: SortState = {
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
    setSortObj(state, action: PayloadAction<SortItem>) {
      state.sortObj = action.payload;
    },
  },
});

export const { setSortObj } = sortPizzaSlice.actions;
export default sortPizzaSlice.reducer;
