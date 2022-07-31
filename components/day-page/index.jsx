import { getYear } from "../../date-utils";
import Header from "../header";

export default function ({ date }) {
	return (
		<>
			<Header {...{ date }} />
		</>
	);
}
