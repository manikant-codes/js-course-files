/*
 * var has global scope & function/local scope.
 * let & const has script scope, block scope & function/local scope.
 * Variables declared with var can be re-declared & re-assigned.
 * Variables declared with let cannot be re-declared but can be re-assigned.
 * Variables declared with const cannot be re-declared or re-assigned. And it must  be initialized at the time of declaration.
 */

// console.log(a);
// console.log(b);
// console.log(c);

// Automatic Declaration
// a = 5;
// b = 10;
// c = a + b;

// Declaraiton with var
// var a = 5;
// Redeclaration is Possible
// var a = 10;
// Reassignment is Possible
// a = 15;
// var b = 10;
// var c = 15;

// Declaration with let
// let a = 5;
// Redeclaration is Not Possible
// let a = 10;
// Reassignment is Possible
// a = 15;
// let b = 10;
// let c = 15;

// Declaration with const
// Must Assign a Value When Declaring
// const a;
// a = 15;
// const a = 5;
// Redeclaration is Not Possible
// const a = 5;
// Reassignment is Not Possible
// a = 5;
// const b = 10;
// const c = 15;

// console.log(a);
// console.log(b);
// console.log(c);

// const arr = [1, 2, 3];
// Reassignment is Not Possible
// arr = [12, 2, 3];
// arr[0] = 12;
// console.log(arr);

// const obj = { fruitName: "Mango", price: 50 };
// Reassignment is Not Possible
// obj = { fruitName: "Banana", price: 50 };
// obj.fruitName = "Banana";
// console.log(obj);

// var a = 10;

// {
//   var a = 20;
//   console.log(a);
// }

// console.log(a);

// let a = 10;

// {
//   let a = 20;
//   console.log(a);
// }

// console.log(a);

// const a = 10;

// {
//   const a = 20;
//   console.log(a);
// }

// console.log(a);

// const a = 10;
// var a = 45;

// {
//   const a = 20;
//   const a = 20;
//   var a = 20;
//   console.log(a);
// }

// console.log(a);
