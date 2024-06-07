const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const output = document.getElementById("output");

function add() {
  const num1 = input1.value;
  const num2 = input2.value;

  const result = Number(num1) + Number(num2);
  output.innerText = result;
}

function subtract() {
  const num1 = input1.value;
  const num2 = input2.value;
  const result = Number(num1) - Number(num2);
  output.innerText = result;
}
