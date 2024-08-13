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

  // Years
  // let years = todaysYear - dobYear;
  // let months = todaysMonth - dobMonth;
  // let days = todaysDate - dobDate;

  // console.log(todaysDate);
  // console.log(dobDate);
  // console.log(days);

  // if (days < 0) {
  //   months++;
  // }

  // if (months < 0) {
  //   years--;
  // }

  // months = Math.abs(months);

  // let totalDaysInMonth = 0;

  // if (month30s.includes(todaysMonth)) {
  //   totalDaysInMonth = 30;
  // } else if (month31s.includes(todaysMonth)) {
  //   totalDaysInMonth = 31;
  // } else {
  //   if (todaysYear % 4 === 0) {
  //     totalDaysInMonth = 29;
  //   } else {
  //     totalDaysInMonth = 28;
  //   }
  // }

  // const outputYear = `${years} Years, ${months} Months, ${days} Days`;
  // output-years.innerHTML = outputYear;

  // Get time difference in miliseconds.
  const miliseconds = today.getTime() - dob.getTime();
  const seconds = Math.round(miliseconds / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);

  outputHours.innerText = hours + " Hours";
  outputSeconds.innerText = seconds + " Seconds";
  outputMinutes.innerText = minutes + " Minutes";
  outputDays.innerText = days + " Days";
}
