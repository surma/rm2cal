import {
	monthNameFormatter,
	shortWeekdayFormatter,
} from "../../date-formatters";
import {
	dateRange,
	getDateForNumbers,
	getDateWithOffset as getDateWithOffset,
	getDayOfMonth,
	getDayOfWeek,
	getDayOfYear,
	getWeekOfYear,
} from "../../date-utils";
import { range } from "../../utils";

import * as classes from "./styles.module.css";

export default function ({ months, header = true }) {
	return (
		<table class={classes.cal}>
			{months.map((params, i) => (
				<MonthOverviewInternal {...{ ...params, header: header && i === 0 }} />
			))}
		</table>
	);
}

function MonthOverviewInternal({
	month,
	year,
	title,
	titleLink,
	header = true,
}) {
	const startDate = getDateForNumbers({ year, month, day: 1 });
	const startWeek = getWeekOfYear(startDate);
	const numLeads = getDayOfWeek(startDate);
	const cells = Array.from({ length: numLeads }, () => null);
	cells.push(
		...dateRange(
			getDateForNumbers({ year, month, day: 1 }),
			getDateForNumbers({ year, month: month + 1, day: 1 })
		)
	);
	const numWeeks = Math.ceil(cells.length / 7);

	return (
		<>
			{title && (
				<tr>
					<td></td>
					<td colspan={7} class={classes.title}>
						<a href={titleLink}>{title}</a>
					</td>
				</tr>
			)}
			{header && (
				<tr>
					<td></td>
					{range(7).map((d) => (
						<th>{shortWeekdayFormatter.format(cells[7 + d])}</th>
					))}
				</tr>
			)}
			{range(numWeeks).map((w) => {
				const days = cells.slice(w * 7, (w + 1) * 7);
				return (
					<tr>
						<th>
							<a href={`#w${startWeek + w}`}>Week {startWeek + w}</a>
						</th>
						{days.map((day) => (
							<td>
								{day && (
									<a href={`#d${getDayOfYear(day)}`}>{getDayOfMonth(day)}</a>
								)}
							</td>
						))}
					</tr>
				);
			})}
		</>
	);
}
