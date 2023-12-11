// Array ek datastructure hai, jisme aap comma seperated elements store karsakte hoo. Comma jaruri hai.
// Datastructure yane data ko store karne ka tarika.
// Array ke help se aap multiple values ko ek saath store karsakte hoo.
// E.g. [1, 2, 3, "Apple", "Banana", "Cherry"];
// Jaruri nahi hai ke sara data ek type ka hi hoo.
// Aap differnt type ki values store karsakte hoo array me.
// E.g. [1, "Banana", true, [...], {...}, function () {} ];

// Array bhi objects hain. Lekin wo ek special type ke objects hain. Unme kuch extra properties aur methods (object ke functions) hote hain.
// Unme se ek property hai length.
// Length property ye batati hai ke array me kitne elements hain.

// Arrays ko usually (aam taur pe) const se declare karte hai. Kyu ke arrays store by reference hote hain, yane unka refrence store hota hai variable me. Isi liye unme changes kiye jaa sakte hain. Aur isi liye usually ham arrays ko const se declare karte hain.

// Array ko JS lables/keys/indexes deta hai. Ye index 0 se start hote hai aur length - 1 tak jaate hain. Length - 1 aap ke last array element ka index hoga.

// Aap new keyword ka use kar ke bhi array bana sakte hoo. Lekin ye tarika jada descriptive/elaborate/detailed hai. Yane ke isme jada steps involved hote hain. Isi liye ye tarika comparitively thoda slow hai. Aur agar zarurat naa hoo to aise arrays nahio banaoge.

// const obj = {
//   firstName: "manikant",
//   lastName: "jha",
//   rollNo: 4,
//   python: 42,
//   "laravel marks": 43,
// };

// const obj1 = {
//   0: "manikant",
//   1: "jha",
//   2: 4,
//   3: 42,
//   4: 43,
// };

// Yaha mai ek variable declare kar raha hun aur usme array store kar raha hun. Is array babane ke tarike ko Array Literal Method kehte hain.
const arr = ["manikant", "jha", 4, 42, 43];

// console.log("obj", obj1);
console.log("arr", arr);

// console.log("obj firstName", obj["firstName"]);
// console.log("obj 0", obj1["0"]);
// console.log("obj 0", obj1["0"]);
// console.log("arr 0", arr[0]);
// console.log("arr 0", arr[0]);

// console.log("arr 1", arr[1]);

// arr[2] = 10;

// console.log(arr);
const arr2 = new Array("manikant", "jha", 10, 56, 68);

console.log("arr2", arr2);
