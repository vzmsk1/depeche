import { createSelector } from "reselect";
import type { ProductProps } from "../../components/product/product.props";
import type { RootState } from "../root-reducer";

function selectCartReducer(state: RootState) {
  return state.cart;
}

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems,
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen,
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems: ProductProps[]) =>
    cartItems.reduce(
      (total, cartItem) => total + (cartItem.quantity ? cartItem.quantity : 0),
      0,
    ),
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems: ProductProps[]) =>
    cartItems.reduce(
      (partialSum, a) => partialSum + (a.quantity ? a.quantity : 1) * a.price,
      0,
    ),
);
