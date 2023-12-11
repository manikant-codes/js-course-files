// filter method ek naya array return karta hai un array elements ke saath jinho ne haamare diye hue test ko paas kiya ho (yane jinke liye hamne true return karaya hoo).
// Jis value ke liye true return karaoge wo naye array me store hoga.
// Jis value ke liye false return karaoge wo naye array me nahi store hoga.
// Agar kuch nahi return karao ge to empty array milega.
// Ye method original array me koi changes nahi karta.

const numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, array) {
  return value < 18;
}

// function myFilter(callbackFn, array) {
//   const temp = [];
//   for (let i = 0; i < array.length; i++) {
//     const result = callbackFn(array[i], i, array);
//     if (result) {
//       temp.push(array[i]);
//     }
//   }

//   return temp;
// }

// const over18 = myFilter((value, index, array) => {
//   return value > 18;
// }, numbers);

const over18 = numbers.filter(myFunction);

console.log(over18);
