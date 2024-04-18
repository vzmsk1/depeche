import type { ProductProps } from "../components/product/product.props";

export type CollectionPropsRoot = CollectionProps[];

export interface CollectionProps {
  title: string;
  items: ProductProps[];
}
