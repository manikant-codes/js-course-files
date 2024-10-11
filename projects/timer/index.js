const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

let hours = 0;
let minutes = 0;
let seconds = 0;

let intervalId;

function play() {
  intervalId = setInterval(function () {
    if (seconds < 59) {
      seconds++;
      secondsSpan.innerText = seconds.toString().padStart(2, "0");
    } else {
      seconds = 0;
      secondsSpan.innerText = seconds.toString().padStart(2, "0");
      if (minutes < 59) {
        minutes++;
        minutesSpan.innerText = minutes.toString().padStart(2, "0");
      } else {
        minutes = 0;
        minutesSpan.innerText = minutes.toString().padStart(2, "0");
        hours++;
        hoursSpan.innerText = hours.toString().padStart(2, "0");
      }
    }
  }, 1000); // 1s = 1000ms
}

function pause() {
  clearInterval(intervalId);
}

function stop() {
  clearInterval(intervalId);

  hours = 0;
  minutes = 0;
  seconds = 0;

  secondsSpan.innerText = seconds.toString().padStart(2, "0");
  minutesSpan.innerText = minutes.toString().padStart(2, "0");
  hoursSpan.innerText = hours.toString().padStart(2, "0");
}
