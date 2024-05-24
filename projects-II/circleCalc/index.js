const calcSelect = document.getElementById("calculation");
const outputPara = document.getElementById("formula");
const radiusInput = document.getElementById("radius");

function calculate() {
  const resultSpan = document.getElementById("result");
  const calculation = calcSelect.value;
  const radius = radiusInput.value;
  let result = 0;
  if (calculation === "area") {
    result = 3.14 * radius * radius;
  } else if (calculation === "diameter") {
    result = 2 * radius;
  } else {
    result = 2 * 3.14 * radius;
  }

  resultSpan.innerText = result;
}

function handleChange() {
  const calculation = calcSelect.value;
  if (calculation === "area") {
    outputPara.innerHTML = "A = <span id='result'>πr<sup>2</sup></span>";
  } else if (calculation === "diameter") {
    outputPara.innerHTML = "D = <span id='result'>2r</span>";
  } else {
    outputPara.innerHTML = "C = <span id='result'>2πr</span>";
  }
}
