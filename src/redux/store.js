import { configureStore } from '@reduxjs/toolkit';
import filterCategoriesSlice from './slices/filterCategoriesSlice';
import sortPizzaSlice from './slices/sortPizzaSlice';
import paginationSlice from './slices/paginationSlice';
import pizzasDataSlice from './slices/pizzasDataSlice';
import searchPizzaSlice from './slices/searchPizzaSlice';

export const store = configureStore({
  reducer: {
    categories: filterCategoriesSlice,
    sortPizza: sortPizzaSlice,
    pagination: paginationSlice,
    pizzasData: pizzasDataSlice,
    searchPizza: searchPizzaSlice,
  },
});
