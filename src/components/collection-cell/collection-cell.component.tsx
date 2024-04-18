import { useNavigate } from "react-router-dom";
import Heading from "../heading/heading.component";
import styles from "./collection-cell.module.css";
import type { CollectionCellProps } from "./collection-cell.props";

export default function CollectionCell({
  heading,
  message,
  imageSrc,
  imageDescription,
  route,
}: CollectionCellProps) {
  const navigate = useNavigate();

  function onNavigateHandler() {
    navigate(route);
  }

  return (
    <div className={styles.item} onClick={onNavigateHandler}>
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
