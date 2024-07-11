const amountInput = document.getElementById("amount");
const currencySelect = document.getElementById("currency");
const outputPara = document.getElementById("output");

function convert() {
  const amount = amountInput.value;
  const currency = currencySelect.value;

  if (currency === "USD") {
    const result = amount * 83;
    outputPara.innerText = result;
  } else if (currency === "CAD") {
    const result = amount * 61;
    outputPara.innerText = result;
  } else {
    const result = amount * 273;
    outputPara.innerText = result;
  }
}
