import { useContext } from 'react'
import ProductCard from '../../components/product/product.component'
import { ProductsContext } from '../../context/products.context'
import styles from "./shop.module.css";


export default function Shop() {
	const {products} = useContext(ProductsContext);

	
	return (
		<div className={styles.section}>
			{
				products.map(({id, ...props}) => (
					<ProductCard key={id} {...props} />
				))
			}
		</div>
	)
}