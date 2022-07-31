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

export function getQuarter(date) {
  if (date.getMonth() + 1 >= 10) return 4;
  if (date.getMonth() + 1 >= 7) return 3;
  if (date.getMonth() + 1 >= 4) return 2;
  return 1;
}
