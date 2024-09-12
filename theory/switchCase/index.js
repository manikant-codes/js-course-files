const rank = 4;
// const grade = "A";

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

// switch (grade) {
//   case "A":
//     console.log("Gold Medal");
//     break;
//   case "B":
//     console.log("Silver Medal");
//     break;
//   case "C":
//     console.log("Bronze Medal");
//     break;
//   default:
//     console.log("No Medal");
// }

switch (rank) {
  case 1:
  case 2:
    console.log("Gold Medal");
    break;
  case 3:
  case 4:
    console.log("Silver Medal");
    break;
  case 5:
  case 6:
    console.log("Bronze Medal");
    break;
  default:
    console.log("No Medal");
}
