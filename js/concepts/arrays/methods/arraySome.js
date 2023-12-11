// some method array ke har element pe hamne jo function use pass kiya hai wo run karta hai aur agar ye function koi bhi element ke liye true return kare to some method true return karta hai warna false return karta hai.

const numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, array) {
  return value > 18;
}

let someOver18 = numbers.some(myFunction);

console.log(someOver18);
