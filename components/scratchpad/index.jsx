import { range } from "../../utils";

import * as classes from "./styles.module.css";

export default function () {
	return (
		<div class={classes.scratchpadarea}>
			<div class={classes.scratchpad}>
				<h1 class={classes.bgtext}>Scratchpad</h1>
			</div>
		</div>
	);
}
