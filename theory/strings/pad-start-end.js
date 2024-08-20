const number = "7894561230";

// const last3Digits = number.substring(7);
// const last3Digits = number.slice(7);

const last3Digits = number.slice(-3);
const first3Digits = number.slice(0, 3);
// "230"

// const paddedStr = last3Digits.padStart(10, "*");
const paddedStr = first3Digits.padEnd(10, "*");

console.log(paddedStr);
