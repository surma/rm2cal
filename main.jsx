import { render } from "preact";
import App from "./components/app/index.jsx";

import { dateRange, getQuarterOfYear } from "./date-utils.js";

const { main } = document.all;

render(<App />, main);
