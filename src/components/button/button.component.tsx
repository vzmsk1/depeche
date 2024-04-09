import type { ButtonProps } from './button.props'
import styles from "./button.module.css";
import cn from "classnames";

export default function Button ({children, buttonType, ...props}: ButtonProps) {
	return <button className={cn(styles.btn, {
	   [styles.secondary]: buttonType === 'secondary',
    })} {...props}>
		{children}
	</button>
}