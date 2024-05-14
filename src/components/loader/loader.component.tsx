import styles from "./loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.ring}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
