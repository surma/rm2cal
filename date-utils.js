export function* dateRange(
	start,
	end,
	inc = (d) => d.setHours(d.getHours() + 24)
) {
	end = new Date(end);
	let current = new Date(start);
	while (current < end) {
		yield new Date(current);
		inc(current);
	}
}

/**
 * @param {Date} date
 */
export function getQuarter(date) {
	if (date.getMonth() + 1 >= 10) return 4;
	if (date.getMonth() + 1 >= 7) return 3;
	if (date.getMonth() + 1 >= 4) return 2;
	return 1;
}

/**
 * @param {Date} date
 */
export function isWeekBoundary(date) {
	return date.getDay() === 1;
}

/**
 * @param {Date} date
 */
export function isMonthBoundary(date) {
	return date.getDate() === 1;
}

/**
 * @param {Date} date
 */
export function isQuarterBoundary(date) {
	const yesterday = new Date(date);
	yesterday.setHours(-24);
	return getQuarter(date) != getQuarter(yesterday);
}

/**
 * @param {Date} date
 */
export function isYearBoundary(date) {
	return date.getDate() === 1 && date.getMonth() === 0;
}
