import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryIndex: 0,
};

const filterCategoriesSlice = createSlice({
  name: 'sortCategories',
  initialState,
  reducers: {
    setCategoryIndex(state, action) {
      state.categoryIndex = action.payload;
    },
  },
});

export const { setCategoryIndex } = filterCategoriesSlice.actions;
export default filterCategoriesSlice.reducer;
