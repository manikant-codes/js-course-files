const calculationSelect = document.getElementById("calculation");
const outputPara = document.getElementById("formula");
const lengthInput = document.getElementById("length");
const widthInput = document.getElementById("width");

function handleSelect() {
  const calculation = calculationSelect.value;
  if (calculation === "diagonal") {
    outputPara.innerHTML =
      "D = <span id='result'>&radic;w<sup>2</sup>+l<sup>2</sup></span>";
  } else if (calculation === "area") {
    outputPara.innerHTML = "A = <span id='result'>wl</span>";
  } else {
    outputPara.innerHTML = "A = <span id='result'>2(l+w)</span>";
  }
}

function calculate() {
  const calculation = calculationSelect.value;
  const length = Number(lengthInput.value);
  const width = Number(widthInput.value);
  // const length = lengthInput.value;
  // const width = widthInput.value;
  const output = document.getElementById("result");

  let result = 0;

  if (calculation === "area") {
    result = length * width;
  } else if (calculation === "perimeter") {
    result = 2 * (length + width);
  } else {
    result = (width ** 2 + length ** 2) ** 0.5;
    result = result.toFixed(2);
  }

  output.innerText = result;
}
