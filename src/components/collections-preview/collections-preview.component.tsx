import React from "react";
import { useSelector } from "react-redux";
import {
  selectCollectionsIsLoading,
  selectCollectionsMap,
} from "../../store/collections/collection.selector";
import Loader from "../loader/loader.component";
import ProductCard from "../product/product.component";
import type { ProductProps } from "../product/product.props";
import styles from "./collections-preview.module.css";

export default function CollectionsPreview() {
  const collectionsMap = useSelector(selectCollectionsMap);
  const isLoading = useSelector(selectCollectionsIsLoading);
  const cm = collectionsMap as { [title: string]: any };

  console.log(collectionsMap, true);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.section}>
          {Object.keys(collectionsMap).map((title) => {
            console.log(title);
            return (
              <React.Fragment key={title}>
                {cm[title].map(({ id, ...props }: ProductProps) => (
                  <ProductCard id={id} key={id} {...props} />
                ))}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </>
  );
}
