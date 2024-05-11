import type { Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import type { Action } from "redux";
import Cart from "../../components/cart/cart.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.slice";
import { HeaderProps } from "./header.props";
import styles from "./header.module.css";

export default function Header({ ...props }: HeaderProps) {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch: Dispatch<Action<"user/signOutStart">> = useDispatch();

  function signOutUser() {
    dispatch(signOutStart());
  }

  return (
    <div {...props} className={styles.header}>
      <Link to="/" className={styles.logo}>
        <span className={styles.heading}>depeche</span>
      </Link>
      <nav className={styles.nav}>
        <Link to="/shop" className={styles.navLink}>
          shop all
        </Link>
        <Link to="/contacts" className={styles.navLink}>
          contacts
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
      <Cart />
    </div>
  );
}
