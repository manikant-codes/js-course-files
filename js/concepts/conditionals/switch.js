function calculateRank(score) {
  if (score > 90) {
    return 1;
  } else if (score > 80) {
    return 2;
  } else if (score > 70) {
    return 3;
  } else {
    return 4;
  }
}

// const rank = calculateRank(91);

// if (calculateRank(91) == 1) {
//   console.log("Gold medal!");
// } else if (calculateRank(91) == 2) {
//   console.log("Silver medal!");
// } else if (calculateRank(91) == 3) {
//   console.log("Bronze medal!");
// } else {
//   console.log("No medal!");
// }

// switch (calculateRank(71)) {
//   case 1:
//   case 2:
//     console.log("Gold medal!");
//     break;
//   case 3:
//     console.log("Bronze medal!");
//     break;
//   default:
//     console.log("No medal!");
// }

// Example 2

// switch (calculateRank(96)) {
//   case 1:
//   case 2:
//     console.log("Gold Medal");
//     break;
//   case 3:
//   case 4:
//     console.log("Silver Medal");
//     break;
//   case 5:
//   case 6:
//     console.log("Bronze Medal");
//     break;
//   default:
//     console.log("No Medal");
// }

// 8, "orange", false

// 4 + 4, getFruit(), 5 > 6

// Example 1

// const rank = calculateRank(62);

// if (rank !== 1) {
//   console.log("if - Gold medal");
// } else if (rank == 2) {
//   console.log("if - Silver medal");
// } else if (rank == 3) {
//   console.log("if - Bronze medal");
// } else {
//   console.log("if - No medal");
// }

// switch (calculateRank(62)) {
//   case 1: //===
//     console.log("switch - Gold medal");
//     break;
//   case 2:
//     console.log("switch - Silver medal");
//     break;
//   case 3:
//     console.log("switch - Bronze medal");
//     break;
//   default:
//     console.log("switch - No medal");
// }

// switch (calculateRank(91)) {
//   case 1:
//   case 2:
//     console.log("Gold medal");
//     break;
//   case 3:
//   case 4:
//     console.log("Silver medal");
//     break;
//   case 5:
//   case 6:
//     console.log("Bronze medal");
//     break;
//   default:
//     console.log("No medal");
// }

// console.log("Next line");
