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

// 11. Write a JavaScript program to find the sum of squares of a numerical vector.

// const array = [1, 2, 3];

// function sumOfSquares(array) {
//   let temp = 0;

//   for (const value of array) {
//     temp += value * value;
//   }

//   console.log(temp);
// }

// sumOfSquares(array);

// 12. Write a JavaScript program to compute the sum and product of an array of integers.

// const array = [1, 2, 3];

// function sumAndProduct(array) {
//   let sum = 0;
//   let product = 1;

//   for (const value of array) {
//     sum += value;
//     product *= value;
//   }

//   console.log(sum, product);
// }

// sumAndProduct(array);

// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

const array = [
  "Apple",
  "apple",
  "Mango",
  "banana",
  "Coconut",
  "apple",
  "coconut",
];

// function removeDuplicate(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i].toLowerCase() === array[j].toLowerCase()) {
//         array.splice(j, 1);
//       }
//     }
//   }

//   console.log(array);
// }

// function removeDuplicate(array) {
//   let temp = [];

//   for (let i = 0; i < array.length; i++) {
//     let isPresentInTemp = false;

//     for (let j = 0; j < temp.length; j++) {
//       if (temp[j].toLowerCase() === array[i].toLowerCase()) {
//         isPresentInTemp = true;
//       }
//     }

//     if (!isPresentInTemp) {
//       temp.push(array[i]);
//     }
//   }

//   console.log(temp);
// }

// removeDuplicate(array);

// Q15. Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."

// const color = [
//   "Blue ",
//   "Green",
//   "Red",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
//   "Orange",
//   "Violet",
//   "Indigo",
//   "Yellow ",
// ];

// function positionsOfColors(array) {
//   let temp = "";

//   for (let i = 0; i < array.length; i++) {
//     if (i + 1 === 11 || i + 1 === 12 || i + 1 === 13 || i + 1 === 19) {
//       temp += `${i + 1}th choice is ${array[i]}. \n`;
//     } else if ((i + 1) % 10 === 1) {
//       temp += `${i + 1}st choice is ${array[i]}. \n`;
//     } else if ((i + 1) % 10 === 2) {
//       temp += `${i + 1}nd choice is ${array[i]}. \n`;
//     } else if ((i + 1) % 10 === 3) {
//       temp += `${i + 1}rd choice is ${array[i]}. \n`;
//     } else if ([4, 5, 6, 7, 8, 9, 0].includes((i + 1) % 10)) {
//       temp += `${i + 1}th choice is ${array[i]}. \n`;
//     }
//   }

//   console.log(temp);
// }

// positionsOfColors(color);

// Q29. 29. Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.

function numStringRange(start = "a", end = "z", n = 1) {
  const isNumericRange = typeof start === "number" && typeof end === "number";
  const startingCode = isNumericRange ? start : start.charCodeAt();
  const endingCode = isNumericRange ? end : end.charCodeAt();

  const temp = [];

  let j = 0;

  for (let i = startingCode; i <= endingCode; i++) {
    console.log(i, j);
    if (i === startingCode) {
      temp.push(isNumericRange ? i : String.fromCharCode(i));
    } else if (j % n === 0) {
      temp.push(isNumericRange ? i : String.fromCharCode(i));
    }
    j++;
  }

  console.log(temp);
}

numStringRange(undefined, undefined, 5);
