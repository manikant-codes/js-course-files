// lastIndexOf indexOf jaisa hi hai, lekin ye array ke end se specified element ko dhundna start karta hai aur dhundhte hue array ke starting ke or badhta hai.

// Ye bhi do arguments leta hai. Pehla argument jo element hame find karna hai wo hoga aur dusra argument starting position hoogi.

const fruits = ["Apple", "Orange", "Apple", "Mango"];

let position = fruits.lastIndexOf("Apple") + 1;

console.log(position);
