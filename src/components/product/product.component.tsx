import Button from '../button/button.component'
import Heading from '../heading/heading.component'
import styles from "./product.module.css";
import type { ProductProps } from './product.props'

export default function ProductCard({name, imageUrl, price}: ProductProps) {

	
	return <div className={styles.card}>
		<div className={styles.image}>
			<img src={imageUrl} alt={name} />
			<div className={styles.button}>
				<Button buttonType='ghost'>add to bag</Button>
			</div>
		</div>
		<div className={styles.content}>
			<div className={styles.heading}>
				<Heading tag='h3'>{name}</Heading>
			</div>
			<span className={styles.price}>${price}</span>
		</div>
	</div>
}