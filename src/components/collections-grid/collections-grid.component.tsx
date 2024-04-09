import Collection from "../collection/collection.component";
import styles from "./collections-grid.module.css";
import type { CollectionsGridProps } from "./collections-grid.props";

export default function CollectionsGrid({ collections }: CollectionsGridProps) {
  return (
    <div className={styles.grid}>
      {collections.map(
        ({ id, heading, message, imageDescription, imageSrc }) => (
          <Collection
            key={id}
            heading={heading}
            message={message}
            imageDescription={imageDescription}
            imageSrc={imageSrc}
          />
        ),
      )}
    </div>
  );
}
