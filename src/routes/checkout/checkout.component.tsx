import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Heading from "../../components/heading/heading.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import type { ProductProps } from "../../components/product/product.props";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import styles from "./checkout.module.css";

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
            USD <span>${cartTotal}</span>
          </div>
        </div>
      </aside>
      <div className={styles.body}>
        <PaymentForm />
      </div>
    </div>
  );
}
