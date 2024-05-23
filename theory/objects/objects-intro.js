let student1Name = "Manikant";
let student1Roll = 10;
let student1Class = "JS";
let student1Marks = 70;

let student2 = {
  name: "Ritu",
  roll: 12,
  class: "React",
  marks: 32,
  "fav color": "Blue",
  "fav-color": "Blue"
};

student2.age = 20;

console.log("name", student2.name);
console.log("name", student2["fav color"]);

// checkIfPass(student2.marks);
