import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type CurrentItem = {
  id: string;
  currentType: string;
  currentSize: number;
};

type CartItem = {
  count: number;
  currentSize: number;
  currentType: string;
  id: string;
  imageUrl: string;
  name: string;
  price: number;
};

interface CartSliceState {
  cartItems: CartItem[];
  totalPrice: number;
  totalPizzas: number;
}

const initialState: CartSliceState = {
  cartItems: [],
  totalPrice: 0,
  totalPizzas: 0,
};

const isCurrentObj = (obj: CurrentItem, item: CartItem) => {
  const IDs = obj.id === item.id;
  const types = obj.currentType === item.currentType;
  const sizes = obj.currentSize === item.currentSize;

  return IDs && types && sizes;
};

const cartSlice = createSlice({
  name: 'cartPizzas',
  initialState,
  reducers: {
    setCartItems(state, action: PayloadAction<CartItem>) {
      state.cartItems.push(action.payload);
    },
    incrementItemCount(state, action: PayloadAction<CurrentItem>) {
      state.cartItems.map((item) => {
        if (isCurrentObj(action.payload, item)) {
          item.count++;
        }
      });
    },
    decrementItemCount(state, action: PayloadAction<CurrentItem>) {
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
    deletePizza(state, action: PayloadAction<CurrentItem>) {
      state.cartItems = state.cartItems.filter((item, _, array) =>
        array.findIndex(() => isCurrentObj(action.payload, item)),
      );
    },
  },
});

export const selectCart = (state: RootState) => state.cart;

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
