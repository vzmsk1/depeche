import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Heading from "../../components/heading/heading.component";
import ProductCard from "../../components/product/product.component";
import type { ProductProps } from "../../components/product/product.props";
import { CollectionsContext } from "../../context/collections.context";
import styles from "../../components/collections-preview/collections-preview.module.css";
import collectionStyles from "./collection.module.css";

export default function Collection() {
  const { collectionsMap } = useContext(CollectionsContext);
  const { collection } = useParams();
  const cm = collectionsMap as { [title: string]: any };
  const [products, setProducts] = useState(collection && cm[collection]);

  useEffect(() => {
    collection && setProducts(cm[collection]);
  }, [collection, collectionsMap]);

  return (
    <div className={collectionStyles.section}>
      <Heading tag="h2">{collection}</Heading>
      <div className={styles.section}>
        {products &&
          products.map(({ id, ...props }: ProductProps) => (
            <ProductCard id={id} key={id} {...props} />
          ))}
      </div>
    </div>
  );
}
