// 46. Write a JavaScript program to generate all permutations of an array's elements (including duplicates).

const numbers = [1, 3, 5, 7];

// function getAllPermutations(arr) {
//   let copy = [...arr];
//   let copyNew = [...arr];
//   const allPermutations = [];

//   for (let k = 0; k < arr.length; k++) {
//     if (k !== 0) {
//       copyNew = [...arr];
//       const temp = copyNew[0];
//       copyNew[0] = copyNew[k];
//       copyNew[k] = temp;
//     }
//     for (let i = arr.length - 3; i < arr.length; i++) {
//       copy = [...copyNew];
//       const temp = copy[arr.length - 3];
//       copy[arr.length - 3] = copy[i];
//       copy[i] = temp;

//       for (let j = arr.length - 2; j < arr.length; j++) {
//         if (j === arr.length - 2) {
//           allPermutations.push([...copy]);
//           continue;
//         }
//         const temp = copy[j];
//         copy[j] = copy[j - 1];
//         copy[j - 1] = temp;
//         allPermutations.push(copy);
//       }
//     }
//   }

//   return allPermutations;
// }

// function

function getAllPermutations(arr) {}

console.log(getAllPermutations(numbers));
