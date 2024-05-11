import styles from "./spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}></div>
    </div>
  );
}
