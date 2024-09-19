// 1. Write a JavaScript function to check whether an `input` is an array or not.

// function isArray(input) {
//   return Array.isArray(input);
// }

// console.log(isArray([]));
// console.log(isArray({}));

// 2. Write a JavaScript function to clone an array.

// function cloneArray(input) {
//   if (!Array.isArray(input)) {
//     console.log("Please provide an array!");
//     return;
//   }
//   // return new Array(input);
//   return [...input];
// }
// const arr = [1, 2, 3];
// const newArr = cloneArray(arr);
// newArr[0] = 3;
// console.log(arr, newArr);

// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

// function getFirstNElement(array, n) {
//   if (!Array.isArray(array)) {
//     console.log("Please provide an array!");
//     return;
//   }
//   if (!n) {
//     return array[0];
//   }
//   return array.slice(0, Math.abs(n));
// }

// console.log(getFirstNElement([1, 2, 3], 5));

// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

// function getFirstNElement(array, n) {
//   if (!Array.isArray(array)) {
//     console.log("Please provide an array!");
//     return;
//   }
//   if (!n) {
//     return array[array.length - 1];
//   }
//   return array.slice(-Math.abs(n));
// }

// console.log(getFirstNElement([1, 2, 3]));

// 5. Write a simple JavaScript program to join all elements of the following array into a string.

// const arr = ["Red", "Green", "White", "Black"];

// function arrayToString(array, seperator = ",") {
//   if (!Array.isArray(array)) {
//     console.log("Please provide an array!");
//     return;
//   }
//   return array.join(seperator);
// }

// console.log(arrayToString(arr, " + "));

// 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

// function getDashedStr(number) {
//   const numberStr = number.toString();

//   let dashedStr = "";

//   for (let i = 0; i < numberStr.length; i++) {
//     if (numberStr[i] % 2 === 0 && numberStr[i + 1] % 2 === 0) {
//       dashedStr += numberStr[i] + "-";
//     } else {
//       dashedStr += numberStr[i];
//     }
//   }

//   return dashedStr;
// }

// console.log(getDashedStr(205468));

// 7. Write a JavaScript program to sort the items of an array.

// function getSortedArr(array) {
//   if (!Array.isArray(array)) {
//     console.log("Please provide an array!");
//     return;
//   }
//   return array.sort((a, b) => {
//     return b - a;
//   });
// }

// console.log(getSortedArr([-3, 8, 7, 6, 5, -4, 3, 2, 1]));

// 8. Write a JavaScript program to find the most frequent item in an array.

// function getMostFrequentItem(array) {
//   if (!Array.isArray(array)) {
//     console.log("Please provide an array!");
//     return;
//   }

//   const obj = {};

//   for (const value of array) {
//     if (obj[value]) {
//       obj[value]++;
//     } else {
//       obj[value] = 1;
//     }
//   }

//   const entries = Array.from(Object.entries(obj));
//   entries.sort((a, b) => {
//     return b[1] - a[1];
//   });

//   return entries[0];
// }

// console.log(
//   getMostFrequentItem([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3])
// );

// 9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// function interchangeCases(str) {
//   let tempStr = "";

//   for (const value of str) {
//     if (value.charCodeAt() >= 65 && value.charCodeAt() <= 90) {
//       tempStr += value.toLowerCase();
//     } else if (value.charCodeAt() >= 97 && value.charCodeAt() <= 122) {
//       tempStr += value.toUpperCase();
//     } else {
//       tempStr += value;
//     }
//   }

//   return tempStr;
// }

// console.log(interchangeCases("The Quick Brown Fox"));
