function createCalendar(elem, year, month) {
  let monthNames = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];
  elem = document.querySelector(elem);

  monthName = monthNames[month - 1];

  let mon = month - 1;
  let d = new Date(year, mon);

  let table = `
<table>
<caption>${monthName}.${year}</caption>
<tr>
  <th>пн</th>
  <th>вт</th>
  <th>ср</th>
  <th>чт</th>
  <th>пт</th>
  <th>сб</th>
  <th>вс</th>
</tr>
<tr>
`;
  for (let i = 0; i < getDay(d); i++) {
    table += "<td></td>";
  }

  while (d.getMonth() == mon) {
    table += "<td>" + d.getDate() + "</td>";
    if (getDay(d) % 7 == 6) {
      table += "</tr><tr>";
    }
    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += "<td></td>";
    }
  }
  table += "</tr></table>";
  elem.innerHTML = table;
}

function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

function createCalendarYear(year) {
  let contain = document.querySelector(".container");
  for (let i = 1; i < 13; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "tab-" + `${i}`;
    contain.appendChild(newDiv);
    createCalendar(".tab-" + `${i}`, year, i);
  }
}

//createCalendarYear(2021);
let date = prompt(
  "Для отображения нужного вам календаря введите:  \n  -год (в формате 0000)  \n -или год  и месяц (в формате 2023, 12)"
);

if (!date) {
  alert(
    "Вы не ввели данные для формирования календаря. \nПопробуйте еще раз.\u{1F913}"
  );
} else if (date.length == 4) {
  createCalendarYear(+date);
} else if (date.length > 4) {
  if (date.includes(".")) {
    date = date.replace('.', ',');
    console.log(date);
  }
  if (date.includes(",")) {
    date = date.split(",");
    console.log(date);
    let elem = ".container";
    console.log(elem);
    let year = +date[0];
    let month;
    console.log(year);

    if ((date[1].length == 2) & (date[1][0] == "0")) {
      month = +date[1][1];
    } else {
      month = +date[1];
    }

    console.log(month);
    createCalendar(elem, year, month);
  } else {
    alert(
      "Вы ввели неверный формат даты! \nБудьте внимательны! \nПопробуйте еще раз."
    );
  }
}
