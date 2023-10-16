function convertToINR() {
  const currencyInput = document.getElementById("currencyInput");
  const currencySelect = document.getElementById("currency");
  const outputPara = document.getElementById("output");

  const currencyInputValue = currencyInput.value;
  const currency = currencySelect.value;

  if (currency === "USD") {
    currencyInINR = convert(currencyInputValue, 83.17);
  } else if (currency === "CAD") {
    currencyInINR = convert(currencyInputValue, 61.21);
  } else if (currency === "KWD") {
    currencyInINR = convert(currencyInputValue, 269.05);
  } else {
    currencyInINR = currencyInputValue;
  }

  outputPara.style.display = "block";
  outputPara.innerHTML = "$" + currencyInputValue + " = " + "₹" + currencyInINR;
}

function convert(inputValue, conversionFactor) {
  return (inputValue * conversionFactor).toFixed(2);
}
