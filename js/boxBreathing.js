let isExhaling = false;
// let holdSeconds = 0;

function inhale(innerCircle, height, instructionText) {
  if (height >= 287) {
    // holdSeconds = 4;
    isExhaling = true;
    instructionText.innerHTML = "Exhale";
    return;
  }
  innerCircle.style.height = height + 50 + "px";
  innerCircle.style.width = height + 50 + "px";
}

// function hold(instructionText) {
//   if (holdSeconds > 0) {
//   }
//   instructionText.innerHTML = "Hold";
// }

function exhale(innerCircle, height, instructionText) {
  if (height <= 103) {
    // holdSeconds = 4;
    isExhaling = false;
    instructionText.innerHTML = "Inhale";
    return;
  }
  innerCircle.style.height = height - 50 + "px";
  innerCircle.style.width = height - 50 + "px";
}

function boxBreathing() {
  const innerCircle = document.getElementById("innerCircle");
  let height = Number(getComputedStyle(innerCircle).height.split("px")[0]);
  const instructionText = document.getElementById("instructionText");

  console.log("boxBreathing");

  if (isExhaling) {
    exhale(innerCircle, height, instructionText);
  } else {
    inhale(innerCircle, height, instructionText);
  }
}

const temp = setInterval(boxBreathing, 1000);
// clearInterval(temp);
