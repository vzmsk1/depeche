import { useContext } from 'react'
import { Link } from "react-router-dom";
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { HeaderProps } from "./header.props";
import styles from "./header.module.css";
import { ReactComponent as CartIcon } from "./cart-icon.svg";

export default function Header({ ...props }: HeaderProps) {
  const { currentUser } = useContext(UserContext)
  
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
          <span onClick={signOutUser} className={styles.navLink}>
            sign out
          </span>
        ) : (<Link to="/login" className={styles.navLink}>
            login
          </Link>)}
        <Link to="/cart" className={styles.icon}>
          <CartIcon />
        </Link>
      </nav>
    </div>
  );
}
