// Object ek data-structure hai. Yane data ko store karene ka ek tarika hai. Isme aap ek saath ek se jada value key:value pairs me store karsakte hoo.

// Object ham {} ka use kar ke banate hai. Is tarike se object banane ko object literal kehtehai.

// Object me key aur value ko colon (:) se alag karte hai, aur do key:value pair ko comma (,) se alag karte hai.

// Kyu objects banate hai? Taake related data ko ek saath store kar sake. Is se data ko manage karna aur uske saath kaam karna aasaan hojaye gaa.

// Mai related data ko ek saath nahi rakh paa raha bina object ke. Is se us data saath kaam karna mushkil hoojata hai.
const studentName = "Ram";
const studentRoll = 10;
const studentCity = "Surat";

// Object literal
// const student = {
//   name: "Ram",
//   roll: 10,
// };
// student.city = "Surat";

// new keyword ka use karke
// new keyword ka use kar ke ham JS ko naya object banane ne ko kehte hai.
// new ke baad jo hai use ham constructor function kehte hai. Is constructor function se ham ye batate hai ke kis type ka object banana hai.

// const student = new Object({ name: "Ram" });
// student.roll = 10;
// console.log(student);

// Problems
// 1. Data Inconsistency, 2. Redundancy, 3. Difficult to Maintail and Work With

// const student1 = {
//   id: 12345,
//   firstName: "John",
//   lastName: "Doe",
//   age: 20,
//   gender: "Male",
//   email: "john.doe@example.com",
//   phone: "123-456-7890",
//   address: "123 Main St, Anytown, USA",
//   major: "Computer Science",
//   gpa: 3.8,
//   std: 10,
//   enrolled: true,
//   scholarship: "Merit-based",
//   graduationYear: 2025,
//   clubMembership: "Coding Club",
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const student2 = {
//   id: 12345,
//   firtsName: "John",
//   lastName: "Doe",
//   age: 20,
//   gender: "Male",
//   email: "john.doe@example.com",
//   phone: "123-456-7890",
//   address: "123 Main St, Anytown, USA",
//   major: "Computer Science",
//   gpa: 3.8,
//   std: 10,
//   enrolled: true,
//   scholarship: "Merit-based",
//   graduationYear: 2025,
//   clubMembership: "Coding Club",
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

function Student(id, firstName, lastName) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  //   this.standard = 10;
  //   this.getFullName = function () {
  //     return this.firstName + "-" + this.lastName;
  //   };
}

Student.prototype.standard = 10;

Student.prototype.getFullName = function () {
  return this.firstName + "-" + this.lastName;
};

const student1 = new Student(1, "John", "Doe");
const student2 = new Student(1, "James", "Doe");

console.log(student1);
console.log(student2);
