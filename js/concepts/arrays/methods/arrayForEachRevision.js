// forEach ek built in array method hai.
// Wo ek function leta hai as an argument.
// JS me functions 1st class citizens hai. Ke jaha kahi bhi variables/expressions ka use karsakte ho waha function ka use karsakte hoo.
// forEach us function ko 3 arguments deta hai.
// 1. value: Wo array element store hota hai jiska abhi loop me number hai / turn hai / (vaaro che)
// 2. index: Jis element ka turn hai, uska array me position/index.
// 3. array: Jis array pe forEach chalaya hai wo.
// forEach jo fn hamen use pass kiya hai use bari bari / turn by turn har array (jis array pe call liya ho) element pe call karta hai.
// forEach method undefined return karta hai.

// Imagine you have a big box full of fun toys, like cars, dolls, and building blocks. Array iteration in JavaScript is like taking each toy out of the box, one by one, and playing with it!

// The box is like an array, which holds a bunch of things (the toys).
// You (the code) are like the kid playing with the toys.
// Iteration is like taking each toy out, one after the other, and doing something with it.
// There are different ways to open the box and play with the toys:

// Counting and grabbing: This is like using a for loop. You count from 1 to the number of toys in the box, and for each number, you take out the toy at that position and play with it. Just like counting all the way to your favorite toy!
// Surprise party!: This is like using a for...of loop. You just reach into the box without counting and pull out whichever toy comes out next! It's a fun surprise each time!
// Magic helper: This is like using the forEach method. You ask a helpful robot to take out each toy and give it to you, and you decide what to do with it each time.
// No matter how you open the box, the main thing is that you get to play with all the toys (elements in the array) one by one!

// So, when you hear "array iteration" in JavaScript, just remember this: it's like taking out your favorite toys from a box and having fun with them, one at a time!

// I hope this explanation makes sense to you, even though you're just 5. If you have any more questions, just ask! I'm here to help you understand coding in a fun way.

// કલ્પના કરો કે તમારી પાસે રમકડાંથી ભરેલો એક મોટો બોક્સ છે, જેમ કે કાર, પપ, અને બિલ્ડિંગ બ્લોક્સ. જાવાસ્ક્રિપ્ટમાં એરે ઇટરેશન આ બોક્સમાંથી દરેક રમકડાંને, એક-એક કરીને બહાર કાઢવા અને તેની સાથે રમવા જેવું છે!

// બોક્સ એરે જેવું છે, જે ઘણી બધી વસ્તુઓ (રમકડાં) ધરાવે છે.
// તમે (કોડ) બાળક જેવા છો જે રમકડાં સાથે રમે છે.
// ઇટરેશન એ દરેક રમકડાંને બહાર કાઢવા, એક પછી એક, અને તેની સાથે કંઈક કરવા જેવું છે.
// બોક્સ ખોલવા અને રમકડાં સાથે રમવાની વિવિધ રીતો છે:

// ગણતરી અને પકડવું: આ ફોર લૂપ વાપરવા જેવું છે. તમે બોક્સમાં રહેલા રમકડાંની સંખ્યા સુધી 1 થી ગણો છો, અને દરેક નંબર માટે, તમે તે સ્થાન પર રહેલું રમકડાં બહાર કાઢો છો અને તેની સાથે રમો છો. તમારી મનપસંદ રમકડાં સુધી ગણતરી કરવા જેવું જ!
// સરપ્રાઇઝ પાર્ટી!: આ ફોર... ઓફ લૂપ વાપરવા જેવું છે. તમે ગણ્યા વગર બોક્સમાં પહોંચો છો અને જે પણ રમકડાં બહાર આવે છે તેને બહાર કાઢો છો! દરેક વખતે આશ્ચર્યજનક!
// મેજિક હેલ્પર: આ ફોરઈચ મેથડ વાપરવા જેવું છે. તમે એક મદદગાર રોબોટને દરેક રમકડાં બહાર કાઢવા અને તમને આપવા કહો છો, અને તમે નક્કી કરો છો કે દરેક વખતે તેની સાથે શું કરવું.
// બોક્સ કેવી રીતે ખોલવો તે ધ્યાનમાં લીધા વગર, મુખ્ય વાત એ છે કે તમે તમારા બધા મનપસંદ રમકડાં (એરેમાંના તત્વો) એક-એક કરીને રમી શકો છો!

