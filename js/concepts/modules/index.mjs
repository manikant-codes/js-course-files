import { add, subtract, multiply, divide } from "./math.mjs";
import remainder from "./math.mjs";

console.log(add(2, 2));
console.log(subtract(2, 2));
console.log(multiply(2, 2));
console.log(divide(2, 2));

console.log(remainder(5, 5));

// const student = {
//   name: "John",
//   get getName() {
//     console.log(name);
//   },
//   set changeName(n) {
//     name = n;
//   },
// };

const student = {
  fname: "Manikant",
  lname: "Jha",
  get fullName() {
    return `${this.fname} ${this.lname}`;
  },
  set fullName(fullName) {
    const arr = fullName.split(" ");
    this.fname = arr[0];
    this.lname = arr[1];
  },
};

console.log(student.fullName);

// student.getName;
