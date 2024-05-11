import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../store/cart/cart.slice";
import {
  selectCartCount,
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import Heading from "../heading/heading.component";
import styles from "./cart.module.css";
import cn from "classnames";
import { ReactComponent as CloseIcon } from "./close-icon.svg";
import { ReactComponent as CartIcon } from "./cart-icon.svg";

export default function Cart() {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    closeCart();
  }, [location]);

  function goToCheckoutHandler() {
    navigate("/checkout");
  }

  function clickHandler(e: React.MouseEvent) {
    const target = e.target as Element;

    if (!target.closest("#header-cart") || target.closest("#close-cart-btn")) {
      closeCart();
    }
  }

  function closeCart() {
    document.documentElement.style.overflow = "auto";
    dispatch(setIsCartOpen(false));
  }

  function openCart() {
    document.documentElement.style.overflow = "hidden";
    dispatch(setIsCartOpen(true));
  }

  return (
    <>
      <button onClick={openCart} type="button" className={styles.cartIcon}>
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
                  <Link to="/shop/eyes">
                    <Button buttonType="ghost">eyes</Button>
                  </Link>
                  <Link to="/shop/lips">
                    <Button buttonType="ghost">lips</Button>
                  </Link>
                  <Link to="/shop/skin">
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
                      <span className={styles.price}>${cartCount}</span>
                    </div>
                    <p className={styles.disclaimer}>
                      *shipping fees & taxes will be calculated during checkout
                    </p>
                  </div>
                  <Button onClick={goToCheckoutHandler}>secure checkout</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
