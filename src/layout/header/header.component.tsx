import { type Dispatch, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import type { Action } from "redux";
import Cart from "../../components/cart/cart.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.slice";
import { HeaderProps } from "./header.props";
import { ReactComponent as CloseIcon } from "./close-icon.svg";
import { ReactComponent as HamburgerIcon } from "./hamburger-icon.svg";
import styles from "./header.module.css";
import cn from "classnames";

export default function Header({ ...props }: HeaderProps) {
  const currentUser = useSelector(selectCurrentUser);
  const location = useLocation();
  const dispatch: Dispatch<Action<"user/signOutStart">> = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    closeMenu();
  }, [location]);

  function signOutUser() {
    dispatch(signOutStart());
  }

  function clickHandler(e: React.MouseEvent) {
    const target = e.target as Element;

    if (!target.closest("#header-menu") || target.closest("#close-menu-btn")) {
      closeMenu();
    }
  }

  function closeMenu() {
    document.documentElement.style.overflow = "auto";
    setIsMenuOpen(false);
  }

  function openMenu() {
    document.documentElement.style.overflow = "hidden";
    setIsMenuOpen(true);
  }

  return (
    <div {...props} className={styles.header}>
      <button onClick={openMenu} className={styles.hamburger} type="button">
        <HamburgerIcon />
      </button>
      <Link to="/" className={styles.logo}>
        <span className={styles.heading}>depeche</span>
      </Link>
      <div
        onClick={clickHandler}
        className={cn(styles.nav, {
          [styles.isActive]: isMenuOpen,
        })}
      >
        <button id="close-menu-btn" className={styles.close} type="button">
          <CloseIcon />
        </button>
        <nav id="header-menu" className={styles.inner}>
          <Link to="/shop" className={styles.navLink}>
            shop all
          </Link>
          {currentUser ? (
            <span className={styles.navLink} onClick={signOutUser}>
              sign out
            </span>
          ) : (
            <Link to="/login" className={styles.navLink}>
              login
            </Link>
          )}
        </nav>
      </div>
      <Cart />
    </div>
  );
}
