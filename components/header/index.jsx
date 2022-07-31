import { titleFormatter } from "../../date-formatters";
import * as classes from "./styles.module.css";

export default function Header({ date }) {
	return (
		<header class={classes.header}>
			<span class={classes.title}>{titleFormatter.format(date)}</span>
			<span class={classes.closebtn} />
		</header>
	);
}
