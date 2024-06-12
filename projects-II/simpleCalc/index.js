const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const selectCalculation = document.getElementById("calculation");
const output = document.getElementById("output");

function calculate() {
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);

  const selection = selectCalculation.value;

  if (selection == "add") {
    const result = num1 + num2;
    output.innerText = result;
  } else if (selection == "subtract") {
    const result = num1 - num2;
    output.innerText = result;
  } else if (selection == "multiply") {
    const result = num1 * num2;
    output.innerText = result;
  } else {
    const result = num1 / num2;
    output.innerText = result;
  }
}

function backspace() {
  input1.value = input1.value.slice(0, input1.value.length - 1);
}

// window.addEventListener("keydown", backspace);

// function add() {
//   const num1 = input1.value;
//   const num2 = input2.value;

//   const result = Number(num1) + Number(num2);
//   output.innerText = result;
// }

// function subtract() {
//   const num1 = input1.value;
//   const num2 = input2.value;
//   const result = Number(num1) - Number(num2);
//   output.innerText = result;
// }
