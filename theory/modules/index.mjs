const outputPara = document.getElementById("output");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const calcSelect = document.getElementById("calculation");
const calcBtn = document.getElementById("calcBtn");

import { add, subtract, multiply, divide } from "./calc.mjs";
import value from "./calc.mjs";

function calculate() {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  const selection = calcSelect.value;

  let result = "";

  if (selection === "add") {
    result = add(num1, num2);
  } else if (selection === "subtract") {
    result = subtract(num1, num2);
  } else if (selection === "multiply") {
    result = multiply(num1, num2);
  } else {
    result = divide(num1, num2);
  }

  outputPara.innerHTML = result;
}

calcBtn.onclick = calculate;
