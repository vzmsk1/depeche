import styles from "./heading.module.css";
import cn from "classnames";
import type { HeadingProps } from "./heading.props";

export default function Heading({ tag, children }: HeadingProps) {
  switch (tag) {
    case "h1":
      return <h1 className={cn(styles.h1)}>{children}</h1>;
    case "h2":
      return <h2 className={cn(styles.h2)}>{children}</h2>;
    case "h3":
      return <h3 className={cn(styles.h3)}>{children}</h3>;
    default:
      return <></>;
  }
}
