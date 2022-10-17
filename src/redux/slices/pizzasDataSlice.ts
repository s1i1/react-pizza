import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface FetchPizzasArgs {
  page: string;
  sortBy: string;
  filterByCategory: string;
  search: string;
}
type PizzasData = {
  category: number;
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  rating: number;
  sizes: number[];
  types: number[];
};

export interface PizzaDataState {
  pizzaData: PizzasData[];
  status: string;
  error: string;
}

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',

  async function (
    { page, sortBy, filterByCategory, search }: FetchPizzasArgs,
    { rejectWithValue },
  ) {
    try {
      const { data } = await axios.get(
        `https://6335977cea0de5318a16db9b.mockapi.io/pizzaData?${page}${sortBy}${filterByCategory}${search}`,
      );

      return data as PizzasData[];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState: PizzaDataState = {
  pizzaData: [],
  status: '',
  error: '',
};

export const pizzasDataSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'loading';
      state.error = '';
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<PizzasData[]>) => {
      state.status = 'success';
      state.pizzaData = action.payload;
    });
    builder.addCase(fetchPizzas.rejected, (state, action: PayloadAction<any>) => {
      state.status = 'rejected';
      state.error = String(action.payload);
    });
  },
});

export default pizzasDataSlice.reducer;
