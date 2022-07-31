import { monthNameFormatter } from "../../date-formatters";
import { getDateForNumbers } from "../../date-utils";
import { range } from "../../utils";

import * as classes from "./styles.module.css";

export default function () {
	return (
		<table class={classes.cal}>
			{range(4).map((q) => (
				<tr>
					<th>
						<a href={`#q${q + 1}`}>Q{q + 1}</a>
					</th>
					{range(3).map((m) => (
						<td>
							<a href={`#m${q * 3 + m}`}>
								{monthNameFormatter.format(
									getDateForNumbers({
										year: 2010,
										month: q * 3 + m + 1,
										day: 1,
									})
								)}
							</a>
						</td>
					))}
				</tr>
			))}
		</table>
	);
}
