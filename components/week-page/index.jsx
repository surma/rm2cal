import { longWeekdayFormatter, monthFormatter } from "../../date-formatters";
import {
	getDateWithOffset,
	getDayOfYear,
	getWeekOfYear,
} from "../../date-utils";
import { range } from "../../utils";
import Header from "../header";

import * as classes from "./styles.module.css";

export default function ({ date }) {
	return (
		<>
			<Header
				{...{ date }}
				titleFormatter={(d) => `Week ${getWeekOfYear(d)}`}
				linkToWeek={false}
			/>
			<ul class={classes.list}>
				{range(7)
					.map((offset) => getDateWithOffset(date, offset))
					.map((date) => (
						<li>
							<a href={`#d${getDayOfYear(date)}`}>
								<strong>{longWeekdayFormatter.format(date)}</strong>,{" "}
								{monthFormatter.format(date)} {date.getDate()}
							</a>
						</li>
					))}
			</ul>
		</>
	);
}
