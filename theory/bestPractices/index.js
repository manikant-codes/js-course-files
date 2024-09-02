// let a = 10;
// let b = 20;

// function doSomething() {
//   a = 20;
// }

// doSomething();

// function add() {
//   console.log("result: ", a + b);
// }

// add();

// let num1 = new Number(10);
// let num2 = new Number(10);

// let str1 = new String("ram");
// let str2 = new String("ram");

// console.log(num1 == num2);
// console.log(num1 === num2);

// console.log(str1 == str2);
// console.log(str1 === str2);

// const obj1 = {};
// const obj2 = new Object({});

// console.log(x + y);

// let x = 10;
// let y = 20;

// let x;
// x = 5;

// const y = 78;

// const student = {
//   name: "Ram",
//   roll: 10,
// };

// student.roll = 6;

// console.log(student);

function myFunction() {
  const inputValue = document.getElementById("my-function").value;
  const name = inputValue.match(/(function) (?<name>[a-z]*(\(\)))/).groups.name;

  eval(inputValue);
  eval(name);
}
