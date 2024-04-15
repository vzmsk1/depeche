import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Heading from "../../components/heading/heading.component";
import type { ProductProps } from "../../components/product/product.props";
import { CartContext } from "../../context/cart.context";
import styles from "./checkout.module.css";

export default function Checkout() {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className={styles.section}>
      <aside className={styles.aside}>
        <div className={styles.items}>
          {cartItems.map(({ id, ...props }: ProductProps) => (
            <CheckoutItem key={id} id={id} {...props} />
          ))}
        </div>
        <div className={styles.total}>
          <Heading tag="h3">total</Heading>
          <div className={styles.price}>
            USD <span>${totalPrice}</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
