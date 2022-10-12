import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalPizzas: 0,
};

const isCurrentObj = (obj, item) => {
  const IDs = obj.id === item.id;
  const types = obj.currentType === item.currentType;
  const sizes = obj.currentSize === item.currentSize;

  return IDs && types && sizes;
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
        if (isCurrentObj(action.payload, item)) {
          item.count++;
        }
      });
    },
    decrementItemCount(state, action) {
      state.cartItems.map((item) => {
        if (isCurrentObj(action.payload, item)) {
          item.count--;
        }
      });
    },
    filterCartItems(state) {
      state.cartItems = state.cartItems.filter(
        (item, index, array) => array.findIndex((obj) => isCurrentObj(obj, item)) === index,
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
      state.cartItems = state.cartItems.filter((item, index, array) =>
        array.findIndex((obj) => isCurrentObj(action.payload, item)),
      );
    },
  },
});

export const selectCart = (state) => state.cart;

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
