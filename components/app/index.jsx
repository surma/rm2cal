import { useMemo } from "preact/hooks";

import { dateRange } from "../../date-utils.js";
import Page from "../page/index.jsx";

import * as classes from "./styles.module.css";

function dateForYear(year) {
  return new Date(`${year}-01-01`);
}

export default function App() {
  const params = useMemo(() => new URLSearchParams(location.search), []);
  const start = params.has("start")
    ? dateForYear(params.get("start"))
    : dateForYear(new Date().getFullYear());
  const end = params.has("end")
    ? dateForYear(params.get("end"))
    : dateForYear(new Date().getFullYear() + 1);
  const pages = useMemo(() =>
    Array.from(dateRange(start, end)).map(
      (date) => <Page>{date.toString()}</Page>,
      [start, end]
    )
  );

  return <>{pages}</>;
}
