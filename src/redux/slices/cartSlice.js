import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ id, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          return state.filter((item) => item.id !== id);
        } else {
          existingItem.quantity -= 1;
        }
      }
    },
    clearCart: () => [],
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart;

export const selectCartTotalItems = (state) => {
  return state.cart.length;
};
export const selectCartItemsCount = (state) =>
  state.cart.reduce((count, item) => count + item.quantity, 0);

export default cartSlice.reducer;
