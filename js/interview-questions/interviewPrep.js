// function checkValidity(age) {
//   const myPromise = new Promise(function (resolve, reject) {
//     if (age < 18) {
//       resolve("Ice-Cream");
//     } else {
//       reject("Age must be less than 18!");
//     }
//   });
//   return myPromise;
// }

// myPromise = checkValidity(17);

// myPromise
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// let sum = 0;
// function a(n) {
//   if (n >= 1) {
//     return (sum = a(--n) + n);
//   }
// }
// a(3);
// console.log(sum);

// const obj1 = {
//   fname: "A",
//   lname: "B",
// };

// class Student {
//   constructor(fname, lname) {
//     this.fname = fname;
//     this.lname = lname;
//   }
// }

// function Person(fname, lname) {
//   this.fname = fname;
//   this.lname = lname;
// }

// const obj2 = new Student("Asd", "Asd");
// const obj3 = new Person("Sdf", "Sdf");
// const obj4 = new Object();
// const obj5 = Object.create(obj3);
// const obj6 = Object();

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);
// console.log(obj5);
// console.log(obj6);

// function getIcecream(age) {
//   return new Promise(function (resolve, reject) {
//     if (age < 18) {
//       resolve("Free icecream");
//     } else {
//       reject("No free icecream");
//     }
//   });
// }

// const obj = getIcecream(19)
//   .then(function (result) {
//     return getIcecream(12);
//   })
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
