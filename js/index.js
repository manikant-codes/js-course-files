function convertToINR() {
  const currencyInput = document.getElementById("currencyInput");
  const currencySelect = document.getElementById("currency");
  const convertedValuePara = document.getElementById("convertedValue");

  const currency = currencySelect.value;
  const currencyInputValue = currencyInput.value;

  let currencyInINR;

  if (currency === "USD") {
    currencyInINR = (currencyInputValue * 83.17).toFixed(2);
  } else if (currency === "CAD") {
    currencyInINR = (currencyInputValue * 61.21).toFixed(2);
  } else {
    currencyInINR = currencyInputValue;
  }

  convertedValuePara.innerHTML =
    "$" + currencyInputValue + " = " + "Rs." + currencyInINR;
}
