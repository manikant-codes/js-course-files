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

class Student {
  constructor(id, fname, lname) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.standard = 10;
    // this.getFullName = function () {
    //   return this.fname + " " + this.lname;
    // };
  }
  isEnrolled = true;
  getFullName() {
    return this.fname + " " + this.lname;
  }
}

Student.prototype.city = "Surat";

// Student.prototype.getFullName = function () {
//   return this.fname + " " + this.lname;
// };

const stud1 = new Student(1, "Akshay", "Khanna");
const stud2 = new Student(2, "Paresh", "Rawal");

console.log("stud1", stud1);
console.log("stud2", stud2);
