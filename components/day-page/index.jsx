import Header from "../header";
import TaskList from "../task-list";
import Scratchpad from "../scratchpad";

export default function ({ date }) {
	return (
		<>
			<Header {...{ date }} />
			<TaskList rows={14}/>
			<Scratchpad />

		</>
	);
}
