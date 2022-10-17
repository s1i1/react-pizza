import { configureStore } from '@reduxjs/toolkit';
import filterCategoriesSlice from './slices/filterCategoriesSlice';
import sortPizzaSlice from './slices/sortPizzaSlice';
import paginationSlice from './slices/paginationSlice';
import pizzasDataSlice from './slices/pizzasDataSlice';
import searchPizzaSlice from './slices/searchPizzaSlice';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    categories: filterCategoriesSlice,
    sortPizza: sortPizzaSlice,
    pagination: paginationSlice,
    pizzasData: pizzasDataSlice,
    searchPizza: searchPizzaSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
