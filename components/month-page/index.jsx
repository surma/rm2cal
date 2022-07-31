import { monthNameFormatter } from "../../date-formatters";
import { getMonthOfYear, getYear } from "../../date-utils";
import Header from "../header";
import MonthOverview from "../month-overview";

export default function ({ date }) {
	return (
		<>
			<Header
				{...{ date }}
				titleFormatter={(d) => monthNameFormatter.format(d)}
				linkToMonth={false}
				linkToWeek={false}
			/>
			<MonthOverview
				months={[
					{
						month: getMonthOfYear(date),
						year: getYear(date),
						titleLink: `#m${getMonthOfYear(date)}`,
					},
				]}
			/>
		</>
	);
}
