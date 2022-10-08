import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryIndex: 0,
};

const categoriesSlice = createSlice({
  name: 'sortCategories',
  initialState,
  reducers: {
    setCategoryIndex(state, action) {
      state.categoryIndex = action.payload;
    },
  },
});

export const { setCategoryIndex } = categoriesSlice.actions;
export default categoriesSlice.reducer;
