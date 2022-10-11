import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalPizzas: 0,
};

const cartSlice = createSlice({
  name: 'cartPizzas',
  initialState,
  reducers: {
    setCartItems(state, action) {
      state.cartItems.push(action.payload);
    },
    incrementItemCount(state, action) {
      state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.count++;
        }
      });
    },
    decrementItemCount(state, action) {
      state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.count--;
        }
      });
    },
    filterCartItems(state) {
      state.cartItems = state.cartItems.filter(
        (item, index, array) => array.findIndex((obj) => obj.id === item.id) === index,
      );
    },
    setTotal(state) {
      state.totalPrice = state.cartItems.reduce((prev, curr) => {
        return prev + curr.price * curr.count;
      }, 0);

      state.totalPizzas = state.cartItems.reduce((prev, curr) => {
        return prev + curr.count;
      }, 0);
    },
    clearPizzas(state) {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalPizzas = 0;
    },
    deletePizza(state, action) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  setCartItems,
  incrementItemCount,
  decrementItemCount,
  filterCartItems,
  setTotal,
  clearPizzas,
  deletePizza,
} = cartSlice.actions;
export default cartSlice.reducer;
