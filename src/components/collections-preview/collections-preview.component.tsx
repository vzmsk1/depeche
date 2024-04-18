import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CollectionsContext } from "../../context/collections.context";
import ProductCard from "../product/product.component";
import type { ProductProps } from "../product/product.props";
import styles from "./collections-preview.module.css";

export default function CollectionsPreview() {
  const { collectionsMap } = useContext(CollectionsContext);
  const cm = collectionsMap as { [title: string]: any };
  const { collection } = useParams();

  return (
    <div className={styles.section}>
      {Object.keys(collectionsMap).map((title) => {
        if (!cm[title].title) {
          return (
            <React.Fragment key={title}>
              {cm[title].map(({ id, ...props }: ProductProps) => (
                <ProductCard id={id} key={id} {...props} />
              ))}
            </React.Fragment>
          );
        }
      })}
    </div>
  );
}
