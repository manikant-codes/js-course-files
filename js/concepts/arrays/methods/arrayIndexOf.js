// indexOf method array me specified element search karta hai aur agar wo mil jaata hai to uski position return karta hai.

// Ye method do arguments leta hai, pehle argument me ham array me kya dhundhna hai wo specify karte hain.

// Dusra argument optional hai. Isme ham starting position specify karte hain. Ke kaha se search karna start karna hai.

// Agar eke se jada elements match hote hai to jo element pehle mila hai uski position return karega.

// Aur agar wo element nahi milta hai to -1 return karta hai.

const fruits = ["Apple", "Orange", "Apple", "Mango"];

let position = fruits.indexOf("Kiwi");

console.log(position);
