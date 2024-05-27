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
