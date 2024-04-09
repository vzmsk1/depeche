import type { InputProps } from './input.props'
import styles from "./input.module.css";
import cn from "classnames";

export default function Input({label, options}: InputProps)  {
	return <div className={styles.input}>
		<input {...options} />
		<label className={cn(styles.label, {
	   [styles.isFilled]: options.value,
		})}>{label}</label>
	</div>
}