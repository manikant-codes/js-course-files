const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const select = document.getElementById("calculation");
const btn = document.getElementById("calculate");
const para = document.getElementById("output");

// function calculate() {
//   if (select.value === "add") {
//     let output = Number(input1.value) + Number(input2.value);
//     para.innerHTML = "Result: " + output;
//   } else if (select.value === "subtract") {
//     let output = Number(input1.value) - Number(input2.value);
//     para.innerHTML = "Result: " + output;
//   } else if (select.value === "multiply") {
//     let output = Number(input1.value) * Number(input2.value);
//     para.innerHTML = "Result: " + output;
//   } else {
//     let output = Number(input1.value) / Number(input2.value);
//     para.innerHTML = "Result: " + output;
//   }
// }

// function calculate() {
//   let output = 0;
//   const num1 = Number(input1.value);
//   const num2 = Number(input2.value);

//   if (select.value === "add") {
//     output = num1 + num2;
//   } else if (select.value === "subtract") {
//     output = num1 - num2;
//   } else if (select.value === "multiply") {
//     output = num1 * num2;
//   } else {
//     output = num1 / num2;
//   }
//   para.innerHTML = "Result: " + output;
// }

function calculate() {
  let output = 0;
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  const selection = select.value;

  switch (selection) {
    case "add":
      output = num1 + num2;
      break;
    case "subtract":
      output = num1 - num2;
      break;
    case "multiply":
      output = num1 * num2;
      break;
    case "divide":
      output = num1 / num2;
      break;
    default:
      output = "No valid calculation selected!";
  }

  para.innerHTML = "Result: " + output;
}
