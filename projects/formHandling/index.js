const outputPara = document.getElementById("output");
const errorPara = document.getElementById("error");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");

function divide() {
  try {
    errorPara.style.display = "none";
    const a = Number(num1Input.value);
    const b = Number(num2Input.value);

    if (b === 0) {
      throw new Error("Can't divide by zero!");
    }

    const result = a / b;

    outputPara.innerHTML = result;
  } catch (error) {
    // alert(error.message);
    errorPara.innerHTML = error.message;
    errorPara.style.display = "block";
  } finally {
    console.log("Calculation completed!");
  }
}
