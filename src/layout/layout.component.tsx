import Header from "./header/header.component";
import type { LayoutProps } from "./layout.props";
import styles from "./layout.module.css";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>{children}</div>
    </div>
  );
}
