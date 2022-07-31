import { monthNameFormatter } from "../../date-formatters";
import {
	getDateWithOffset,
	getMonthOfYear,
	getQuarterOfYear,
	getYear,
} from "../../date-utils";
import Header from "../header";
import MonthOverview from "../month-overview";

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
			<MonthOverview
				months={[0 * 32, 1 * 32, 2 * 32]
					.map((offset) => getDateWithOffset(date, offset))
					.map((date) => ({
						month: getMonthOfYear(date),
						year: getYear(date),
						title: monthNameFormatter.format(date),
						titleLink: `#m${getMonthOfYear(date)}`,
					}))}
			/>
		</>
	);
}
