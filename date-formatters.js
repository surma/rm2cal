import { getParameter } from "./params";

const locale = getParameter("locale", "en-GB");

export const monthNameFormatter = new Intl.DateTimeFormat(locale, {
	month: "long",
});

export const titleFormatter = new Intl.DateTimeFormat(locale, {
	dateStyle: "full",
});
