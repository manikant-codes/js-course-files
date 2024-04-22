const arr = [1, 2, 3, 4, 5];
const str = new String("hello");
const obj = {
  fname: "Alan",
  lname: "Turing",
};

// for (const a of arr) {
//   console.log(a);
// }

// for (const s of str) {
//   console.log(s);
// }

// for (const o in obj) {
//   console.log(obj[o]);
// }

// function myNumbers() {
//   let n = 0;

//   return {
//     next: function () {
//       n += 10;
//       return { value: n, done: false };
//     },
//   };
// }

// let n = 0;

// const myIterableObj = {
//   next: function () {
//     if (n < 100) {
//       return { value: (n = n + 10), done: false };
//     }
//     return { value: undefined, done: true };
//   },
// };

// let temp = myIterableObj.next();

// while (temp.done === false) {
//   console.log(temp.value);
//   temp = myIterableObj.next();
// }

const myIterableObj = {
  fname: "Alan",
  lname: "Turing",
  born: "23 June 1912",
  died: "7 June 1954",
};

myIterableObj[Symbol.iterator] = function () {
  const values = Object.values(myIterableObj);
  let index = 0;
  return {
    next: function () {
      if (index < values.length) {
        const obj = { value: values[index], done: false };
        index++;
        return obj;
      }
      return { value: undefined, done: true };
    },
  };
};

for (const m of myIterableObj) {
  console.log(m);
}
