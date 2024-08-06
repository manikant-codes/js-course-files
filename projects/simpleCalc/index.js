let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let outputPara = document.getElementById("output");

function add() {
  let num1 = Number(num1Input.value);
  let num2 = Number(num2Input.value);

  outputPara.innerText = num1 + num2;
}

function subtract() {
  let num1 = num1Input.value;
  let num2 = num2Input.value;

  outputPara.innerText = num1 - num2;
}

function multiply() {
  let num1 = num1Input.value;
  let num2 = num2Input.value;

  outputPara.innerText = num1 * num2;
}

function divide() {
  let num1 = num1Input.value;
  let num2 = num2Input.value;

  outputPara.innerText = num1 / num2;
}
