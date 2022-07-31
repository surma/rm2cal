import { getQuarterOfYear, getYear } from "../../date-utils";
import Header from "../header";

export default function ({ date }) {
	return (
		<>
			<Header
				{...{ date }}
				titleFormatter={(d) => `Q${getQuarterOfYear(d)}`}
				linkToMonth={false}
				linkToQuarter={false}
				linkToWeek={false}
			/>
		</>
	);
}
