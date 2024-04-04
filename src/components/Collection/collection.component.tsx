import Heading from "../Heading/heading.component";
import styles from "./collection.module.css";
import cn from "classnames";
import type { CollectionProps } from "./collection.props";

export default function Collection({
  heading,
  message,
  imageSrc,
  imageDescription,
}: CollectionProps) {
  return (
    <div className={cn(styles.collection)}>
      <div className={cn(styles.imageWrap)}>
        <img
          className={cn(styles.image)}
          src={imageSrc}
          alt={imageDescription}
        />
      </div>
      <div className={cn(styles.content)}>
        <Heading tag="h2">{heading}</Heading>
        <div className={cn(styles.message)}>
          <p className={cn(styles.messageContent)}>{message}</p>
        </div>
        <span className={cn(styles.link)}>shop now</span>
      </div>
    </div>
  );
}
