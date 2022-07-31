import { getParameter } from "./params";

const locale = getParameter("locale", "en-GB");

export const titleFormatter = new Intl.DateTimeFormat(locale, {
	dateStyle: "full",
});
