import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cart.slice";
import { collectionsReducer } from "./collections/collection.slice";
import { userReducer } from "./user/user.slice";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  user: userReducer,
  collections: collectionsReducer,
  cart: cartReducer,
});
