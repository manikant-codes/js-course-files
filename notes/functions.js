// function ek code ka block hai (collection/group of instructions/statements).
// Agar koi instruction(statement)/instructions(statements) bar bar aap ko repeat karni pad rahi hoo, to ye sahi nahi hai. Kyu ke agar kal ko instruction/instructions badalne pade to har jahga badalne padenge.
// To wo instruction/s jo aap repeat kar rahe hoo unhe function me likh sakte hoo.
// Aur fir us fuction ko aap baar baar use karsakte hoo. Is se kabhi changes karne pade agar to sirf ek jagh (us function me) changes karne padenge, harjagah nahi.
// syntax
// function functionName(parameter1, parameter2) {}
// Round brackets (), ke andar ham parameters (parameters wo values hain jo function ko apna kaam karne ke liye chahiye) likhte hai.
// Curly brackets {} me aap instructions/statements (ky kaaam karna hai, aur kaise karna hai) likhte hoo.

// Yaha ham ye JS ko batarahe hai ke chay kaise banani hai.
function makeTea(paani, dudh, chaypatti, chini, adarak) {
  console.log("Heat " + paani + " ml " + " paani.");
  console.log("Add " + chini + " spoons " + " of chini.");
  console.log("Add " + chaypatti + " spoons " + " of chaypatti.");
  console.log("Add " + dudh + " ml " + " of dudh.");
  console.log("Add " + adarak + " inches " + " of adarak.");
}

// Yaha ham JS ko chay banane ko keh rahe hai.
makeTea(125, 125, 2, 2, 0.5);
makeTea(50, 50, 1, 1, 0.25);
makeTea(250, 250, 4, 4, 1);
makeTea(125, 125, 2, 2, 0.5);
