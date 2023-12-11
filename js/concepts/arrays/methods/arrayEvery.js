// every method array ke har element pe hamne jo function use pass kiya hai wo run karta hai aur agar ye function har element ke liye true return kare to every method true return karta hai warna false return karta hai.

const numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, array) {
  return value > 18;
}

let allOver18 = numbers.every(myFunction);

console.log(allOver18);
