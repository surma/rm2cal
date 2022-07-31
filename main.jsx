import { render } from "preact";
import App from "./components/app/index.jsx";

import { dateRange, getQuarter } from "./date-utils.js";

const { main } = document.all;

render(<App />, main);

/*

console.log(Array.from(dateRange("2022-01-01", "2023-01-01")));

const params = new URLSearchParams(location.search);
const year = params.get("year") ?? new Date().getFullYear();

let markup = "";
const monthF = new Intl.DateTimeFormat("en-US", { month: "long" });
const fullDateF = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "long",
  weekday: "long",
});

const date = new Date(Date.parse(`01 Jan ${year}`));
let d = date.getDay() - 1;
let lastY, lastQ, lastM, lastW;
do {
  const y = date.getFullYear();
  const q = getQuarter(date);
  const m = date.getMonth() + 1;
  const w = Math.floor(d / 7) + 1;
  const fullDate = fullDateF.format(date);
  const monthName = monthF.format(date);
  if (y !== lastY) {
    main.append(
      template({
        date,
        y,
        title: `Year ${y}`,
        currentPrefix: "y",
        currentIdx: y,
        classes: ["year"],
      })
    );
  }
  if (q !== lastQ) {
    main.append(
      template({
        date,
        q,
        y,
        title: `${q}. Quarter`,
        monthName,
        currentPrefix: "q",
        currentIdx: q,
        next: {
          "-": q > 1 ? `q${q - 1}` : null,
          "+": q < 4 ? `q${q + 1}` : null,
        },
        classes: ["quarter"],
      })
    );
  }
  if (m !== lastM) {
    const container = template({
      date,
      q,
      y,
      m,
      title: monthName,
      currentPrefix: "m",
      currentIdx: m,
      next: {
        "-": m > 1 ? `m${m - 1}` : null,
        "+": m < 12 ? `m${m + 1}` : null,
      },
      classes: ["month"],
    });
    let subdate = new Date(date);
    let i = 0;
    const calItems = [];
    calItems.push(
      ...["M", "T", "W", "T", "F", "S", "S"].map(
        (d) => `<li class="header">${d}</li>`
      )
    );
    for (let i = 0; i < subdate.getDay() + (6 % 7); i++) {
      calItems.push(`<li></li>`);
    }
    do {
      console.log(subdate.toString());
      calItems.push(`<li><a href="#d${d + i}">${subdate.getDate()}</a></li>`);
      subdate.setHours(24);
      i += 1;
    } while (subdate.getMonth() + 1 === m);
    container.innerHTML += `<ul class="calendar">${calItems.join("")}</ul>`;
    main.append(container);
  }
  if (w !== lastW) {
    main.append(
      template({
        date,
        q,
        y,
        m,
        title: `${w}. Week`,
        monthName,
        currentPrefix: "w",
        currentIdx: w,
        next: {
          "-": w > 1 ? `w${w - 1}` : null,
          "+": w < 52 ? `w${w + 1}` : null,
        },
        classes: ["week"],
      })
    );
  }
  main.append(
    template({
      date,
      d,
      q,
      y,
      m,
      w,
      title: fullDate,
      monthName,
      currentPrefix: "d",
      currentIdx: d,
      next: {
        "-": `d${d - 1}`,
        "+": `d${d + 1}`,
        "+W": `w${w + 1}`,
        "+M": `m${m + 1}`,
        "+Q": `q${q + 1}`,
      },
      classes: ["day"],
    })
  );

  date.setHours(24);
  d += 1;
  lastW = w;
  lastQ = q;
  lastM = m;
  lastY = y;
} while (!(date.getDate() == 1 && date.getMonth() == 0));

function template({
  id,
  date,
  d,
  q,
  y,
  m,
  w,
  title,
  monthName,
  currentPrefix,
  currentIdx,
  next = {},
  classes = [],
}) {
  const div = document.createElement("div");
  div.classList.add("page", ...classes);
  div.id = `${currentPrefix}${currentIdx}`;
  div.innerHTML = `<header>
				<a href="#y${y}">${y}</a>
				${q ? `<a href="#q${q}">Q${q}</a>` : ``}
				${m && monthName ? `<a href="#m${m}">${monthName}</a>` : ``}
				${w ? `<a href="#w${w}">W${w}</a>` : ``}
				<a href="#${currentPrefix}${currentIdx}" class="title">${title}</a>
				${Object.entries(next)
          .map(([k, v]) => `<a href="#${v}">${k}</a>`)
          .join("")}
				<div class="closebtn"></div>
			</header>`;
  return div;
}

*/
