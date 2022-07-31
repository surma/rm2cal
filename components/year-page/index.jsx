import Header from "../header";

export default function ({ date }) {
	return (
		<>
			<Header {...{ date }} />
			<pre>{JSON.stringify(date, null, " ")}</pre>
		</>
	);
}
