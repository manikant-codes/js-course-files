const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const outputPara = document.getElementById("output");
const resetBtn = document.getElementById("resetBtn");

const data = undefined;

function divide() {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);

  try {
    // if (num2 === 0) {
    //   throw new Error("Can't divide by 0.");
    // }
    if (data) {
      undefined.map(() => {});
    }
    // const answer = num1 / num2;
    // outputPara.innerHTML = "answer: " + answer;
  } catch (error) {
    console.log("data", data);
    console.log("error", error);
    // console.log("error", error.message);
    // outputPara.innerHTML = "Error: " + error.message;
  } finally {
    resetBtn.style.display = "block";
  }
}

function reset() {
  num1Input.value = "";
  num2Input.value = "";
  outputPara.innerHTML = "";
  resetBtn.style.display = "none";
}