// તો, જ્યારે તમે જાવાસ્ક્રિપ્ટમાં "એરે ઇટરેશન" સાંભળો છો, ત્યારે ફક્ત આ યાદ રાખો: તે તમારા મનપસંદ રમકડાંને બોક્સમાંથી બહાર કાઢવા અને તેની સાથે રમવા જેવું છે, એક-એક કરીને!

// મને આશા છે કે આ સમજૂતી તમને સમજાય છે, ભલે તમે માત્ર 5 વર્ષના હોવ. જો તમારી પાસે બીજા કોઈ પ્રશ્નો હોય, તો ફક્ત પૂછો! હું તમને કોડિંગને મજાની રીતે સમજવામાં મદદ કરવા માટે અહીં છું.

// const table1 = [1, 2, 3, 4, 5];

// const temp = [];

// function transform(value, index, array) {
//   temp.push(value * 2);
// }

// const result = table1.forEach(transform);

// console.log(result);

// table1.forEach(function (value, index, array) {});
// table1.forEach(() => {});

// function add(callbackFn) {
//   callbackFn(4, 5);
// }

// function calculate(a, b) {
//   console.log(a + b);
// }

// add(calculate);

// add(function (a, b) {
//   console.log(a + b);
// });

// const a = function () {
//   console.log("Hello");
// };

// a();

// const temp = [];
// const temp1 = [];
// const temp2 = [];

// function myForEach(callbackFn, array) {
//   for (let i = 0; i < array.length; i++) {
//     callbackFn(array[i], i, array);
//   }
// }

// myForEach((value, index, array) => {
//   temp.push(2 * value);
// }, table1);

// myForEach((value, index, array) => {
//   temp1.push(3 * value);
// }, table1);

// myForEach((value, index, array) => {
//   temp2.push(2 * Math.PI * value );
// }, table1);

// console.log(temp, temp1, temp2);

// iteration

// const result = numbers.forEach(function (value, index, array) {
//   temp.push(value * 2);
// });

// console.log(result);
// console.log(temp);
// console.log(numbers);

// const numbers = [45, 4, 9, 16, 25];
// const temp = [];

// let i = 5;

// while (i < numbers.length) {
//   temp.push(numbers[i] * 2);
//   i++;
// }

// do {
//   console.log(numbers[i]);
//   i++;
// } while (i < numbers.length);

// let i = 0;
// for (;;) {
//   if (i >= 5) break;
//   console.log(numbers[i]);
//   i++;
// }

// let isLoopRunning = true;

// function endLoop() {
//   isLoopRunning = false;
// }

// while (isLoopRunning) {
//   // console.log("Loop is running!");
//   // for (let i = 1; i < 10000; i++) {
//   //   for (let j = 1; j < 10000; j++) {}
//   // }
// }

// while
// do while
// for

let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (;;) {
//   if (i > 10) {
//     break;
//   }
//   i++;
//   console.log(i);
// }

// for in object/array
// for of array

// console.log(obj.name);

// console.log(obj);
// for(let i = 0; )

// for (const property in object) {
// }

const obj = {
  name: "Shinchan Nohara",
  fatherName: "Harry Nohara",
  motherName: "Mitsy Nohara",
  petName: "Shero",
  age: "5",
  favourites: ["Choco Chips", "Action Kamen"],
  city: "Kasukabe",
  country: "Japan",
};

const obj1 = {
  0: "Shinchan Nohara",
  1: "Harry Nohara",
  2: "Mitsy Nohara",
  3: "Shero",
  4: "5",
  5: ["Choco Chips", "Action Kamen"],
  6: "Kasukabe",
  7: "Japan",
};

// obj.name;
// obj["name"];

// let o = "name";
// console.log(obj["name"]);
// console.log(obj[o]);

// for (const o in obj) {
//   if (o === "fatherName") {
//     console.log(o, obj[o]);
//     break;
//   }
// }

// const arr = ["Shinchan", "Harry", "Misty", "Shero", ["Choco Chips"]];

// console.log(arr);

// for (const a in arr) {
//   console.log(a, arr[a]);
// }

// for (const a of arr) {
//   console.log(a);
// }
