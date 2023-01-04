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
 * Fuck ISO week numbering tbqh. Look at this table: https://en.wikipedia.org/wiki/ISO_week_date#First_week
 * Because I seriously can't be bothered to implement that kind of logic,
 * I stole code from SO: https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
 * @param {Date} date
 */
export function getWeekOfYear(d) {
	// Copy date so don't modify original
	d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
	// Set to nearest Thursday: current date + 4 - current day number
	// Make Sunday's day number 7
	d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
	// Get first day of year
	var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
	// Calculate full weeks to nearest Thursday
	var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
	// Return array of year and week number
	return weekNo;
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
