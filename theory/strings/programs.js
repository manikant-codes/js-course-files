// function isNumber(input) {
//   if (isNaN(input)) {
//     console.log(false);
//   } else {
//     console.log(true);
//   }
// }

// isNumber(10);
// isNumber({});

function isString(input) {
  if (typeof input === "string") {
    console.log(true);
  } else {
    console.log(false);
  }
}

isString("ram");
isString({});
