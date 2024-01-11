let isExhaling = false;
let holdTime = 0;
let isHolding = false;

function initHold() {
  isHolding = true;
  holdTime = 4;
  instructionText.innerHTML = "Hold";
}

function resizeCircle(resize, innerCircle) {
  innerCircle.style.height = resize() + "px";
  innerCircle.style.width = resize() + "px";
}

function inhale(innerCircle, height) {
  if (height >= 287) {
    initHold();
  } else {
    resizeCircle(function () {
      return height + 50;
    }, innerCircle);
    // innerCircle.style.height = height + 50 + "px";
    // innerCircle.style.width = height + 50 + "px";
  }
}

function hold(instructionText, height) {
  holdTime--;
  if (holdTime) {
    instructionText.innerHTML = holdTime;
  } else {
    holdTime = 0;
    isHolding = false;
    if (height >= 287) {
      instructionText.innerHTML = "Exhale";
      isExhaling = true;
    } else {
      instructionText.innerHTML = "Inhale";
      isExhaling = false;
    }
  }
}

function exhale(innerCircle, height) {
  if (height <= 103) {
    initHold();
  } else {
    resizeCircle(function () {
      return height - 50;
    }, innerCircle);
    // innerCircle.style.height = height - 50 + "px";
    // innerCircle.style.width = height - 50 + "px";
  }
}

function boxBreathing() {
  const innerCircle = document.getElementById("innerCircle");
  let height = Number(getComputedStyle(innerCircle).height.split("px")[0]);
  const instructionText = document.getElementById("instructionText");

  if (isExhaling && !isHolding) {
    exhale(innerCircle, height);
  } else if (isHolding) {
    hold(instructionText, height);
  } else {
    inhale(innerCircle, height);
  }
}

setInterval(boxBreathing, 1000);
