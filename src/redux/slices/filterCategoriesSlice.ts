import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  categoryIndex: number;
}

const initialState: FilterState = {
  categoryIndex: 0,
};

const filterCategoriesSlice = createSlice({
  name: 'sortCategories',
  initialState,
  reducers: {
    setCategoryIndex(state, action: PayloadAction<number>) {
      state.categoryIndex = action.payload;
    },
  },
});

export const { setCategoryIndex } = filterCategoriesSlice.actions;
export default filterCategoriesSlice.reducer;
