import { createContext, type SetStateAction, useEffect, useState } from "react";
import type { ProductProps } from "../components/product/product.props";

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

function clearCartItem(cartItems: ProductProps[], product: ProductProps) {
  return cartItems.filter((cartItem) => cartItem.id !== product.id);
}

interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<SetStateAction<boolean>>;
  cartItems: ProductProps[];
  addItemToCart: (product: ProductProps) => void;
  setCartItems: React.Dispatch<SetStateAction<ProductProps[]>>;
  cartCount: number;
  totalPrice: number;
  removeItemFromCart: (product: ProductProps) => void;
  clearItemFromCart: (product: ProductProps) => void;
}

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  setCartItems: () => {},
  cartCount: 0,
  totalPrice: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ProductProps[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (partialSum, a) => partialSum + (a.quantity ? a.quantity : 1) * a.price,
      0,
    );

    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + (cartItem.quantity ? cartItem.quantity : 0),
      0,
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  function addItemToCart(product: ProductProps) {
    setCartItems(addCartItem(cartItems, product));
  }

  function removeItemFromCart(product: ProductProps) {
    setCartItems(removeCartItem(cartItems, product));
  }

  function clearItemFromCart(product: ProductProps) {
    setCartItems(clearCartItem(cartItems, product));
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    setCartItems,
    cartCount,
    totalPrice,
    removeItemFromCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
