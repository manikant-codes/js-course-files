const amountInput = document.getElementById("amount");
const outputPara = document.getElementById("output");

function getBill() {
  const amount = amountInput.value;

  if (amount >= 4000) {
    const discountedAmount = amount - (amount * 20) / 100;
    outputPara.innerText = "Amount payable: " + discountedAmount;
  } else if (amount >= 1000) {
    const discountedAmount = amount - (amount * 10) / 100;
    outputPara.innerText = "Amount payable: " + discountedAmount;
  } else {
    outputPara.innerText = "Amount payable: " + amount;
  }
}
