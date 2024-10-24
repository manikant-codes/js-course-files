// Iterator objects aise objects hain jinme se turn by turn value acess kar sakte hoo.
// Iterator objects pe for...of loop chal sakti hai.
// Iterable object pe loop chala sakte hoo, lekin for...of loop nahi. Iterator object pe for...of loop chala sakte hoo.

// let count = 0;
// let done = false;

// const obj = {
//   next: function () {
//     if (count < 10) {
//       count++;
//     } else {
//       done = true;
//     }
//     return { value: count, done: done };
//   },
// };

// Iterable Object

// const iterable = {
//   count: 0,
//   done: false,
//   next: function () {
//     if (this.count < 10) {
//       this.count++;
//     } else {
//       this.done = true;
//     }
//     return { value: this.count, done: this.done };
//   },
// };

// while (iterable.done === false) {
//   console.log(iterable.next().value);
// }

// const iterator = obj[Symbol.iterator]();

// while (true) {
//   const res = iterator.next();
//   if (res.done === true) {
//     break;
//   }
//   console.log(res.value);
// }

// let str = "Hello";
// str += "\n";
// str += "World";

// Iterator Object

const obj = {
  fname: "Manikant",
  lname: "Jha",
  roll: 10,
  asd: "asd",
  sdf: "sdf",
};

obj[Symbol.iterator] = function () {
  let index = 0;
  let done = false;
  let arrValues = Object.values(obj);
  let result = { value: arrValues[0], done: false };
  return {
    next() {
      if (index < arrValues.length) {
        result = { value: arrValues[index], done: false };
      } else {
        result = { value: undefined, done: true };
      }
      index++;
      return result;
    },
  };
};

for (o of obj) {
  console.log(o);
}

const values = Object.values(obj);

for (v of values) {
  console.log(v);
}
