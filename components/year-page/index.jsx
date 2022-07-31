import { getYear } from "../../date-utils";
import Header from "../header";
import YearOverview from "../year-overview";

import * as classes from "./styles.module.css";

export default function ({ date }) {
	return (
		<>
			<Header
				{...{ date }}
				titleFormatter={(d) => getYear(d)}
				linkToYear={false}
				linkToMonth={false}
				linkToQuarter={false}
				linkToWeek={false}
			/>
			<YearOverview year={getYear(date)} />
		</>
	);
}
