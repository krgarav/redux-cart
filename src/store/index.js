import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-reducer";
import layoutReducer from "./layout-reducer";

const Store = configureStore({
  reducer: { cart: cartReducer, layout: layoutReducer },
});

export default Store;
