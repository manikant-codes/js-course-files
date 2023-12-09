

// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // arr.forEach((item) => {
//     //     console.log(item, String(item).charCodeAt(0))
//     // })

// // console.log("unsorted", arr);
// // arr.sort(function () {});
// // console.log("sorted", arr);





// // a - b
// // 2 - 4
// // - b > a
// // a before b
// // + a > b
// // b before a
// // 0 a = b
// // do nothing

// // arr.sort(function(a, b) {
// //     return b - a;
// // })

// // const arr = [1, 22, 12, 222, 45];

// // const mySort = function (comparator) {
// //     for(let i = 0; i < arr.length; i++) {
// //         for(let j = i + 1; j < arr.length; j++) {
// //            const result = comparator(arr[i], arr[j]);
// //            if(result > 0) {
// //             let temp = arr[i];
// //             arr[i] = arr[j];
// //             arr[j] = temp;
// //            }
// //         }
// //     }   
// // }

// // console.log("unsorted", arr)

// // mySort(function (i, j) {
// //     return j - i;
// // })

// // console.log("sorted", arr)

// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saad", year:2001},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];

//   cars.sort(function(a, b) {
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if(x > y) return +1;
//     if(x < y) return -1;
//     return 0;
//   })

//   console.log(cars)