import { getParameter } from "./params";

const locale = getParameter("locale", "en-GB");

export const monthNameFormatter = new Intl.DateTimeFormat(locale, {
	month: "long",
});

export const longWeekdayFormatter = new Intl.DateTimeFormat(locale, {
	weekday: "long",
});

export const shortWeekdayFormatter = new Intl.DateTimeFormat(locale, {
	weekday: "short",
});

export const titleFormatter = new Intl.DateTimeFormat(locale, {
	dateStyle: "full",
});
