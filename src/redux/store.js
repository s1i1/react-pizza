import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './slices/categoriesSlice';
import sortPizzaSlice from './slices/sortPizzaSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    sortPizza: sortPizzaSlice,
  },
});
