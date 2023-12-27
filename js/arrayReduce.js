const arr = [45, 4, 9, 16, 25];

// let jamaKarneWala = 58;

// for (let i = 0; i < arr.length; i++) {
//   jamaKarneWala = jamaKarneWala + arr[i];
// }

// console.log("sum", jamaKarneWala);

// function gharKaReduce(kaam, pehliValue) {
//   let jamaKarNeWala = pehliValue;
//   for (let i = 0; i < arr.length; i++) {
//     jamaKarNeWala = kaam(jamaKarNeWala, arr[i], i, arr);
//   }
//   return jamaKarNeWala;
// }

// const sum = gharKaReduce(function (jamaKarNeWala, value, index, array) {
//   return jamaKarNeWala + value;
// }, 0);

// console.log("sum", sum);

// const product = kuchbhi(function (result, value, index, array) {
//   return result * value;
// }, 1);

// console.log("product", product);

const sum = arr.reduce(function (acc, value, index, array) {
  return acc + value;
}, 0);

const product = arr.reduceRight(function (acc, value, index, array) {
  return acc * value;
}, 1);

console.log("sum", sum);
console.log("product", product);
