const rank = 2;

// debugger;

// if (rank === 1) {
//   console.log("Gold Medal");
// } else if (rank === 2) {
//   console.log("Silver Medal");
// } else if (rank === 3) {
//   console.log("Bronze Medal");
// } else {
//   console.log("No Medal");
// }

switch (rank) {
  case 1:
  case 2:
    console.log("Gold Medal");
    break;
  case 3:
    console.log("Bronze Medal");
    break;
  default:
    console.log("No Medal");
}
