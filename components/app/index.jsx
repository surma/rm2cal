import { useMemo } from "preact/hooks";

import {
	dateRange,
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

function dateForYear(year) {
	return new Date(`${year}-01-01`);
}

export default function App() {
	const start = useMemo(() =>
		dateForYear(getParameter("start", new Date().getFullYear()), [])
	);
	const end = useMemo(() =>
		dateForYear(getParameter("end", new Date().getFullYear() + 1), [])
	);
	const pages = useMemo(() => {
		const pages = [];
		for (const date of dateRange(start, end)) {
			if (isYearBoundary(date))
				pages.push(
					<Page>
						<YearPage {...{ date }} />
					</Page>
				);
			if (isQuarterBoundary(date)) pages.push(<Page>NEW QUARTER</Page>);
			if (isMonthBoundary(date)) pages.push(<Page>NEW MONTH</Page>);
			if (isWeekBoundary(date)) pages.push(<Page>NEW WEEK</Page>);
			pages.push(<Page>{date.toString()}</Page>);
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
