import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import Heading from "../heading/heading.component";
import styles from "./cart.module.css";
import cn from "classnames";
import { ReactComponent as CloseIcon } from "./close-icon.svg";
import { ReactComponent as CartIcon } from "./cart-icon.svg";

export default function Cart() {
  const { totalPrice, cartCount, cartItems, isCartOpen, setIsCartOpen } =
    useContext(CartContext);

  function clickHandler(e: React.MouseEvent) {
    const target = e.target as Element;

    if (!target.closest("#header-cart") || target.closest("#close-cart-btn")) {
      setIsCartOpen(false);
      document.documentElement.style.overflow = "auto";
    }
  }

  function openCart() {
    setIsCartOpen(true);
    document.documentElement.style.overflow = "hidden";
  }

  return (
    <>
      <button
        onClick={openCart}
        id="open-cart-btn"
        type="button"
        className={styles.cartIcon}
      >
        <CartIcon />
        <span
          className={cn(styles.quantity, {
            [styles.isVisible]: cartCount,
          })}
        >
          {cartCount}
        </span>
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
            {!cartItems.length ? (
              <div className={styles.emptyState}>
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
            ) : (
              <div className={styles.body}>
                <div className={styles.items}>
                  {cartItems.map(({ id, ...props }) => (
                    <CartItem {...props} key={id} id={id} />
                  ))}
                </div>
                <div className={styles.footer}>
                  <div className={styles.subtotals}>
                    <div className={styles.total}>
                      <Heading tag="h3">estimated total*</Heading>
                      <span className={styles.price}>${totalPrice}</span>
                    </div>
                    <p className={styles.disclaimer}>
                      *shipping fees & taxes will be calculated during checkout
                    </p>
                  </div>
                  <Button>secure checkout</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}