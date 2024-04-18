import CollectionCell from "../collection-cell/collection-cell.component";
import styles from "./collections-grid.module.css";

const collections = [
  {
    id: 1,
    heading: "eyes",
    message: "create high-performance looks—from classic to graphic",
    imageDescription: "eye products",
    imageSrc: "https://i.ibb.co/5RSRYDL/97f3b620265d5fdfce0d907f925e048c.webp",
    route: "shop/eyes",
  },
  {
    id: 2,
    heading: "lips",
    message:
      "swipe on sheer color, a tantalizing scent & mega glossy shine in no time",
    imageDescription: "lip products",
    imageSrc: "https://i.ibb.co/hmhc8Sw/7a2fd81cfd7e75a316404619a5d431fd.webp",
    route: "shop/lips",
  },
  {
    id: 3,
    heading: "face",
    message:
      "meet the long-wear foundations that’s actually high-performance skincare",
    imageDescription: "face products",
    imageSrc: "https://i.ibb.co/sswY6wQ/f5819864b58c3a01cd9c445ac1c34d68.webp",
    route: "shop/face",
  },
  {
    id: 4,
    heading: "best sellers",
    message: "meet our best sellers",
    imageDescription: "best sellers",
    imageSrc: "https://i.ibb.co/V9VDh1S/c02f25099fc2984c2da5b1638e9c1ce4.webp",
    route: "shop",
  },
];

export default function CollectionsGrid() {
  return (
    <div className={styles.grid}>
      {collections.map(({ id, ...props }) => (
        <CollectionCell key={id} {...props} />
      ))}
    </div>
  );
}
