// "use strict";

// console.log("this 1", this);

// const student = {
//   fname: "Manikant",
//   lname: "Jha",
//   getFullName: function () {
//     console.log("this 2", this);
//     // console.log(this.fname + this.lname);
//   },
// };

// function getThis() {
//   console.log("this 3", this);
// }

// student.getFullName();
// window.getThis();

// function handleClick(param) {
//   param.innerHTML = "clicked";
//   console.log("this", param);
// }

const student = {
  fname: "Manikant",
  lname: "Jha",
  getFullName: () => {
    console.log("this 2", this);
    // console.log(this.fname + this.lname);
  },
};

const employee = {
  fname: "Manikant",
  lname: "Jha",
  getFullName: function () {
    const fn = () => {
      console.log("this 4", this);
    };
    fn();
  },
};

const getThis = () => {
  console.log("this 3", this);
};

student.getFullName();
getThis();
employee.getFullName();
