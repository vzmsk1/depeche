import React from "react";
import { useSelector } from "react-redux";
import { selectCollectionsMap } from "../../store/collections/collection.selector";
import ProductCard from "../product/product.component";
import type { ProductProps } from "../product/product.props";
import Spinner from "../spinner/spinner.component";
import styles from "./collections-preview.module.css";

export default function CollectionsPreview() {
  const collectionsMap = useSelector(selectCollectionsMap);
  // const isLoading = useSelector(selectCollectionsIsLoading);
  const cm = collectionsMap as { [title: string]: any };

  console.log(collectionsMap, true);

  return (
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
      {/* {isLoading ? ( */}
      {/*   <Spinner /> */}
      {/* ) : ( */}
      {/*   Object.keys(collectionsMap).map((title) => { */}
      {/*     console.log(title); */}
      {/*     return ( */}
      {/*       <React.Fragment key={title}> */}
      {/*         {cm[title].map(({ id, ...props }: ProductProps) => ( */}
      {/*           <ProductCard id={id} key={id} {...props} /> */}
      {/*         ))} */}
      {/*       </React.Fragment> */}
      {/*     ); */}
      {/*   }) */}
      {/* )} */}
    </div>
  );
}
