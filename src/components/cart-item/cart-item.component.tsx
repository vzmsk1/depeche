import { memo } from "react";
import { useDispatch } from "react-redux";
import { clearItemFromCart } from "../../store/cart/cart.slice";
import Heading from "../heading/heading.component";
import type { ProductProps } from "../product/product.props";
import styles from "./cart-item.module.css";

export default memo(function CartItem(item: ProductProps) {
  const { imageUrl, name, price, quantity } = item;

  const dispatch = useDispatch();

  function clearItemFromCartHandler() {
    dispatch(clearItemFromCart(item));
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
          onClick={clearItemFromCartHandler}
          className={styles.removeBtn}
          type="button"
        >
          remove
        </button>
      </div>
    </div>
  );
});
