import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../store/cart/cart.slice";
import type { ProductProps } from "../product/product.props";
import styles from "./checkout-item.module.css";

export default function CheckoutItem(cartItem: ProductProps) {
  const { imageUrl, name, price, quantity } = cartItem;

  const dispatch = useDispatch();

  function removeItemFromCartHandler() {
    dispatch(removeItemFromCart(cartItem));
  }
  function addItemToCartHandler() {
    dispatch(addItemToCart(cartItem));
  }

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>{name}</div>
        <div className={styles.price}>
          USD <span>${price}</span>
        </div>
      </div>
      <div className={styles.quantity}>
        <button
          type="button"
          className={styles.quantityAction}
          onClick={removeItemFromCartHandler}
        >
          <span>-</span>
        </button>
        <p className={styles.quantityField}>{quantity}</p>
        <button
          type="button"
          className={styles.quantityAction}
          onClick={addItemToCartHandler}
        >
          <span>+</span>
        </button>
      </div>
    </div>
  );
}
