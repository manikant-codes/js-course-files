const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

setInterval(function () {
  const today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  secondsSpan.innerText = seconds.toString().padStart(2, "0");
  minutesSpan.innerText = minutes.toString().padStart(2, "0");
  hoursSpan.innerText = hours.toString().padStart(2, "0");
}, 1000);
