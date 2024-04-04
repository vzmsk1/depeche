import Heading from "../Heading/heading.component";
import styles from "./collection.module.css";
import type { CollectionProps } from "./collection.props";

export default function Collection({
  heading,
  message,
  imageSrc,
  imageDescription,
}: CollectionProps) {
  return (
    <div className={styles.item}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={imageSrc} alt={imageDescription} />
      </div>
      <div className={styles.content}>
        <Heading tag="h2">{heading}</Heading>
        <div className={styles.message}>
          <p className={styles.messageContent}>{message}</p>
        </div>
        <span className={styles.link}>shop now</span>
      </div>
    </div>
  );
}
