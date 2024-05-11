import { createSlice } from "@reduxjs/toolkit";
import type { ProductProps } from "../../components/product/product.props";

function clearCartItem(cartItems: ProductProps[], product: ProductProps) {
  return cartItems.filter((cartItem) => cartItem.id !== product.id);
}

function addCartItem(
  cartItems: ProductProps[],
  product: ProductProps,
): ProductProps[] {
  const existingCartItem = cartItems.find((item) => item.id === product.id);

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity ? item.quantity + 1 : null }
        : item,
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
}

function removeCartItem(
  cartItems: ProductProps[],
  product: ProductProps,
): ProductProps[] {
  const existingCartItem = cartItems.find((item) => item.id === product.id);

  if (existingCartItem) {
    if (existingCartItem.quantity !== 1) {
      return cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity ? item.quantity - 1 : null }
          : item,
      );
    }
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }

  return cartItems;
}

export const CART_INITIAL_STATE: {
  isCartOpen: boolean;
  cartItems: [] | ProductProps[];
} = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    clearItemFromCart(state, action) {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  setIsCartOpen,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
