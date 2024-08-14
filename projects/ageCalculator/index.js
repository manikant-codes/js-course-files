const dateInput = document.getElementById("dob");
const outputYears = document.getElementById("output-years");
const outputMonths = document.getElementById("output-months");
const outputWeeks = document.getElementById("output-weeks");
const outputDays = document.getElementById("output-days");
const outputHours = document.getElementById("output-hours");
const outputMinutes = document.getElementById("output-minutes");
const outputSeconds = document.getElementById("output-seconds");

const month30s = [3, 5, 8, 10];
const month31s = [0, 2, 4, 6, 7, 9, 11];

function getAge() {
  const today = new Date();
  const dob = new Date(dateInput.value);

  const todaysYear = today.getFullYear();
  const dobYear = dob.getFullYear();

  const todaysMonth = today.getMonth();
  const dobMonth = dob.getMonth();

  const todaysDate = today.getDate();
  const dobDate = dob.getDate();

  let diffYears = todaysYear - dobYear;
  let diffMonths = todaysMonth - dobMonth;
  let diffDates = todaysDate - dobDate;

  let years = diffYears;
  let months = diffMonths;
  let dates = diffDates;

  if (diffMonths < 0) {
    years--;
    months = 12 + diffMonths;
  }

  if (diffDates < 0) {
    months--;
    let currentMonthDays;
    if (month30s.includes(todaysMonth)) {
      currentMonthDays = 30;
    } else if (month31s.includes(todaysMonth)) {
      currentMonthDays = 31;
    } else {
      if (todaysYear % 4 === 0) {
        currentMonthDays = 29;
      } else {
        currentMonthDays = 28;
      }
    }

    dates = currentMonthDays + diffDates;
  }

  const totalMonths = years * 12 + months;

  const miliseconds = today.getTime() - dob.getTime();
  const seconds = Math.round(miliseconds / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  const weeks = Math.floor(days / 7);
  const extraWeekDays = days % 7;

  outputSeconds.innerText = seconds + " Seconds";
  outputMinutes.innerText = minutes + " Minutes";
  outputHours.innerText = hours + " Hours";
  outputDays.innerText = days + " Days";
  outputWeeks.innerText = weeks + " Weeks, " + extraWeekDays + " Days";
  outputMonths.innerText = `${totalMonths} Months, ${dates} Days`;
  outputYears.innerText = `${years} Years, ${months} Months, ${dates} Days`;
}
