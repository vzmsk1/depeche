import { Link } from "react-router-dom";
import { HeaderProps } from "./header.props";
import styles from "./header.module.css";
import { ReactComponent as CartIcon } from "./cart-icon.svg";

export default function Header({ ...props }: HeaderProps) {
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
        <Link to="/login" className={styles.navLink}>
          my account
        </Link>
        <Link to="/cart" className={styles.icon}>
          <CartIcon />
        </Link>
      </nav>
    </div>
  );
}
