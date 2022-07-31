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

export function getCurrentDate() {
	return new Date();
}

export function getDateForNumbers({ year, month, day }) {
	return new Date(`${year}-${month}-${day}`);
}

export function getDateWithOffset(day, dayOffset) {
	const copy = new Date(day);
	copy.setDate(copy.getDate() + dayOffset);
	return copy;
}

/**
 * @param {Date} date
 */
export function getYear(date) {
	return date.getFullYear();
}

/**
 * @param {Date} date
 * @returns Index of the day of the week (0 = monday, ..., 6 = sunday)
 */
export function getDayOfWeek(date) {
	return (date.getDay() + 6) % 7;
}

/**
 * @param {Date} date
 */
export function getDayOfMonth(date) {
	return date.getDate();
}

/**
 * @param {Date} date
 */
export function getQuarterOfYear(date) {
	if (date.getMonth() + 1 >= 10) return 4;
	if (date.getMonth() + 1 >= 7) return 3;
	if (date.getMonth() + 1 >= 4) return 2;
	return 1;
}

/**
 * @param {Date} date
 */
export function getDayOfYear(date) {
	const startOfYear = getDateForNumbers({
		year: getYear(date),
		month: 1,
		day: 1,
	});
	return Math.ceil((date - startOfYear) / (24 * 60 * 60 * 1000)) + 1;
}

/**
 * @param {Date} date
 */
export function getWeekOfYear(date) {
	return Math.floor(getDayOfYear(date) / 7) + 1;
}

/**
 * @param {Date} date
 */
export function getMonthOfYear(date) {
	return date.getMonth() + 1;
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
	return getDayOfMonth(date) === 1;
}

/**
 * @param {Date} date
 */
export function isQuarterBoundary(date) {
	const yesterday = new Date(date);
	yesterday.setHours(-24);
	return getQuarterOfYear(date) != getQuarterOfYear(yesterday);
}

/**
 * @param {Date} date
 */
export function isYearBoundary(date) {
	return date.getDate() === 1 && date.getMonth() === 0;
}
