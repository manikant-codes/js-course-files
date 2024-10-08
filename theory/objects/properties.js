// const student = {
//   name: "Ram",
//   roll: 10
// };

// student.roll = 5;
// student.standard = 10;

// Object.defineProperty(student, "division", {
//   value: "A",
//   writable: true,
//   enumerable: false,
//   configurable: false
// });

// student.division = "B";

// for (const key in student) {
//   console.log("key", key);
// }
// console.log(Object.entries(student));

// delete student.division;

// console.log("student", student);
// console.log(Object.getOwnPropertyDescriptors(student));

// Object.defineProperties(student, {
//   city: { value: "Surat", writable: true, enumerable: true },
//   percentage: { value: 65, writable: true, enumerable: true }
// });

// console.log("student", student);
// console.log(Object.getOwnPropertyDescriptor(student, "city"));
// console.log(Object.getOwnPropertyDescriptors(student));

// [["key", "value"]];

// ({
//   property1: {
//     value: 10,
//     enumerable: true,
//     writable: true,
//     configurable: true
//   },
//   property2: { value: 10, enumerable: true, writable: true, configurable: true }
// });

// console.log(Object.getOwnPropertyNames(student));
// console.log(student);
// console.log(Object.getPrototypeOf(student));

// class MyArray {}
// MyArray.prototype.arrayPrototype = Object.getPrototypeOf(Array);
// const arr1 = Object.create(Object.getPrototypeOf(Array));
// const arr2 = new MyArray();
// console.log(arr1);
// console.log(arr2);

console.log(Object.getPrototypeOf([]));
console.log(Array.prototype);

console.log(Object.create([]));
console.log(Object.create(Array.prototype));

class MyArray extends Array {
    
}

console.log(new MyArray().filter);
