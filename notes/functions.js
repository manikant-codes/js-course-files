// function ek code ka block hai (collection/group of instructions/statements).
// Agar koi instruction(statement)/instructions(statements) bar bar aap ko repeat karni pad rahi hoo, to ye sahi nahi hai. Kyu ke agar kal ko instruction/instructions badalne pade to har jahga badalne padenge.
// To wo instruction/s jo aap repeat kar rahe hoo unhe function me likh sakte hoo.
// Aur fir us fuction ko aap baar baar use karsakte hoo. Is se kabhi changes karne pade agar to sirf ek jagh (us function me) changes karne padenge, harjagah nahi.
// syntax
// function functionName(parameter1, parameter2) {}
// Round brackets (), ke andar ham parameters (parameters wo values hain jo function ko apna kaam karne ke liye chahiye) likhte hai.
// Curly brackets {} me aap instructions/statements (ky kaaam karna hai, aur kaise karna hai) likhte hoo.
// Function ke naam ke aage () ye likh ke aap JS ko kehte ho ke ye function call karna hai. Yane is function me jo code likha hai wo chalana hai. E.g. add(1, 2).
// Agar () ye nahi lagaoge to function ka code milega.
// Functions ke varibles aur parameters ka local scope hoota hai. Yane wo sirf function ke andar hi accesible/available hoote hain.

// --------------------------------------------------
// Anonymous Functions
// --------------------------------------------------
// Aise functions jinka koi naam na hoo unhe anonymous functions kaha jata hai.
// E.g.:
// function () {
// some code
// }

// --------------------------------------------------
// Parameters
// --------------------------------------------------
// Parameters containers hain un values ke liye jinki jarurat function ko apna kaam karne ke liye hai.
// Parameters function ke andar local variables ki tarah behave karte hai.
// Yane function excution ke baad wo nahi milenge.

// Yaha ham ye JS ko batarahe hai ke chay kaise banani hai.
function makeTea(paani, dudh, chaypatti, chini, adarak) {
  console.log("Heat " + paani + " ml " + " paani.");
  console.log("Add " + chini + " spoons " + " of chini.");
  console.log("Add " + chaypatti + " spoons " + " of chaypatti.");
  console.log("Add " + dudh + " ml " + " of dudh.");
  console.log("Add " + adarak + " inches " + " of adarak.");

  return "☕".repeat(paani / 125);
}

// Yaha ham JS ko chay banane ko keh rahe hai.
const tea1 = makeTea(125, 125, 2, 2, 0.5);
const tea2 = makeTea(250, 250, 4, 4, 1);

console.log(tea);

// --------------------------------------------------
// iife Imidiately Invoked Function Expression / Self Invoking Functions
// --------------------------------------------------
// Ye normal function hai.
function minus(num1, num2) {
  console.log("minus", num1 - num2);
}
// Ye iife hai.
console.log(
  (function (num1, num2) {
    console.log("minus", num1 - num2);
  })(5, 4)
);

console.log(minus(5, 4));

// --------------------------------------------------
// Declaration vs Assignment
// --------------------------------------------------

// Function Declaration

function add(n1, n2) {
  console.log(n1 + n2);
}

add();

// Function Assignment

const minus = function (ni, n2) {
  console.log(n1 - n2);
};

minus();
