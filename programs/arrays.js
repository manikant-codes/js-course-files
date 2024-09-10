// 02 Write a JavaScript function to clone an array.
// const arr = [1, 2, [4, 0]];

// function shallowCloneArr(arr) {
//   const newArr = [...arr];
//   return newArr;
// }

// console.log((shallowCloneArr(arr)[2][0] = 3));
// console.log(arr);

// function deepCloneArr(arr) {
//   const newArr = [];
//   for (const value of arr) {
//     if (typeof value === "object") {
//       if (value instanceof Array) {
//         // const temp = new Array(value);
//         const temp = [...value];
//         newArr.push(temp);
//       }
//       if (value instanceof Object) {
//         // const temp = new Object(value);
//         const temp = { ...value };
//         newArr.push(temp);
//       }
//     } else {
//       newArr.push(value);
//     }
//   }
//   return newArr;
// }

// console.log((deepCloneArr(arr)[2][0] = 3));
// console.log(arr);

// 06 Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
// const str = "025468";

// function getDashedStr(str) {
//   let tempStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (Number(str[i]) % 2 === 0 && Number(str[i + 1]) % 2 === 0) {
//       tempStr = tempStr + str[i] + "-";
//     } else {
//       tempStr = tempStr + str[i];
//     }
//   }
//   return tempStr;
// }

// console.log(getDashedStr(str));

// 08 Write a JavaScript program to find the most frequent item in an array.
// const arr = [3, "a", "a", "a", 2, 3, "a", 3, 3, 3, 2, 4, 9, "a"];

// function getMostFrequentElement(arr) {
//   const temp = {};
//   for (const value of arr) {
//     if (temp[value]) {
//       temp[value]++;
//     } else {
//       temp[value] = 1;
//     }
//   }

//   let objMaxFrequecy = null;
//   let maxFrequecy = 0;
//   for (const key in temp) {
//     if (temp[key] > maxFrequecy) {
//       maxFrequecy = temp[key];
//       objMaxFrequecy = { [key]: temp[key] };
//     }
//   }

//   return objMaxFrequecy;
// }

// console.log(getMostFrequentElement(arr));
