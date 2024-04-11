import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import Heading from "../heading/heading.component";
import styles from "./cart.module.css";
import cn from "classnames";
import { ReactComponent as CloseIcon } from "./close-icon.svg";
import { ReactComponent as CartIcon } from "./cart-icon.svg";

export default function Cart() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  function clickHandler(e: React.MouseEvent) {
    const target = e.target as Element;

    if (!target.closest("#header-cart") || target.closest("#close-cart-btn")) {
      setIsCartOpen(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setIsCartOpen(true)}
        id="open-cart-btn"
        type="button"
        className={styles.cartIcon}
      >
        <CartIcon />
      </button>
      <div
        onClick={(e) => clickHandler(e)}
        className={cn(styles.section, {
          [styles.isActive]: isCartOpen,
        })}
      >
        <div id="header-cart" className={styles.inner}>
          <button id="close-cart-btn" className={styles.close} type="button">
            <CloseIcon />
          </button>
          <div className={styles.content}>
            <div className={styles.heading}>
              <Heading tag="h2">
                you don’t have any items in your cart yet
              </Heading>
            </div>
            <div className={styles.buttons}>
              <Link to="/shop/eye-makeup">
                <Button buttonType="ghost">eyes</Button>
              </Link>
              <Link to="/shop/lip-makeup">
                <Button buttonType="ghost">lips</Button>
              </Link>
              <Link to="/shop/face-makeup">
                <Button buttonType="ghost">face</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
