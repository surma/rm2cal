import { monthNameFormatter } from "../../date-formatters";
import { getYear } from "../../date-utils";
import Header from "../header";

export default function ({ date }) {
	return (
		<>
			<Header
				{...{ date }}
				titleFormatter={(d) => monthNameFormatter.format(d)}
				linkToMonth={false}
				linkToWeek={false}
			/>
		</>
	);
}
