// 8956231245

const phone = "8956231245";
const last4Digits = phone.slice(-4);
const first4Digits = phone.slice(0, 4);

// const paddedStr = last4Digits.padStart(10, "ijklmnop");
// const paddedStr = first4Digits.padEnd(10, "x");

for (let i = 1; i <= 100; i++) {
  console.log(i.toString().padStart(3, "0"));
}

console.log("paddedStr", paddedStr);
