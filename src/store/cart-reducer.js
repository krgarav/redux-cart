import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [], quantity: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      let newItem = [];
      let quantity = 0;
      if (state.cartItems.length === 0) {
        newItem = state.cartItems.concat(action.payload);
        quantity = 1;
      } else {
      }

      state.cartItems = newItem;
      state.quantity = quantity;
    },
    removeFromCart(state, action) {
      const filteredItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = filteredItems;
    },
   
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
