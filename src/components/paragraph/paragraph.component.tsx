import styles from "./paragraph.module.css";
import cn from "classnames";
import type { ParagraphProps } from './paragraph.props'

export default function Paragraph({size = 'regular', children}: ParagraphProps) {
	return <p className={cn(styles.p, {
	   [styles.large]: size === 'large',
	   [styles.regular]: size === 'regular',
	   [styles.small]: size === 'small'
    })}>
		{children}
	</p>
}