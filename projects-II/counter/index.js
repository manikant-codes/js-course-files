const outputPara = document.getElementById("output-para");

let count = 0;

outputPara.innerText = count;

function decrease() {
  count--;
  outputPara.innerText = count;
}

function increase() {
  count++;
  outputPara.innerText = count;
}
