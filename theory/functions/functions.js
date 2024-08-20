// Function code ka ek block hai, code block yane { some code } curly brackets aur uske andar ka code.
// Agar aap ko koi code ek se zada bar likh na padraha hai, to aap function bana ke wo code uske andar rakh do ge.
// Function banane ke liye ye syntax hai:
/* 
function functionName(param1, param2, parm3, ...) {
    // some code
}
*/
// function keyword se ham JS ko ye bata rahe hai ke function banana hai.
// functionName se ham function ko ek naam derahe hai. Ye naam kuch bhi hosakta hai, bas camel case me rakhna hai.
// (param1, param2, parm3, ...) function ko apna kaam karne ke liye agar kuch value chahiye to wo ham round brackets me variable bana ke unhe store karte hain. In variables ko parameters kehte hain.
// Parameters function ke local variable hote hain, yane ye sirf is function tak hi available hain, function ke bahar nahi milenge.

function makeTea(pani, milk, chayPatti, chini, adrak) {
  let x = 10;

  console.log("Boil " + pani + "ml water");
  console.log("Add " + chayPatti + "spoon chay patti");
  console.log("Add " + chini + "spoon chini");
  console.log("Add " + milk + "ml milk");
  console.log("Add " + adrak + "inch adrak");
  console.log("Tea is ready: ☕");

  return "☕";
}

console.log("x", x);

const tea1 = makeTea(250, 250, 2, 0, 1);
console.log("tea1", tea1);
makeTea(250, 250, 1, 1, 1); // Function call or function invocation
makeTea(250, 250, 2, 2, 0);
makeTea(750, 750, 3, 3, 1.5);

// console.log("Boil " + 250 + "ml water");
// console.log("Add " + 2 + "spoon chay patti");
// console.log("Add " + 2 + "spoon chini");
// console.log("Add " + 250 + "ml milk");
// // console.log("Add " + 1 + "inch adrak");
// console.log("Tea is ready: ☕");

// console.log("Boil " + 250 + "ml water");
// console.log("Add " + 2 + "spoon chay patti");
// console.log("Add " + 2 + "spoon chini");
// console.log("Add " + 250 + "ml milk");
// // console.log("Add " + 1 + "inch adrak");
// console.log("Tea is ready: ☕");

// console.log("Boil " + 250 + "ml water");
// console.log("Add " + 2 + "spoon chay patti");
// console.log("Add " + 2 + "spoon chini");
// console.log("Add " + 250 + "ml milk");
// // console.log("Add " + 1 + "inch adrak");
// console.log("Tea is ready: ☕");
