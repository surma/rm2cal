export function range(p) {
	let start = 0;
	let end = p;
	if (typeof p === "object") {
		start = p?.start ?? 0;
		end = p.end;
	}
	return Array.from({ length: end - start }, (_, i) => i + start);
}
