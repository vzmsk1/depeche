import { createContext, type SetStateAction, useState } from "react";

interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
