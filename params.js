const params = new URLSearchParams(location.search);
export function getParameter(name, deflt) {
	if (!params.has(name)) return deflt;
	return params.get(name);
}
