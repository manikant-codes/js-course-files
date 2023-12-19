// console.log("avg", student1.getAvg())
// console.log("percentage", student1.getPercentage())

// const student1 = {
//   name: "Manikant Jha",
//   rollNo: 10,
//   address: "Surat",
//   phone: "9876543210",
//   math: 40,
//   sci: 38,
//   eng: 30,
//   getAvg: function () {
//     (this.math + this.sci + this.eng)/3
//   },
//   getPercentage: function () {
//     (100 * (this.math + this.sci + this.eng)) / 150
//   }
// }

// let arr = ["40", "1", "5", "25", "10", "100"];

// Array.prototype.mySort = function (callback) {
//   for(let i = this.length - 1; i > 0; i--) {
//     console.log("i", i)
//     for(let j = 0; j <= i; j++) {
//       console.log("j", j)
//       if(callback(this[j], this[j+1]) > 0) {
//         let temp = this[j];
//         this[j] = this[j + 1];
//         this[j + 1] = temp;
//         console.log(this)
//       }
//     }
//   }
// }

// arr.mySort(function (a, b) {return a - b})

// console.log("arr", arr);

// function getMinMax() {
//   let min = arr[0];
//   let max = arr[0];
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] < min) {
//       min = arr[i]
//     }
//     if(arr[i] > max) {
//       max = arr[i]
//     }
//   }
//   return [min, max]
// }

// console.log("min", min)
// console.log("max", max)

// function sort(callback) {
//   callback(40, 100)
// }

// sort(function(a, b) { return a - b})

// const callback = function(a, b) { return a - b};
// callback();

function compare(a, b) {
  if (a.year < b.year) return -1;
  if (a.year > b.year) return 1;

  if (a.language < b.language) return -1;
  if (a.language > b.language) return 1;
}

const arr = [
  { language: "C++", year: 1989 },
  { language: "Python", year: 1991 },
  { language: "Java", year: 1995 },
  { language: "JavaScript", year: 1995 },
];
