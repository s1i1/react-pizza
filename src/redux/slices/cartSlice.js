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
  },
});

export const { setCartItems, incrementItemCount, filterCartItems, setTotal } = cartSlice.actions;
export default cartSlice.reducer;
