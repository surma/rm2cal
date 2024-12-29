
import { range } from "../../utils";

import * as classes from "./styles.module.css";

export default function ({rows = 5}) {
	return (
		<div class={classes.tasklist}>
			{
				range(rows * 2).map(i => <TaskItem />)
			}
		</div>
	);
}

function TaskItem() {
	return <div class={classes.taskitem}>
		<div class={[classes.box, classes.border].join(" ")} />
		<div class={[classes.box].join(" ")}>⚠</div>
		<div class={classes.underline} />
	</div>;
}
