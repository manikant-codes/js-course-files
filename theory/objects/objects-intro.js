// let student1Name = "Manikant";
// let student1Roll = 10;
// let student1Class = "JS";
// let student1Marks = 70;

let student = {
  fname: "Ritu",
  lname: "Jha",
  roll: 12,
  hobbies: ["Reading", "Singing", "Drawing"],
  address: {
    city: "Surat",
    pin: 394107
  },
  createdAt: new Date(),
  math: 66,
  physics: 77,
  chemistry: 88,
  getPercentage: function () {
    const percentage =
      ((this.chemistry + this.physics + this.math) * 100) / 300;
    return percentage;
  }
};

student.getFullName = function () {
  console.log(this.fname + " " + this.lname);
};

const result = student.getPercentage();

console.log(result + 3);

// let student2 = {
//   name: "Abhishek",
//   roll: 12,
//   math: 56,
//   physics: 75,
//   chemistry: 81
// };

// function getPercentage(student) {
//   const percentage1 =
//     ((student.chemistry + student.physics + student.math) * 100) / 300;
//   console.log(percentage1);
// }

// getPercentage(student1);
// getPercentage(student2);

student.getPercentage();
