import { getWeekOfYear, getYear } from "../../date-utils";
import Header from "../header";

export default function ({ date }) {
	return (
		<>
			<Header
				{...{ date }}
				titleFormatter={(d) => `Week ${getWeekOfYear(d)}`}
				linkToWeek={false}
			/>
		</>
	);
}
