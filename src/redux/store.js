import { configureStore } from '@reduxjs/toolkit';
import filterCategoriesSlice from './slices/filterCategoriesSlice';
import sortPizzaSlice from './slices/sortPizzaSlice';

export const store = configureStore({
  reducer: {
    categories: filterCategoriesSlice,
    sortPizza: sortPizzaSlice,
  },
});
