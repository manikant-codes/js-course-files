const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operationSelect = document.getElementById("operation");
const outputPara = document.getElementById("output");
const calculateBtn = document.getElementById("calculate");

import { add, subtract, multiply } from "./calc.mjs";
import IMP_CONSTANT from "./calc.mjs";

function calculate() {
  switch (operationSelect.value) {
    case "add": {
      const result = add(num1Input.value, num2Input.value);
      outputPara.innerHTML = result;
      break;
    }
    case "subtract": {
      const result = subtract(num1Input.value, num2Input.value);
      outputPara.innerHTML = result;
      break;
    }
    case "multiply": {
      const result = multiply(num1Input.value, num2Input.value);
      outputPara.innerHTML = result;
      break;
    }
    case "divide": {
      const result = divide(num1Input.value, num2Input.value);
      outputPara.innerHTML = result;
      break;
    }
    default:
      alert("Invalid operation!");
  }
}

calculateBtn.addEventListener("click", calculate);
