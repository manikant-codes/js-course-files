const fruits = ["apple", "banana", "cherry", "dragon-fruit", "elderberry"];

const resultArray = fruits.filter(function (value, index, array) {
  if (value === "dragon-fruit" || value == "banana") {
    return false;
  } else {
    return true;
  }
});

console.log("resultArray", resultArray);
