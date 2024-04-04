import { Link } from "react-router-dom";
import Heading from "../../components/Heading/heading.component";
import { HeaderProps } from "./header.props";
import styles from "./header.module.css";

export default function Header({ ...props }: HeaderProps) {
  return (
    <div {...props} className={styles.header}>
      <Link to="/" className={styles.logo}>
        <Heading tag="h1">depeche</Heading>
      </Link>
      <nav className={styles.nav}>
        <Link to="/shop" className={styles.navLink}>
          shop all
        </Link>
      </nav>
    </div>
  );
}
