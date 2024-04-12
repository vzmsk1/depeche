import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Heading from "../heading/heading.component";
import type { ProductProps } from "../product/product.props";
import styles from "./cart-item.module.css";

export default function CartItem(item: ProductProps) {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { imageUrl, name, price, quantity } = item;

  function removeItemFromCart() {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  }

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <Heading tag="h3">{name}</Heading>
          <span className={styles.quantity}>({quantity})</span>
        </div>
        <span className={styles.price}>${price}</span>
        <button
          onClick={removeItemFromCart}
          className={styles.removeBtn}
          type="button"
        >
          remove
        </button>
      </div>
    </div>
  );
}
