// Problems
// 1. Data Inconsistency, 2. Redundancy, 3. Difficult to Maintain and Work With

// const student1 = {
//   id: 12345,
//   fisrtName: "John",
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

function Student(id, firtsName, lastName) {
  this.id = id;
  this.firstName = firtsName;
  this.lastName = lastName;
  this.standard = 10;
  //   this.getFullName = function () {
  //     return this.firstName + " " + this.lastName;
  //   };
}

Student.prototype.city = "Surat";

Student.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

const stud1 = new Student(1, "Rahul", "Doe", 10);

const stud2 = new Student(2, "Priya", "Singh", 10);

Array.prototype.map = undefined;

const arr = [];

console.log(arr.map);
console.log(stud1);
console.log(stud2.city);
