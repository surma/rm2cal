import * as classes from "./styles.module.css";

export default function Page({ children, id }) {
	return (
		<div class={classes.page} id={id}>
			{children}
		</div>
	);
}
