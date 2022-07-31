import {
	monthNameFormatter,
	titleFormatter as defaultTitleFormatter,
} from "../../date-formatters";
import {
	getMonthOfYear,
	getQuarterOfYear,
	getWeekOfYear,
	getYear,
} from "../../date-utils";
import * as classes from "./styles.module.css";

export default function Header({
	date,
	titleFormatter = (d) => defaultTitleFormatter.format(d),
	linkToYear = true,
	linkToQuarter = true,
	linkToMonth = true,
	linkToWeek = true,
}) {
	return (
		<>
			<header class={classes.header}>
				{linkToYear ? (
					<a href={`#y${getYear(date) + 1}`}>{getYear(date)}</a>
				) : null}
				{linkToQuarter ? (
					<a href={`#q${getQuarterOfYear(date)}`}>Q{getQuarterOfYear(date)}</a>
				) : null}
				{linkToMonth ? (
					<a href={`#m${getMonthOfYear(date)}`}>
						{monthNameFormatter.format(date)}
					</a>
				) : null}
				{linkToWeek ? (
					<a href={`#w${getWeekOfYear(date)}`}>Week {getWeekOfYear(date)}</a>
				) : null}
				<span class={classes.title}>{titleFormatter(date)}</span>
				<span class={classes.closebtn} />
			</header>
			<header class={[classes.header, classes.forwardlinks].join(" ")}>
				{linkToQuarter && getQuarterOfYear(date) < 4 ? (
					<a href={`#q${getQuarterOfYear(date) + 1}`}>Next Quarter</a>
				) : null}
				{linkToMonth && getMonthOfYear(date) < 12 ? (
					<a href={`#m${getMonthOfYear(date) + 1}`}>Next Month</a>
				) : null}
				{linkToWeek ? (
					<a href={`#w${getWeekOfYear(date) + 1}`}>Next Week</a>
				) : null}
			</header>
		</>
	);
}
