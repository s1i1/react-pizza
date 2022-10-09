import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage(state, actions) {
      state.currentPage = actions.payload;
    },
  },
});

export const { setCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
