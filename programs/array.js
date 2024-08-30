// 06 Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

// function getDashedNumbers(number) {
//   //   debugger;
//   const numberStr = number.toString();
//   let dashedStr = "";

//   for (let i = 0; i < numberStr.length; i++) {
//     if (numberStr[i] % 2 === 0) {
//       if (numberStr[i - 1] % 2 === 0) {
//         dashedStr += "-" + numberStr[i];
//       } else {
//         dashedStr += numberStr[i];
//       }
//     } else {
//       dashedStr += numberStr[i];
//     }
//   }

//   console.log(dashedStr);
// }

// getDashedNumbers(25468);

// 07 Write a JavaScript program to sort the items of an array.

// const numbers = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// function sortArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[i]) {
//         const temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
//   console.log(numbers);
// }

// sortArray(numbers);

// 08  Write a JavaScript program to find the most frequent item in an array.

// const array = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

// function getMostFrequentItem(array) {
//   const temp = {};

//   for (const value of array) {
//     if (temp[value]) {
//       temp[value] = temp[value] + 1;
//     } else {
//       temp[value] = 1;
//     }
//   }

//   let mostFrequent;
//   let frequency = 0;

//   for (const key in temp) {
//     if (temp[key] > frequency) {
//       mostFrequent = key;
//       frequency = temp[key];
//     }
//   }

//   console.log({ mostFrequent, frequency });
// }

// getMostFrequentItem(array);

// 09. Write a JavaScript program that accepts a string as input and swaps the case of each character.

// const str = "The Quick Brown Fox";

// function reverseCases(str) {
//   let temp = "";

//   for (const value of str) {
//     if (value.charCodeAt() < 97) {
//       temp += value.toLowerCase();
//     } else {
//       temp += value.toUpperCase();
//     }
//   }

//   console.log(temp);
// }

// reverseCases(str);

// 10. Write a JavaScript program that prints the elements of the following array.

// const array = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7],
// ];

// function printNestedArrays(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log("Row " + (i + 1));
//     for (let j = 0; j < array[i].length; j++) {
//       console.log(array[i][j]);
//     }
//   }
// }

// printNestedArrays(array);
