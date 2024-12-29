import { useMemo } from "preact/hooks";

import {
	dateRange,
	getCurrentDate,
	getDateForNumbers,
	getDayOfYear,
	getMonthOfYear,
	getQuarterOfYear,
	getWeekOfYear,
	getYear,
	isMonthBoundary,
	isQuarterBoundary,
	isWeekBoundary,
	isYearBoundary,
} from "../../date-utils.js";
import Page from "../page/index.jsx";
import Fonts from "../fonts/index.jsx";
import YearPage from "../year-page/index.jsx";

import * as classes from "./styles.module.css";
import { getParameter } from "../../params.js";
import QuarterPage from "../quarter-page/index.jsx";
import MonthPage from "../month-page/index.jsx";
import WeekPage from "../week-page/index.jsx";
import DayPage from "../day-page/index.jsx";

function dateForYear(year) {
	return getDateForNumbers({ year, month: 1, day: 1 });
}

export default function App() {
	const start = useMemo(() =>
		dateForYear(getParameter("start", getYear(getCurrentDate())), []),
	);
	const end = useMemo(() =>
		dateForYear(getParameter("end", getYear(getCurrentDate()) + 1), []),
	);
	const pages = useMemo(() => {
		const pages = [];
		for (const date of dateRange(start, end)) {
			if (isYearBoundary(date))
				pages.push(
					<Page id={`y${getYear(date)}`}>
						<YearPage {...{ date }} />
					</Page>,
				);
			if (isQuarterBoundary(date))
				pages.push(
					<Page id={`q${getQuarterOfYear(date)}`}>
						<QuarterPage {...{ date }} />
					</Page>,
				);
			if (isMonthBoundary(date))
				pages.push(
					<Page id={`m${getMonthOfYear(date)}`}>
						<MonthPage {...{ date }} />
					</Page>,
				);
			if (isWeekBoundary(date))
				pages.push(
					<Page id={`w${getWeekOfYear(date)}`}>
						<WeekPage {...{ date }} />
					</Page>,
				);
			pages.push(
				<Page id={`d${getDayOfYear(date)}`}>
					<DayPage {...{ date }} />
				</Page>,
			);
		}
		return pages;
	}, [start, end]);

	return (
		<>
			<Fonts />
			{pages}
		</>
	);
}
