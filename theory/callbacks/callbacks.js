const ones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const twos = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// const threes = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
// const elements = ["<p>3</p>", "<p>6</p>", "<p>9</p>", "<p>12</p>", "<p>15</p>", "<p>18</p>", "<p>21</p>", "<p>24</p>", "<p>27</p>", "<p>30</p>"];

// const stars = ["*", "**", "***", "****", "*****", "******", "*******", "********", "*********", "**********"];
// const multiples = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [3, 6, 9, 12, 15, 18, 21, 24, 27, 30], [4, 8, 12, 16, 20, 24, 28, 32, 36, 40], [5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [6, 12, 18, 24, 30, 36, 42, 48, 54, 60], [7, 14, 21, 28, 35, 42, 49, 56, 63, 70], [8, 16, 24, 32, 40, 48, 56, 64, 72, 80], [9, 18, 27, 36, 45, 54, 63, 72, 81, 90], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]];

const twos = [];
const threes = [];
const elements = [];

for (let index = 0; index < ones.length; index++) {
  // const result = ones[index] * 2;
  // twos.push(result);
  // OR
  twos.push(ones[index] * 2);
}

for (let index = 0; index < ones.length; index++) {
  threes.push(ones[index] * 3);
}

for (let index = 0; index < ones.length; index++) {
  elements.push("<p>" + ones[index] * 3 + "</p>");
}

function transform(number) {
  const newArray = [];

  for (let index = 0; index < ones.length; index++) {
    newArray.push(ones[index] * number);
  }

  return newArray;
}

console.log("twos", transform(10));
// console.log("threes", threes);
// console.log("elements", elements);
