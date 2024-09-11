const outputPara = document.getElementById("output");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const num1Err = document.getElementById("num1-err");
const num2Err = document.getElementById("num2-err");

function hideErrors() {
  num1Err.style.display = "none";
  num2Err.style.display = "none";
  num1Err.innerHTML = "";
  num2Err.innerHTML = "";
}

function showError(err) {
  if (err.message === "1") {
    num1Err.style.display = "block";
    num1Err.innerHTML = "Can't divide 0.";
  } else if (err.message === "2") {
    num2Err.style.display = "block";
    num2Err.innerHTML = "Can't divide by 0.";
  } else {
    alert(err.message);
  }
}

function divide() {
  hideErrors();
  try {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);

    if (num1 === 0) {
      throw new Error("1");
    }

    if (num2 === 0) {
      throw new Error("2");
    }

    const result = (num1 / num2).toFixed(2);
    outputPara.innerHTML = "Result: " + result;
  } catch (err) {
    showError(err);
  }
}
