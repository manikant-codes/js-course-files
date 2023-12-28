// "use strict";
// var a = 10;
// var b = 20;

// function add(x, y) {
//   return x + y;
// }

// console.log(x);
// console.log(y);

// add(a, b);
// add(5, 15);

// const fname = "Mitsy";
// const lname = "Nohara";

const objStudent = {
  fname: "Shinchan",
  lname: "Nohara",
  getFullName: function () {
    console.log(this.fname + " " + this.lname);
  },
};

// console.log(this);

// objStudent.getFullName();

// function myFunction() {
//   //   {
//   let carName = "Volvo";
//   //   }
//   //   carName;
// }

// {
//   let carName = "Volvo";
// }

// var alert = "abc";

// let a = "abc";
// console.log(a);

function abc() {
  console.log(this);
}

abc();

// console.log(this);
