const monthsOf31 = [0, 2, 4, 6, 7, 9, 11];
const monthsOf30 = [3, 5, 8, 10];

function getTotalMonths(years, months) {
  return years * 12 + months;
}

function getTotalDays(dobYear, currentYear, months, days, isLeapYear) {
  let daysFromMonths = 0;
  let daysFromYears = 0;

  for (let i = 0; i < months; i++) {
    if (monthsOf31.includes(i)) {
      daysFromMonths += 31;
    } else if (monthsOf31.includes(i)) {
      daysFromMonths += 30;
    } else {
      if (isLeapYear) {
        daysFromMonths += 29;
      } else {
        daysFromMonths += 28;
      }
    }
  }

  for (let i = dobYear + 1; i <= currentYear; i++) {
    if (i % 4 === 0) {
      daysFromYears += 366;
    } else {
      daysFromYears += 365;
    }
  }

  return days + daysFromMonths + daysFromYears;
}

function getAge() {
  const inputDOB = document.getElementById("dob");
  const outputPara = document.getElementById("output");

  const dob = new Date(inputDOB.value);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - dob.getFullYear();
  let months = currentDate.getMonth() - dob.getMonth();
  let days = currentDate.getDate() - dob.getDate();

  const isLeapYear = currentDate.getFullYear() % 4 === 0;

  if (months < 0) {
    years--;
    months = 12 + months;
  }

  if (days < 0) {
    months--;
    if (monthsOf31.includes(dob.getMonth())) {
      days = 31 + days;
    } else if (monthsOf30.includes(dob.getMonth())) {
      days = 30 + days;
    } else {
      if (isLeapYear) {
        days = 29 + days;
      } else {
        days = 28 + days;
      }
    }
  }

  let totalMonths = getTotalMonths(years, months);
  let totalDays = getTotalDays(
    dob.getFullYear(),
    currentDate.getFullYear(),
    months,
    days,
    isLeapYear
  );
  let totalWeeks = Math.floor(totalDays / 7);
  let totalHours = totalDays * 24;
  let totalMinutes = totalHours * 60;
  let totalSeconds = totalMinutes * 60;

  outputPara.innerHTML = `
  years ${years},
  months ${months},
  days ${days} \n
  <br/>
  OR
  <br/>
  months ${totalMonths} days ${days}
  <br/>
  OR
  <br/>
  weeks ${totalWeeks} days ${currentDate.getDay() + 1}
  <br/>
  OR
  <br/>
  days ${totalDays}
  <br/>
  OR
  <br/>
  hours ${totalHours}
  <br/>
  OR
  <br/>
  minutes ${totalMinutes}
  <br/>
  OR
  <br/>
  seconds ${totalSeconds}
  `;
}
