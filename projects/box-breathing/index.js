let isExhaling = false;
let holdTime = 0;
let isHolding = false;

const CIRCLE_MIN_SIZE = 103;
const CIRCLE_MAX_SIZE = 287;
const MAX_HOLD_TIME = 4;

function initHold() {
  isHolding = true;
  holdTime = MAX_HOLD_TIME;
  instructionText.innerHTML = "Hold";
}

function resizeCircle(resize, innerCircle) {
  innerCircle.style.height = resize() + "px";
  innerCircle.style.width = resize() + "px";
}

function inhale(innerCircle, height) {
  if (height >= CIRCLE_MAX_SIZE) {
    initHold();
  } else {
    resizeCircle(function () {
      return height + 50;
    }, innerCircle);
  }
}

function hold(instructionText, height, innerCircle) {
  holdTime--;
  if (holdTime) {
    instructionText.innerHTML = holdTime;
  } else {
    holdTime = 0;
    isHolding = false;
    if (height >= CIRCLE_MAX_SIZE) {
      instructionText.innerHTML = "Exhale";
      isExhaling = true;
      exhale(innerCircle, height);
    } else {
      instructionText.innerHTML = "Inhale";
      isExhaling = false;
      inhale(innerCircle, height);
    }
  }
}

function exhale(innerCircle, height) {
  if (height <= CIRCLE_MIN_SIZE) {
    initHold();
  } else {
    resizeCircle(function () {
      return height - 50;
    }, innerCircle);
  }
}

function boxBreathing() {
  const innerCircle = document.getElementById("innerCircle");
  let height = Number(getComputedStyle(innerCircle).height.split("px")[0]);
  const instructionText = document.getElementById("instructionText");

  if (isExhaling && !isHolding) {
    exhale(innerCircle, height);
  } else if (isHolding) {
    hold(instructionText, height, innerCircle);
  } else {
    inhale(innerCircle, height);
  }
}

setInterval(boxBreathing, 1000);
