import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',

  async function ({ page, sortBy, fillterByCategory, search }, { rejectWithValue }) {
    try {
      const { data } = await axios.get(
        `https://6335977cea0de5318a16db9b.mockapi.io/pizzaData?${page}${sortBy}${fillterByCategory}${search}`,
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  pizzaData: [],
  status: null,
  error: null,
};

export const pizzasDataSlice = createSlice({
  name: 'pizzas',
  initialState,
  extraReducers: {
    [fetchPizzas.pending](state) {
      state.status = 'loading';
      state.error = null;
    },
    [fetchPizzas.fulfilled](state, action) {
      state.status = 'success';
      state.pizzaData = action.payload;
    },
    [fetchPizzas.rejected](state, action) {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default pizzasDataSlice.reducer;
