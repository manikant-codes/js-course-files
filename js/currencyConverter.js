function convertToINR() {
  const currencyInput = document.getElementById("currencyInput");
  const currencySelect = document.getElementById("currency");
  const convertedValuePara = document.getElementById("convertedValue");

  const currencyInputValue = currencyInput.value;
  const currency = currencySelect.value;

  let currencyInINR;

  if (currency === "USD") {
    currencyInINR = convert(currencyInputValue, 83.17);
  } else if (currency === "CAD") {
    currencyInINR = convert(currencyInputValue, 61.21);
  } else if (currency === "KWD") {
    currencyInINR = convert(currencyInputValue, 269.05);
  } else {
    currencyInINR = currencyInputValue;
  }

  convertedValuePara.innerHTML =
    "$" + currencyInputValue + " = " + "₹" + currencyInINR;
}

function convert(inputValue, conversionFactor) {
  return (inputValue * conversionFactor).toFixed(2);
}
