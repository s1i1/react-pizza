import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
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
  },
});

export const { setCartItems, incrementItemCount, filterCartItems } = cartSlice.actions;
export default cartSlice.reducer;
