const studentObj = { name: "Manikant", roll: 10, math: 45 };

const studentArr = [
  "Manikant",
  10,
  "Surat",
  true,
  false,
  { name: "Manikant" },
  [1, 2, 3, [2, 4, 6, { 0: [0, 4, 6] }]],
  function () {},
  /[a-z0-9]/,
  new Date(),
  10n,
];

const arr = new Array(1, 2, 3);

// console.log(studentObj["name"]);

// console.log(studentObj[0]);
// console.log(studentArr[0]);
// console.log(studentArr[1]);

// studentArr[451] = "ABC";

// studentArr.someProperty = "Some Value";

console.log(studentArr);